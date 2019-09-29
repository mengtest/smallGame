var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * @author
 */
var GameApp = (function (_super) {
    __extends(GameApp, _super);
    function GameApp() {
        return _super.call(this) || this;
    }
    GameApp.prototype.load = function () {
        GameApp.realtionShip = [
            AttrEnum.F,
            AttrEnum.E,
            AttrEnum.D,
            AttrEnum.C,
            AttrEnum.B,
            AttrEnum.A,
            AttrEnum.S
        ];
        eui.Button.prototype["autoSize"] = eui.Image.prototype["autoSize"] = ChapterItem.prototype["autoSize"] = function () {
            var precentw = StageUtils.inst().getWidth() / 640;
            var precenth = StageUtils.inst().getHeight() / 1136;
            this.width *= precentw;
            this.height *= precenth;
            this.x *= precentw;
            this.y *= precenth;
        };
        eui.Label.default_fontFamily = "Microsoft YaHei";
        GlobalConfig.parserData();
        // GameMap.init(RES.getRes("map_json"));
        LoadingUI.inst().hide();
        eui.Binding.bindHandler(GameApp, ["pay_cbDdata"], this.onDataCallBack, this);
        // MapView.inst().initMap(true);
        ViewManager.inst().open(StartView);
    };
    GameApp.inst = function () {
        var _inst = this.single();
        return _inst;
    };
    GameApp.prototype.onDataCallBack = function (value) {
        if (value) {
            GameApp.phurseState = false;
            GameApp.pay_cbDdata = "";
            UserTips.inst().showTips("\u8D2D\u4E70\u6210\u529F,\u83B7\u5F97\u5143\u5B9Dx" + value);
        }
    };
    GameApp.prototype.postPerLoadProgress = function (itemsLoaded, itemsTotal) {
        return [itemsLoaded, itemsTotal];
    };
    GameApp.phurseState = false;
    GameApp.realtionShip = [];
    return GameApp;
}(BaseClass));
__reflect(GameApp.prototype, "GameApp");
//# sourceMappingURL=GameApp.js.map