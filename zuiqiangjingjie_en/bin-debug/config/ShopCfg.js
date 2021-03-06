var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ShopCfg = (function () {
    function ShopCfg() {
    }
    ShopCfg.cfgs = [
        {
            insId: 100001,
            model: "",
            cardModel: "card_100001_png",
            level: 1,
            name: "TOM",
            cost: 200,
            ownNum: 0,
            upgradeNum: 100,
            quality: 4,
            type: CardType.general,
            atk: 300,
            hp: 1100,
            city: 2,
            buffTime: 0,
            jieshao: "A strong officer,With his presence,The soldiers are all full of blood",
            buffDesc: "Increase all attributes of the array15%",
            buffPrompt: 0.15,
            buffCondition: SoldierType.SOLDIER_BU,
            buffAttr: "atk_def",
        },
        // {
        // 	insId:100002,
        // 	model:"",
        // 	cardModel:"card_100002_png",
        // 	level:1,
        // 	name:"Ma Chao",
        // 	cost:200,
        // 	ownNum:0,
        // 	upgradeNum:100,
        // 	quality:1,
        // 	type:CardType.general,
        // 	atk:300,
        // 	hp:1050,
        // 	city:2,
        // 	buffTime:0,
        // 	jieshao:"Meng Meng，Son of Xiliang Mateng，After general Fubo and Ma Yuan，Generations of Liangzhou Haozu with titles。Rated second only to Lv Bu，person“Jin Ma Chao”。They are regarded by Qiang people as“General Shenwei”"
        // },
        {
            insId: 100011,
            model: "",
            cardModel: "card_100011_png",
            level: 1,
            name: "FORD",
            cost: 200,
            ownNum: 0,
            upgradeNum: 100,
            quality: 4,
            type: CardType.general,
            atk: 200,
            hp: 1200,
            city: 1,
            buffTime: 0,
            jieshao: "A stubborn man。His troops are more defensive",
            buffDesc: "Improve the defence of this array13%",
            buffPrompt: 0.13,
            buffCondition: SoldierType.SOLDIER_BU,
            buffAttr: "def",
        },
        {
            insId: 100012,
            model: "",
            cardModel: "card_100012_png",
            level: 1,
            name: "AMIS",
            cost: 200,
            ownNum: 0,
            upgradeNum: 100,
            quality: 4,
            type: CardType.general,
            atk: 250,
            hp: 950,
            city: 1,
            buffTime: 0,
            jieshao: "Good at circuitous combat,Can often beat the enemy to defeat。",
            buffDesc: "Increase attack power of this array20%",
            buffPrompt: 0.2,
            buffCondition: SoldierType.SOLDIER_QI,
            buffAttr: "atk",
        },
        {
            insId: 100021,
            model: "",
            cardModel: "card_100021_png",
            level: 1,
            name: "JI FEISI",
            cost: 200,
            ownNum: 0,
            upgradeNum: 100,
            quality: 4,
            type: CardType.general,
            atk: 200,
            hp: 1000,
            city: 3,
            buffTime: 0,
            jieshao: "Be good at giving full play to the advantages of armored forces to carry out rapid maneuver and long-distance attack。",
            buffDesc: "Increase attack power of this array20%",
            buffPrompt: 0.2,
            buffCondition: SoldierType.SOLDIER_GONG,
            buffAttr: "atk",
        },
        {
            insId: 100022,
            model: "",
            cardModel: "card_100022_png",
            level: 1,
            name: "YEMIS",
            cost: 200,
            ownNum: 0,
            upgradeNum: 100,
            quality: 4,
            type: CardType.general,
            atk: 300,
            hp: 900,
            city: 3,
            buffTime: 0,
            jieshao: "Command genius,Good at mobilizing the blood of soldiers,Gather the soldiers together。Often win without fighting",
            buffDesc: "Increase all attributes of the array8%",
            buffPrompt: 0.08,
            buffCondition: SoldierType.SOLDIER_QI,
            buffAttr: "atk_def",
        },
        {
            insId: 10003,
            model: "",
            cardModel: "card_10003_png",
            level: 1,
            name: "INTELLIGENCE",
            skillIcon: 10003,
            cost: 80,
            ownNum: 0,
            upgradeNum: 100,
            quality: 1,
            type: CardType.prop,
            atk: 0,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "Used for array arrangement before the war，Used to spy on the enemy's military situation。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        },
        // {
        // 	insId:100041,
        // 	model:"",
        // 	cardModel:"card_100041_png",
        // 	level:1,
        // 	name:"silk bag-Rob the owner while his house is on fire",
        // 	skillIcon:100041,
        // 	cost:100,
        // 	ownNum:0,
        // 	upgradeNum:100,
        // 	quality:1,
        // 	type:CardType.special_skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:3000,
        // 	jieshao:"Release poison fog，To some extent weaken the enemy，And cause continuous damage。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        // },
        // {
        // 	insId:100042,
        // 	model:"",
        // 	cardModel:"card_100041_png",
        // 	level:1,
        // 	name:"silk bag-Rob the owner while his house is on fire",
        // 	skillIcon:100041,
        // 	cost:120,
        // 	ownNum:0,
        // 	upgradeNum:80,
        // 	quality:2,
        // 	type:CardType.special_skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:6000,
        // 	jieshao:"Release poison fog，To some extent weaken the enemy，And cause continuous damage。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        // },{
        // 	insId:100043,
        // 	model:"",
        // 	cardModel:"card_100041_png",
        // 	level:1,
        // 	name:"silk bag-Rob the owner while his house is on fire",
        // 	skillIcon:100041,
        // 	cost:140,
        // 	ownNum:0,
        // 	upgradeNum:60,
        // 	quality:3,
        // 	type:CardType.special_skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:9000,
        // 	jieshao:"Release poison fog，To some extent weaken the enemy，And cause continuous damage。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        // },
        {
            insId: 100044,
            model: "",
            cardModel: "card_100041_png",
            level: 1,
            name: "VENOM",
            skillIcon: 100041,
            cost: 160,
            ownNum: 0,
            upgradeNum: 40,
            quality: 3,
            type: CardType.special_skill,
            atk: 0,
            hp: 0,
            city: -1,
            buffTime: 12000,
            jieshao: "Release poison fog，To some extent weaken the enemy，And cause continuous damage。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        },
        // {
        // 	insId:100051,
        // 	model:"",
        // 	cardModel:"card_100051_png",
        // 	level:1,
        // 	name:"silk bag-Beauty trap",
        // 	skillIcon:100051,
        // 	cost:100,
        // 	ownNum:0,
        // 	upgradeNum:100,
        // 	quality:1,
        // 	type:CardType.special_skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:3000,
        // 	jieshao:"Daze the enemy，Continued2Round。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        // }
        // ,
        // {
        // 	insId:100052,
        // 	model:"",
        // 	cardModel:"card_100051_png",
        // 	level:1,
        // 	name:"silk bag-Beauty trap",
        // 	skillIcon:100051,
        // 	cost:120,
        // 	ownNum:0,
        // 	upgradeNum:80,
        // 	quality:2,
        // 	type:CardType.special_skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:6000,
        // 	jieshao:"Daze the enemy，Continued2Round。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        // }
        // ,
        // {
        // 	insId:100053,
        // 	model:"",
        // 	cardModel:"card_100051_png",
        // 	level:1,
        // 	name:"silk bag-Beauty trap",
        // 	cost:140,
        // 	ownNum:0,
        // 	upgradeNum:60,
        // 	quality:3,
        // 	type:CardType.special_skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:9000,
        // 	jieshao:"Daze the enemy，Continued2Round。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        // },
        {
            insId: 100054,
            model: "",
            cardModel: "card_100051_png",
            level: 1,
            name: "DECEIVE",
            cost: 160,
            ownNum: 0,
            upgradeNum: 40,
            quality: 3,
            type: CardType.special_skill,
            atk: 0,
            hp: 0,
            city: -1,
            buffTime: 12000,
            jieshao: "Daze the enemy，Continued2Round。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        }
        // ,{
        // 	insId:100061,
        // 	model:"",
        // 	cardModel:"card_100061_png",
        // 	level:1,
        // 	name:"The sucker",
        // 	cost:100,
        // 	ownNum:0,
        // 	upgradeNum:100,
        // 	quality:1,
        // 	type:CardType.skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"Release many Dragons，Cause continuous damage to the enemy。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        // }
        // ,{
        // 	insId:100062,
        // 	model:"",
        // 	cardModel:"card_100061_png",
        // 	level:1,
        // 	name:"The sucker",
        // 	cost:120,
        // 	ownNum:0,
        // 	upgradeNum:80,
        // 	quality:2,
        // 	type:CardType.skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"Release many Dragons，Cause continuous damage to the enemy。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        // },{
        // 	insId:100063,
        // 	model:"",
        // 	cardModel:"card_100061_png",
        // 	level:1,
        // 	name:"The sucker",
        // 	cost:140,
        // 	ownNum:0,
        // 	upgradeNum:60,
        // 	quality:3,
        // 	type:CardType.skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"Release many Dragons，Cause continuous damage to the enemy。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        // },
        ,
        {
            insId: 100064,
            model: "",
            cardModel: "card_100061_png",
            level: 1,
            name: "STRIKE",
            cost: 160,
            ownNum: 0,
            upgradeNum: 40,
            quality: 3,
            type: CardType.skill,
            atk: 0,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "Release laser gun，Cause extensive damage to the enemy。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        }
        // ,{
        // 	insId:100071,
        // 	model:"",
        // 	cardModel:"card_100071_png",
        // 	level:1,
        // 	name:"Catch bandits first catch the ringleader",
        // 	cost:100,
        // 	ownNum:0,
        // 	upgradeNum:100,
        // 	quality:1,
        // 	type:CardType.skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"Release the hidden sword in the air，Inflict great damage on the enemy leader。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        // }
        // ,
        // {
        // 	insId:100072,
        // 	model:"",
        // 	cardModel:"card_100071_png",
        // 	level:1,
        // 	name:"Catch bandits first catch the ringleader",
        // 	cost:120,
        // 	ownNum:0,
        // 	upgradeNum:80,
        // 	quality:2,
        // 	type:CardType.skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"Release the hidden sword in the air，Inflict great damage on the enemy leader。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        // }
        // ,{
        // 	insId:100073,
        // 	model:"",
        // 	cardModel:"card_100071_png",
        // 	level:1,
        // 	name:"Catch bandits first catch the ringleader",
        // 	cost:140,
        // 	ownNum:0,
        // 	upgradeNum:60,
        // 	quality:3,
        // 	type:CardType.skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"Release the hidden sword in the air，Inflict great damage on the enemy leader。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        // }
        ,
        {
            insId: 100074,
            model: "",
            cardModel: "card_100071_png",
            level: 1,
            name: "CHARGE",
            cost: 160,
            ownNum: 0,
            upgradeNum: 40,
            quality: 3,
            type: CardType.skill,
            atk: 0,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "Command stealth aircraft to release bulk bombs on enemy positions。\n<font color=0x00ff00>(Drag into the battlefield for use)</font>"
        },
        {
            insId: 10008,
            model: "",
            cardModel: "card_10008_png",
            level: 1,
            name: "AIR STRIKE",
            skillIcon: 100081,
            cost: 200,
            ownNum: 0,
            upgradeNum: 50,
            quality: 3,
            type: CardType.special_skill,
            atk: 60,
            hp: 200,
            city: -1,
            buffTime: 0,
            jieshao: "Release a lot of rockets，Cover bombing of enemy positions。"
        },
        {
            insId: 10009,
            model: "",
            cardModel: "card_10009_png",
            level: 1,
            name: "BOMBING",
            skillIcon: 100091,
            cost: 200,
            ownNum: 0,
            upgradeNum: 50,
            quality: 3,
            type: CardType.special_skill,
            atk: 60,
            hp: 200,
            city: -1,
            buffTime: 0,
            jieshao: "Carry out tactical bombing，Sustained mass destruction of the enemy。"
        }
        // ,{
        // 	insId:100101,
        // 	model:"",
        // 	cardModel:"card_hp_png",
        // 	level:1,
        // 	name:"Blood bottle",
        // 	cost:80,
        // 	ownNum:0,
        // 	upgradeNum:100,
        // 	quality:1,
        // 	type:CardType.prop,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"One time recovery of your army20%Life value。\n<font color=0x00ff00>(Drag into own area for use)</font>"
        // }
        // ,
        // {
        // 	insId:100102,
        // 	model:"",
        // 	cardModel:"card_hp_png",
        // 	level:1,
        // 	name:"Blood bottle",
        // 	cost:100,
        // 	ownNum:0,
        // 	upgradeNum:80,
        // 	quality:2,
        // 	type:CardType.prop,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"One time recovery of your army40%Life value。\n<font color=0x00ff00>(Drag into own area for use)</font>"
        // }
        // ,{
        // 	insId:100103,
        // 	model:"",
        // 	cardModel:"card_hp_png",
        // 	level:1,
        // 	name:"Blood bottle",
        // 	cost:120,
        // 	ownNum:0,
        // 	upgradeNum:60,
        // 	quality:3,
        // 	type:CardType.prop,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"One time recovery of your army60%Life value。\n<font color=0x00ff00>(Drag into own area for use)</font>"
        // }
        // ,{
        // 	insId:100104,
        // 	model:"",
        // 	cardModel:"card_hp_png",
        // 	level:1,
        // 	name:"Blood bottle",
        // 	cost:140,
        // 	ownNum:0,
        // 	upgradeNum:40,
        // 	quality:4,
        // 	type:CardType.prop,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"One time recovery of your army80%Life value。\n<font color=0x00ff00>(Drag into own area for use)</font>"
        // },
        ,
        {
            insId: 100105,
            model: "",
            cardModel: "card_soldier_1_png",
            level: 1,
            name: "ANTIAIRCRAFT",
            cost: 20,
            ownNum: 200,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 1440,
            hp: 2880,
            city: -1,
            buffTime: 0,
            jieshao: "Carry heavy antiaircraft gun,After forming a certain scale, it has a good air defense and anti vehicle force.",
            soldierType: 1
        },
        {
            insId: 100109,
            model: "",
            cardModel: "card_100109_png",
            level: 1,
            name: "TANK",
            cost: 20,
            ownNum: 0,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 1080,
            hp: 4320,
            city: -1,
            buffTime: 0,
            jieshao: "One of the main weapons in modern land operations,Direct fire、Tracked armored combat vehicles with cross-country capability and armor protection.",
            soldierType: 1
        },
        {
            insId: 100110,
            model: "",
            cardModel: "card_100110_png",
            level: 1,
            name: "ARMOR",
            cost: 20,
            ownNum: 0,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 1080,
            hp: 4680,
            city: -1,
            buffTime: 0,
            jieshao: "Body armor thickness,Strong resistance to shelling,Large caliber gun,Gun barrel length,Aggressive.",
            soldierType: 1
        },
        {
            insId: 100106,
            model: "",
            cardModel: "card_soldier_3_png",
            level: 1,
            name: "FLYING RIDE",
            cost: 20,
            ownNum: 0,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 1080,
            hp: 3240,
            city: -1,
            buffTime: 0,
            jieshao: "A commando team of rocket elites.",
            soldierType: 3
        }
        // ,{
        // 	insId:100111,
        // 	model:"",
        // 	cardModel:"card_100111_png",
        // 	level:1,
        // 	name:"Tiger's army",
        // 	cost:20,
        // 	ownNum:0,
        // 	upgradeNum:40,
        // 	quality:2,
        // 	type:CardType.soldier,
        // 	atk:720,
        // 	hp:2880,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"The valiant regiment created by Wei state's tiger and leopard riding,Extremely powerful.",
        // 	soldierType:3
        // }
        ,
        {
            insId: 100112,
            model: "",
            cardModel: "card_100112_png",
            level: 1,
            name: "ARTILLERY",
            cost: 20,
            ownNum: 0,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 900,
            hp: 3060,
            city: -1,
            buffTime: 0,
            jieshao: "Special elite brigade of Artillery Force.",
            soldierType: 3
        },
        {
            insId: 100107,
            model: "",
            cardModel: "card_soldier_2_png",
            level: 1,
            name: "SPECIAL FORCES",
            cost: 20,
            ownNum: 200,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 720,
            hp: 3600,
            city: -1,
            buffTime: 0,
            jieshao: "Arms for special missions.",
            soldierType: 2
        },
        {
            insId: 100113,
            model: "",
            cardModel: "card_100113_png",
            level: 1,
            name: "ROCKET",
            cost: 20,
            ownNum: 0,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 900,
            hp: 3960,
            city: -1,
            buffTime: 0,
            jieshao: "Surface to air missile,Means mainly used for long-range strike.",
            soldierType: 2
        },
        {
            insId: 100108,
            model: "",
            cardModel: "card_goods_png",
            level: 1,
            name: "ARMS X 500",
            cost: 300,
            ownNum: 0,
            upgradeNum: 40,
            quality: 1,
            type: CardType.prop,
            atk: 500,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "Consume materials for conscription、Battle。"
        }
        ////////
        ,
        {
            insId: 100301,
            model: "",
            cardModel: "card_exp_10_png",
            level: 1,
            name: "EXP X 10",
            cost: 100,
            ownNum: 0,
            upgradeNum: 40,
            quality: 1,
            type: CardType.exp,
            atk: 500,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "Upgrade general"
        },
        {
            insId: 100302,
            model: "",
            cardModel: "card_exp_50_png",
            level: 1,
            name: "EXP X 50",
            cost: 200,
            ownNum: 0,
            upgradeNum: 40,
            quality: 1,
            type: CardType.exp,
            atk: 500,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "Upgrade general"
        }, {
            insId: 100303,
            model: "",
            cardModel: "card_exp_100_png",
            level: 1,
            name: "EXP X 100",
            cost: 400,
            ownNum: 0,
            upgradeNum: 40,
            quality: 1,
            type: CardType.exp,
            atk: 500,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "Upgrade general"
        }
    ];
    return ShopCfg;
}());
__reflect(ShopCfg.prototype, "ShopCfg");
//# sourceMappingURL=ShopCfg.js.map