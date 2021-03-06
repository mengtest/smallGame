var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 共用方法
 */
var GlobalFun = (function () {
    function GlobalFun() {
    }
    GlobalFun.getOption = function (key) {
        if (window.location) {
            var search = location.search;
            if (search == "") {
                return "";
            }
            search = search.slice(1);
            var searchArr = search.split("&");
            var length_1 = searchArr.length;
            for (var i = 0; i < length_1; i++) {
                var str = searchArr[i];
                var arr = str.split("=");
                if (arr[0] == key) {
                    return arr[1];
                }
            }
        }
        return "";
    };
    /**
     * 震动显示对象
     * @param        target    震动目标对象
     * @param        time      震动持续时长（秒）
     * @param        rate      震动频率(一秒震动多少次)
     * @param        maxDis    震动最大距离
     */
    GlobalFun.shakeObj = function (target, time, rate, maxDis, cb, arg) {
        this.target = target;
        this.initX = target.x;
        this.initY = target.y;
        this.maxDis = maxDis;
        this.count = time * rate;
        this.rate = rate;
        this.timer.delay = 1000 / rate;
        this.timer.repeatCount = this.count;
        if (cb) {
            this._cb = cb;
        }
        if (arg) {
            this._arg = arg;
        }
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.shaking, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.shakeComplete, this);
        this.timer.reset();
        this.timer.start();
    };
    GlobalFun.shaking = function () {
        egret.Tween.removeTweens(this.target);
        this.target.x = this.initX - this.maxDis + Math.random() * this.maxDis * 2;
        this.target.y = this.initY - this.maxDis + Math.random() * this.maxDis * 2;
        egret.Tween.get(this.target).to({ x: this.initX, y: this.initY }, 999 / this.rate);
    };
    GlobalFun.shakeComplete = function () {
        if (this.target) {
            egret.Tween.removeTweens(this.target);
            this.target.x = this.initX;
            this.target.y = this.initY;
        }
        if (this._cb && this._arg) {
            this._cb.call(this._arg);
        }
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.shaking, this);
        this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.shakeComplete, this);
    };
    /**停止震动 */
    GlobalFun.stop = function () {
        this.shakeComplete();
    };
    GlobalFun.filterToGrey = function (tar) {
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        tar.filters = [colorFlilter];
    };
    GlobalFun.skillBuffFilter = function (buffid, tar) {
        var colorMatrix = [];
        switch (buffid) {
            case 10000:
                //紫色 --狂暴
                colorMatrix = [
                    1, 0, 0, 0, 196,
                    0, 1, 0, 0, 64,
                    0, 0, 1, 0, 201,
                    0, 0, 0, 1, 0
                ];
                break;
            case 10001:
                //智谋-- 绿色
                colorMatrix = [
                    1, 0, 0, 0, 102,
                    0, 1, 0, 0, 158,
                    0, 0, 1, 0, 39,
                    0, 0, 0, 1, 0
                ];
                break;
            case 10002:
                //防御--黄色
                colorMatrix = [
                    1, 0, 0, 0, 155,
                    0, 1, 0, 0, 128,
                    0, 0, 1, 0, 26,
                    0, 0, 0, 1, 0
                ];
                break;
        }
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        tar.filters = [colorFlilter];
    };
    GlobalFun.clearFilters = function (tar) {
        tar.filters = [];
    };
    /**发送到ios请求购买 */
    GlobalFun.sendToNativePhurse = function (_data) {
        if (window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.payGood) {
            window["webkit"].messageHandlers.payGood.postMessage(JSON.stringify(_data));
        }
    };
    /**发送ios加载完成 */
    GlobalFun.sendToNativeLoadEnd = function () {
        if (window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.loadingFinish) {
            window["webkit"].messageHandlers.loadingFinish.postMessage({});
        }
    };
    /**购买返回 */
    GlobalFun.payCallBack = function (_cb) {
        GameApp.pay_cbDdata = _cb;
    };
    /**
     * 获取克制关系 判断返回是否可以攻击 true可以攻击 。false 不可以攻击
     *
     * initiativeCardAttr 主动的卡牌数据
     * passiveCardAttr 。  被动的卡牌数据
     * */
    GlobalFun.isAtk = function (initiativeCardAttr, passiveCardAttr) {
        var type1 = initiativeCardAttr.type;
        var type2 = passiveCardAttr.type;
        //判断锁定的目标是否可以攻击
        var atrBoo1 = false;
        //处理2个特殊的边界值
        if (type1 == AttrEnum.S) {
            //如果当前主动攻击方是s 遇到了f 会克制s 不可已攻击 
            atrBoo1 = !(type2 == AttrEnum.F);
        }
        else if (type1 == AttrEnum.F) {
            //如果当前是F 处于最底层 。只有S 和 F 可以进行攻击
            atrBoo1 = (type2 == AttrEnum.S || type2 == AttrEnum.F);
        }
        else {
            // 获取2个卡牌类型 在关系集合中的 索引 。等级越高的卡牌 索引越大
            var index1 = GameApp.realtionShip.indexOf(type1);
            var index2 = GameApp.realtionShip.indexOf(type2);
            atrBoo1 = index1 >= index2;
        }
        return atrBoo1;
    };
    /**获取属性值对应的字符 */
    GlobalFun.getChar = function (attrType) {
        var str = "";
        switch (attrType) {
            case AttrEnum.A:
                str = "A";
                break;
            case AttrEnum.B:
                str = "B";
                break;
            case AttrEnum.C:
                str = "C";
                break;
            case AttrEnum.D:
                str = "D";
                break;
            case AttrEnum.E:
                str = "E";
                break;
            case AttrEnum.F:
                str = "F";
                break;
            case AttrEnum.S:
                str = "S";
                break;
        }
        return str;
    };
    /**
     * 创建技能特效显示
     * @param id 技能id
     * @param parent 父级容器
     * @param loopCount 循环次数
     * @param pos 位置
     * */
    GlobalFun.createSkillEff = function (camp, id, parent, loopCount, pos) {
        // let skillCfg:any = SkillCfg.skillCfg[camp];
        var skillCfg;
        var curUseSkill;
        var loop = true;
        // if(id == 100001 || id == 100002 || id == 100003 || id == 100004){
        //     loop = true;
        // }
        for (var key in skillCfg) {
            if (skillCfg[key].skillId == id) {
                curUseSkill = skillCfg[key];
                break;
            }
        }
        var textInfo = new eui.Label();
        textInfo.size = 20;
        textInfo.scaleX = textInfo.scaleY = 1.5;
        textInfo.textColor = 0xffffff;
        parent.addChild(textInfo);
        textInfo.x = pos.x - 70;
        textInfo.y = pos.y - 150;
        textInfo.text = curUseSkill.skillName;
        egret.Tween.get(textInfo).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.circOut).wait(500).call(function () {
            egret.Tween.removeTweens(textInfo);
            if (textInfo && textInfo.parent) {
                textInfo.parent.removeChild(textInfo);
            }
            textInfo = null;
        }, this);
        if (loop) {
            var count_1 = 1;
            var minx_1 = 100;
            var maxx_1 = StageUtils.inst().getWidth() - 100;
            var miny_1 = 100;
            var maxy_1 = StageUtils.inst().getHeight() - 100;
            ;
            var mc = new MovieClip();
            mc.scaleX = mc.scaleY = 1;
            parent.addChild(mc);
            mc.playFile("" + SKILL_EFF + curUseSkill.roleSkill, loopCount, null, true);
            mc.x = (Math.random() * (maxx_1 - minx_1) + minx_1) >> 0;
            mc.y = (Math.random() * (maxy_1 - miny_1) + miny_1) >> 0;
            var interVal_1 = setInterval(function () {
                count_1 += 1;
                var mc = new MovieClip();
                mc.scaleX = mc.scaleY = 0.7;
                parent.addChild(mc);
                mc.playFile("" + SKILL_EFF + curUseSkill.roleSkill, loopCount, null, true);
                mc.x = (Math.random() * (maxx_1 - minx_1) + minx_1) >> 0;
                mc.y = (Math.random() * (maxy_1 - miny_1) + miny_1) >> 0;
                if (count_1 >= 15) {
                    clearInterval(interVal_1);
                }
            }, 100);
        }
        else {
            var mc = new MovieClip();
            mc.scaleX = mc.scaleY = 1;
            parent.addChild(mc);
            mc.playFile("" + SKILL_EFF + curUseSkill.roleSkill, loopCount, null, true);
            mc.x = pos.x;
            mc.y = pos.y;
        }
    };
    /**结算后更改关卡数据 */
    GlobalFun.setLevelDate = function () {
        if (LevelCfg.gq == 6) {
            LevelCfg.gq = 1;
            LevelCfg.gq_max = 1;
            if (LevelCfg.chapter >= 5) {
                return;
            }
            LevelCfg.chapter++;
            LevelCfg.levelCfgs[LevelCfg.chapter - 1].state = 1;
            LevelCfg.levelCfgs[LevelCfg.chapter - 1].gq[LevelCfg.gq - 1].state = 1;
            MessageManager.inst().dispatch("UPDATE_CHAPTER", this);
        }
        else {
            LevelCfg.gq++;
            LevelCfg.levelCfgs[LevelCfg.chapter - 1].gq[LevelCfg.gq - 1].state = 1;
        }
        /**共开启的章节和关卡数量 */
        if (LevelCfg.gq >= LevelCfg.gq_max) {
            LevelCfg.gq_max = LevelCfg.gq;
        }
        if (LevelCfg.chapter >= LevelCfg.chapter_max) {
            LevelCfg.chapter_max = LevelCfg.chapter;
        }
        egret.localStorage.setItem("chapter_max", "" + LevelCfg.chapter_max);
        egret.localStorage.setItem("gq_max", "" + LevelCfg.gq_max);
    };
    GlobalFun.count = 0; //计时器次数
    GlobalFun.timer = new egret.Timer(1000);
    return GlobalFun;
}());
__reflect(GlobalFun.prototype, "GlobalFun");
//# sourceMappingURL=GlobalFun.js.map