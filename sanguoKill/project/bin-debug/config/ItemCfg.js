var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Camp;
(function (Camp) {
    //己方
    Camp[Camp["owner"] = 0] = "owner";
    //敌方
    Camp[Camp["anamy"] = 1] = "anamy";
})(Camp || (Camp = {}));
var ItemType;
(function (ItemType) {
    //武器
    ItemType[ItemType["weapon"] = 0] = "weapon";
    //防具
    ItemType[ItemType["protection"] = 1] = "protection";
    //道具
    ItemType[ItemType["prop"] = 2] = "prop";
    //进攻马
    ItemType[ItemType["weapon_ma"] = 3] = "weapon_ma";
    //防御马
    ItemType[ItemType["protection_ma"] = 4] = "protection_ma";
})(ItemType || (ItemType = {}));
/**
 * type item类型 。武器 防具 道具
 * cost 购买的花费
 * icon 图标
 * forTar 针对的目标 。己方还是地方
 * atk 攻击属性增加
 * hit 命中属性增加
 * protect 防御属性增加
 * hp 血量增加
 * agile 敏捷属性增加
 * instId 物品id 递增1就可以
 * crit 暴击
 * tip 效果提示
 * hurt 伤害
 *
 * //目前 。武器 防具 只有自己穿戴 。敌方无装备 。所以都是增加属性
 *
 * //道具有 作用到敌方
 * range 作用范围 1个人还是3个人,
 * oper 作用属性增加还是减少 1 增加 0减少
 */
var ItemCfg = (function () {
    function ItemCfg() {
    }
    ItemCfg.itemCfg = [
        {
            type: ItemType.weapon,
            cost: 500,
            icon: "10000.png",
            name: "诸葛连弩",
            forTar: Camp.owner,
            atk: 25,
            hit: 5,
            instId: 10000
        },
        {
            type: ItemType.weapon,
            cost: 1000,
            icon: "10001.png",
            name: "金火罐炮",
            forTar: Camp.owner,
            atk: 39,
            hit: 8,
            instId: 10001
        },
        {
            type: ItemType.weapon,
            cost: 1500,
            icon: "10002.png",
            name: "雌雄双剑",
            forTar: Camp.owner,
            atk: 53,
            hit: 10,
            instId: 10002
        },
        {
            type: ItemType.weapon,
            cost: 3300,
            icon: "10003.png",
            name: "寒冰剑",
            forTar: Camp.owner,
            atk: 70,
            hit: 14,
            instId: 10003
        },
        {
            type: ItemType.weapon,
            cost: 3300,
            icon: "10004.png",
            name: "青虹剑",
            forTar: Camp.owner,
            atk: 85,
            hit: 20,
            instId: 10004
        },
        {
            type: ItemType.weapon,
            cost: 7000,
            icon: "10005.png",
            name: "古锭刀",
            forTar: Camp.owner,
            atk: 60,
            hit: 25,
            instId: 10005
        },
        {
            type: ItemType.weapon,
            cost: 9000,
            icon: "10006.png",
            name: "贯石斧",
            forTar: Camp.owner,
            atk: 70,
            hit: 30,
            instId: 10006
        },
        {
            type: ItemType.weapon,
            cost: 22000,
            icon: "10007.png",
            name: "李广之弓",
            forTar: Camp.owner,
            atk: 80,
            hit: 35,
            instId: 10007
        },
        {
            type: ItemType.weapon,
            cost: 45000,
            icon: "10008.png",
            name: "吕布之弓",
            forTar: Camp.owner,
            atk: 100,
            hit: 40,
            instId: 10008
        },
        {
            type: ItemType.weapon,
            cost: 60000,
            icon: "10009.png",
            name: "流星锤",
            forTar: Camp.owner,
            atk: 115,
            hit: 45,
            instId: 10009
        },
        {
            type: ItemType.weapon,
            cost: 85000,
            icon: "10010.png",
            name: "丈八蛇矛",
            forTar: Camp.owner,
            atk: 120,
            hit: 50,
            instId: 10010
        },
        {
            type: ItemType.weapon,
            cost: 100000,
            icon: "10011.png",
            name: "青龙偃月",
            forTar: Camp.owner,
            atk: 130,
            hit: 55,
            instId: 10011
        },
        {
            type: ItemType.weapon,
            cost: 140000,
            icon: "10012.png",
            name: "竹雀羽扇",
            forTar: Camp.owner,
            atk: 140,
            hit: 60,
            instId: 10012
        },
        {
            type: ItemType.weapon,
            cost: 160000,
            icon: "10013.png",
            name: "方天画戟",
            forTar: Camp.owner,
            atk: 150,
            hit: 70,
            instId: 10013
        },
        {
            type: ItemType.weapon,
            cost: 180000,
            icon: "10014.png",
            name: "麒麟弓",
            forTar: Camp.owner,
            atk: 165,
            hit: 80,
            instId: 10014
        },
        {
            type: ItemType.weapon_ma,
            cost: 5000,
            icon: "10015.png",
            name: "大宛",
            forTar: Camp.owner,
            atk: 20,
            crit: 20,
            instId: 10015
        },
        {
            type: ItemType.weapon_ma,
            cost: 10000,
            icon: "10016.png",
            name: "赤兔",
            forTar: Camp.owner,
            atk: 40,
            crit: 40,
            instId: 10016
        },
        {
            type: ItemType.weapon_ma,
            cost: 25000,
            icon: "10017.png",
            name: "紫骍",
            forTar: Camp.owner,
            atk: 60,
            crit: 60,
            instId: 10017
        },
        {
            type: ItemType.protection,
            cost: 1000,
            icon: "10018.png",
            name: "白银狮子",
            forTar: Camp.owner,
            protect: 1,
            hp: 50,
            instId: 10018
        },
        {
            type: ItemType.protection,
            cost: 3000,
            icon: "10019.png",
            name: "仁王盾",
            forTar: Camp.owner,
            protect: 2,
            hp: 100,
            instId: 10019
        },
        {
            type: ItemType.protection,
            cost: 5000,
            icon: "10020.png",
            name: "藤甲",
            forTar: Camp.owner,
            protect: 3,
            hp: 150,
            instId: 10020
        },
        {
            type: ItemType.protection,
            cost: 8500,
            icon: "10021.png",
            name: "黄金鎧",
            forTar: Camp.owner,
            protect: 4,
            hp: 200,
            instId: 10021
        },
        {
            type: ItemType.protection,
            cost: 12000,
            icon: "10022.png",
            name: "玉玺",
            forTar: Camp.owner,
            protect: 5,
            hp: 400,
            instId: 10022
        },
        {
            type: ItemType.protection,
            cost: 25000,
            icon: "10023.png",
            name: "八卦阵",
            forTar: Camp.owner,
            protect: 6,
            hp: 500,
            instId: 10023
        },
        {
            type: ItemType.protection_ma,
            cost: 6000,
            icon: "10024.png",
            name: "的盧",
            forTar: Camp.owner,
            protect: 1,
            agile: 22,
            instId: 10024
        },
        {
            type: ItemType.protection_ma,
            cost: 10000,
            icon: "10025.png",
            name: "驊騮",
            forTar: Camp.owner,
            protect: 2,
            agile: 35,
            instId: 10025
        },
        {
            type: ItemType.protection_ma,
            cost: 20000,
            icon: "10026.png",
            name: "绝影",
            forTar: Camp.owner,
            protect: 3,
            agile: 48,
            instId: 10026
        },
        {
            type: ItemType.protection_ma,
            cost: 30000,
            icon: "10027.png",
            name: "爪黄飞电",
            forTar: Camp.owner,
            protect: 4,
            agile: 65,
            instId: 10027
        },
        {
            type: ItemType.prop,
            cost: 400,
            icon: "10028.png",
            name: "桃",
            tip: "回复我方一个人100的生命值",
            forTar: Camp.owner,
            hp: 100,
            range: 1,
            oper: 1,
            instId: 10028
        },
        {
            type: ItemType.prop,
            cost: 600,
            icon: "10030.png",
            name: "过河拆桥",
            tip: "敌方一个人攻击下降30%",
            forTar: Camp.anamy,
            atk: 0.3,
            range: 1,
            oper: 0,
            instId: 10030
        },
        {
            type: ItemType.prop,
            cost: 800,
            icon: "10031.png",
            name: "火杀",
            tip: "给敌方一人造成200%的伤害",
            forTar: Camp.anamy,
            hurt: 2,
            range: 1,
            oper: 0,
            instId: 10031
        },
        {
            type: ItemType.prop,
            cost: 900,
            icon: "10032.png",
            name: "雷杀",
            tip: "给敌方一人造成250%的伤害",
            forTar: Camp.anamy,
            hurt: 2.5,
            range: 1,
            oper: 0,
            instId: 10032
        },
        {
            type: ItemType.prop,
            cost: 1450,
            icon: "10035.png",
            name: "火攻",
            tip: "给敌人260%的伤害",
            forTar: Camp.anamy,
            hurt: 2.6,
            range: 1,
            oper: 0,
            instId: 10035
        },
        {
            type: ItemType.prop,
            cost: 1650,
            icon: "10036.png",
            name: "闪电",
            tip: "给敌人300%的伤害",
            forTar: Camp.anamy,
            hurt: 3,
            range: 1,
            oper: 0,
            instId: 10036
        },
        {
            type: ItemType.prop,
            cost: 2000,
            icon: "10037.png",
            name: "桃园结义",
            tip: "我方所有人回复500的生命值",
            forTar: Camp.owner,
            hp: 500,
            range: 3,
            oper: 1,
            instId: 10037
        },
        {
            type: ItemType.prop,
            cost: 2200,
            icon: "10038.png",
            name: "兵粮寸断",
            tip: "敌方所有人攻击下降30%",
            forTar: Camp.anamy,
            atk: 0.3,
            range: 3,
            oper: 0,
            instId: 10038
        },
        {
            type: ItemType.prop,
            cost: 2500,
            icon: "10039.png",
            name: "万箭齐发",
            tip: "给敌方所有人250%的伤害",
            forTar: Camp.anamy,
            hurt: 2.5,
            range: 3,
            oper: 0,
            instId: 10039
        },
        {
            type: ItemType.prop,
            cost: 3000,
            icon: "10040.png",
            name: "南蛮入侵",
            tip: "给敌方所有人300%的伤害",
            forTar: Camp.anamy,
            hurt: 3,
            range: 3,
            oper: 0,
            instId: 10040
        },
    ];
    ItemCfg.bagCfg = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ];
    return ItemCfg;
}());
__reflect(ItemCfg.prototype, "ItemCfg");
//# sourceMappingURL=ItemCfg.js.map