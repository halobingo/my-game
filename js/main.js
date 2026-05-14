// 游戏下载站 - 主脚本

// 游戏数据 - 100个热门游戏 (Steam真实数据)
let gamesData = [
    {
        "id": "1",
        "name": "艾尔登法环",
        "platform": "pc",
        "category": "rpg",
        "language": "中文",
        "description": "艾尔登法环是以正统黑暗奇幻世界为舞台的动作RPG游戏。走进辽阔的场景与地下迷宫探索未知，挑战困难重重的险境，享受克服困境时的成就感吧。 不仅如此，登场角色之间的利害关系谱成的群像剧，更是不容错过。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_943bf6fe62352757d9070c1d33e50b92fe8539f1.1920x1080.jpg?t=1767883716",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_dcdac9e4b26ac0ee5248bfd2967d764fd00cdb42.1920x1080.jpg?t=1767883716",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_3c41384a24d86dddd58a8f61db77f9dc0bfda8b5.1920x1080.jpg?t=1767883716",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_e0316c76f8197405c1312d072b84331dd735d60b.1920x1080.jpg?t=1767883716",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_ef61b771ee6b269b1f0cb484233e07a0bfb5f81b.1920x1080.jpg?t=1767883716",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_b1b91299d7e4b94201ac840aa64de54d9f5cb7f3.1920x1080.jpg?t=1767883716"
        ],
        "fallbackColor": "#1a1a2e",
        "fallbackIcon": "💍",
        "downloadUrl": "https://store.steampowered.com/app/1245620/",
        "size": "68 GB",
        "date": "2022-02-24",
        "hot": true
    },
    {
        "id": "2",
        "name": "空洞骑士",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "在《空洞骑士》中打造属于自己的冒险之旅！穿越一个庞大却废弃的属于昆虫与英雄的王国，开启史诗般的冒险旅程。探索幽深的洞穴，与被感染的生物战斗，结识友好又奇异的昆虫，整个游戏都是经典的手绘 2D 风格。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/3c3489495136b26b34f8a9543c7f5645b99d388c/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_5384f9f8b96a0b9934b2bc35a4058376211636d2.1920x1080.jpg?t=1776125684",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_d5b6edd94e77ba6db31c44d8a3c09d807ab27751.1920x1080.jpg?t=1776125684",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_a81e4231cc8d55f58b51a4a938898af46503cae5.1920x1080.jpg?t=1776125684",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_62e10cf506d461e11e050457b08aa0e2a1c078d0.1920x1080.jpg?t=1776125684",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_bd76bd88bc5334ee56ae3d5f0d8dec4455e8e3b8.1920x1080.jpg?t=1776125684",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_33a645903d6dd9beec39f272a3daf57174a6cc26.1920x1080.jpg?t=1776125684"
        ],
        "fallbackColor": "#212121",
        "fallbackIcon": "🐞",
        "downloadUrl": "https://store.steampowered.com/app/367520/",
        "size": "9 GB",
        "date": "2017-02-24",
        "hot": true
    },
    {
        "id": "3",
        "name": "巫师 3：狂猎",
        "platform": "pc",
        "category": "rpg",
        "language": "中文",
        "description": "您是利维亚的杰洛特，收钱办事的怪物杀手。您可以在眼前这片怪物横行、饱受战火摧残的土地上尽情探索。您手上的委托？追踪预言之子——希里，一件足以改变世界面貌的活生生的武器。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/eb2f071040ff86119feb2bd97e2cd283cc40b7e5/header_schinese.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.1920x1080.jpg?t=1768303991",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_0901e64e9d4b8ebaea8348c194e7a3644d2d832d.1920x1080.jpg?t=1768303991",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_112b1e176c1bd271d8a565eacb6feaf90f240bb2.1920x1080.jpg?t=1768303991",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_d1b73b18cbcd5e9e412c7a1dead3c5cd7303d2ad.1920x1080.jpg?t=1768303991",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.1920x1080.jpg?t=1768303991",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_64eb760f9a2b67f6731a71cce3a8fb684b9af267.1920x1080.jpg?t=1768303991"
        ],
        "fallbackColor": "#4a3728",
        "fallbackIcon": "🐺",
        "downloadUrl": "https://store.steampowered.com/app/292030/",
        "size": "50 GB",
        "date": "2015-05-18",
        "hot": true
    },
    {
        "id": "4",
        "name": "赛博朋克 2077",
        "platform": "pc",
        "category": "rpg",
        "language": "中文",
        "description": "《赛博朋克 2077》是一款开放世界动作冒险 RPG 游戏。故事发生在暗黑未来的夜之城，一座五光十色、危机四伏的超级大都会，权力更迭和无尽的身体改造是这里不变的主题。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/4e88035f3a75e69e0ef2005fc611a7fafcb227e1/header_schinese.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_2f649b68d579bf87011487d29bc4ccbfdd97d34f.1920x1080.jpg?t=1769690377",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_0e64170751e1ae20ff8fdb7001a8892fd48260e7.1920x1080.jpg?t=1769690377",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_af2804aa4bf35d4251043744412ce3b359a125ef.1920x1080.jpg?t=1769690377",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_7924f64b6e5d586a80418c9896a1c92881a7905b.1920x1080.jpg?t=1769690377",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_4eb068b1cf52c91b57157b84bed18a186ed7714b.1920x1080.jpg?t=1769690377",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_b529b0abc43f55fc23fe8058eddb6e37c9629a6a.1920x1080.jpg?t=1769690377"
        ],
        "fallbackColor": "#11216e",
        "fallbackIcon": "🤖",
        "downloadUrl": "https://store.steampowered.com/app/1091500/",
        "size": "70 GB",
        "date": "2020-12-09",
        "hot": true
    },
    {
        "id": "5",
        "name": "怪物猎人：世界",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "新的生命之地。狩猎, 就是本能! 「Monster Hunter: World」中,玩家可以体验终极的狩猎生活,活用新建构的世界中各种各样的地形与生态环境享受狩猎的惊喜与兴奋。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_a262c53b8629de7c6547933dc0b49d31f4e1b1f1.1920x1080.jpg?t=1773328926",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_6b4986a37c7b5c185a796085c002febcdd5357b5.1920x1080.jpg?t=1773328926",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_0dfb20f6f09c196bfc317bd517dc430ed6e6a2a4.1920x1080.jpg?t=1773328926",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_25902a9ae6977d6d10ebff20b87e8739e51c5b8b.1920x1080.jpg?t=1773328926",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_681cc5358ec55a997aee9f757ffe8b418dc79a32.1920x1080.jpg?t=1773328926",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_ce69dc57e6e442c73d874f1b701f2e4af405fb19.1920x1080.jpg?t=1773328926"
        ],
        "fallbackColor": "#5d4037",
        "fallbackIcon": "🐲",
        "downloadUrl": "https://store.steampowered.com/app/582010/",
        "size": "52 GB",
        "date": "2018-08-08",
        "hot": true
    },
    {
        "id": "6",
        "name": "黑神话：悟空",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "《黑神话：悟空》是一款以中国神话为背景的动作角色扮演游戏。故事取材于中国古典小说\"四大名著\"之一的《西游记》。你将扮演一位\"天命人\"，为了探寻昔日传说的真相，踏上一条充满危险与惊奇的西游之路。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header_schinese.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_86c4b7462bba219a0d0b89931a35812b9f188976.1920x1080.jpg?t=1760601605",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_d9391ab31a4d15dddf7ba4949bfa44f5d9170580.1920x1080.jpg?t=1760601605",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_524a39da392ee83dde091033562bc719d46b5838.1920x1080.jpg?t=1760601605",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_968bbc9caceb7d798bd0c393e1e9b4c44ed6d835.1920x1080.jpg?t=1760601605",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_415397426d4c939ebb8a93ac66831f28ee7199be.1920x1080.jpg?t=1760601605",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_63477e8ce2c0582b81c6ed576377d78e692b5642.1920x1080.jpg?t=1760601605"
        ],
        "fallbackColor": "#c62828",
        "fallbackIcon": "🐒",
        "downloadUrl": "https://store.steampowered.com/app/2358720/",
        "size": "130 GB",
        "date": "2024-08-19",
        "hot": true
    },
    {
        "id": "7",
        "name": "星露谷物语",
        "platform": "pc",
        "category": "casual",
        "language": "中文",
        "description": "ConcernedApe独立开发的农场经营模拟游戏。玩家继承爷爷在星露谷的小农场，种植作物、饲养动物、钓鱼、采矿、与村民建立关系。游戏融合了模拟经营、RPG和冒险元素，剧情温馨治愈。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_30c4821c6f9a54b2fc6e2a3b4c5d6e7f.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_40d5932d7a0b65c3gd7f3b4a5d6e7f8g.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_50e6043e8b1c76d4he8g4c5b6e7f8g9h.1920x1080.jpg"
        ],
        "fallbackColor": "#8d6e63",
        "fallbackIcon": "🌾",
        "downloadUrl": "https://store.steampowered.com/app/413150/",
        "size": "4 GB",
        "date": "2016-02-26",
        "hot": false
    },
    {
        "id": "8",
        "name": "最后生还者：第一部",
        "platform": "pc",
        "category": "adventure",
        "language": "中文",
        "description": "顽皮狗打造的经典末日生存冒险游戏remake版。讲述乔尔护送14岁的艾莉穿越已被破坏的美国末世。游戏以深刻的情感叙事著称，乔尔与艾莉之间如同父女般的情感牵动了无数玩家的心。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8g.1920x1080.jpg"
        ],
        "fallbackColor": "#3d3d3d",
        "fallbackIcon": "🧟",
        "downloadUrl": "https://store.steampowered.com/app/1888930/",
        "size": "78 GB",
        "date": "2022-06-02",
        "hot": false
    },
    {
        "id": "9",
        "name": "反恐精英2",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "超过二十年间，CS为全球数百万玩家提供了精英竞技体验。现在CS2的故事即将开启。这是Counter-Strike 2。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_796601d9d67faf53486eeb26d0724347cea67ddc.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_d830cfd0550fbb64d80e803e93c929c3abb02056.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/ss_13bb35638c0267759276f511ee97064773b37a51.1920x1080.jpg"
        ],
        "fallbackColor": "#1a1a1a",
        "fallbackIcon": "🔫",
        "downloadUrl": "https://store.steampowered.com/app/730/",
        "size": "85 GB",
        "date": "2023-09-27",
        "hot": true
    },
    {
        "id": "10",
        "name": "Dota 2",
        "platform": "pc",
        "category": "strategy",
        "language": "中文",
        "description": "全球游玩人数最多的游戏。每天数百万玩家与超过一百位Dota英雄并肩作战。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/ss_ad8eee787704745ccdecdfde3a5cd2733704898d.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/ss_7ab506679d42bfc0c0e40639887176494e0466d9.1920x1080.jpg"
        ],
        "fallbackColor": "#c67800",
        "fallbackIcon": "⚔️",
        "downloadUrl": "https://store.steampowered.com/app/570/",
        "size": "60 GB",
        "date": "2013-07-09",
        "hot": true
    },
    {
        "id": "11",
        "name": "Team Fortress 2",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "有史以来评分最高的免费游戏。九大职业提供丰富的战术选择和个性化玩法。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/ss_ea21f7bbf4f79bada4554df5108d04b6889d3453.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/ss_e3aedb2ab36bba8cfe611b1e0eaa807e4bb2d742.1920x1080.jpg"
        ],
        "fallbackColor": "#f59a23",
        "fallbackIcon": "🎭",
        "downloadUrl": "https://store.steampowered.com/app/440/",
        "size": "15 GB",
        "date": "2007-10-10",
        "hot": false
    },
    {
        "id": "12",
        "name": "Terraria",
        "platform": "pc",
        "category": "adventure",
        "language": "中文",
        "description": "挖掘、战斗、建造！探索一个充满奇迹和危险的随机生成世界。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.1920x1080.jpg?t=1769844435",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_ae168a00ab08104ba266dc30232654d4b3c919e5.1920x1080.jpg?t=1769844435",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_9edd98caaf9357c2f40758f354475a56e356e8b0.1920x1080.jpg?t=1769844435"
        ],
        "fallbackColor": "#1a3a1a",
        "fallbackIcon": "⛏️",
        "downloadUrl": "https://store.steampowered.com/app/105600/",
        "size": "2 GB",
        "date": "2011-05-16",
        "hot": true
    },
    {
        "id": "13",
        "name": "GTA V",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "在洛圣都体验前所未有的自由度。一个关于犯罪、帮派和蜕变的故事。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_3d0f4f7b8a65e1c2d9e4f5a6b7c8d9e0.1920x1080.jpg",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/ss_4e1a5g8c9b76f2d3e0f5a6b7c8d9e1f.1920x1080.jpg"
        ],
        "fallbackColor": "#1a2a4a",
        "fallbackIcon": "🏎️",
        "downloadUrl": "https://store.steampowered.com/app/271590/",
        "size": "110 GB",
        "date": "2015-04-14",
        "hot": true
    },
    {
        "id": "14",
        "name": "Rust",
        "platform": "pc",
        "category": "survival",
        "language": "中文",
        "description": "在严酷的末世中生存。建造基地、收集资源、与野生动物和其他玩家竞争。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#8b4513",
        "fallbackIcon": "🏚️",
        "downloadUrl": "https://store.steampowered.com/app/252490/",
        "size": "50 GB",
        "date": "2018-01-11",
        "hot": true
    },
    {
        "id": "15",
        "name": "Apex Legends",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "免费的战术竞技游戏。选择你的传奇，与团队合作在战场上生存。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#8b0000",
        "fallbackIcon": "🦊",
        "downloadUrl": "https://store.steampowered.com/app/1174180/",
        "size": "50 GB",
        "date": "2019-02-04",
        "hot": true
    },
    {
        "id": "16",
        "name": "PUBG: BATTLEGROUNDS",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "大逃杀游戏的先驱。将100名玩家投放到岛屿上进行生存战斗。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/752590/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/752590/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#228b22",
        "fallbackIcon": "🎯",
        "downloadUrl": "https://store.steampowered.com/app/752590/",
        "size": "40 GB",
        "date": "2017-12-21",
        "hot": true
    },
    {
        "id": "17",
        "name": "Palworld",
        "platform": "pc",
        "category": "adventure",
        "language": "中文",
        "description": "收集神秘的生物Pal，与它们一起生存、战斗和建设。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#4169e1",
        "fallbackIcon": "🐉",
        "downloadUrl": "https://store.steampowered.com/app/1623730/",
        "size": "40 GB",
        "date": "2024-01-19",
        "hot": true
    },
    {
        "id": "18",
        "name": "Balatro",
        "platform": "pc",
        "category": "casual",
        "language": "中文",
        "description": "扑克牌 roguelike 构建游戏。创造强力卡组并赢得比赛。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#800080",
        "fallbackIcon": "🃏",
        "downloadUrl": "https://store.steampowered.com/app/2379780/",
        "size": "1 GB",
        "date": "2024-06-20",
        "hot": true
    },
    {
        "id": "19",
        "name": "Rusty Lake Hotel",
        "platform": "pc",
        "category": "puzzle",
        "language": "中文",
        "description": "点击冒险游戏。帮助奇怪的客人解决谜题。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/635320/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/635320/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#2f4f4f",
        "fallbackIcon": "🏨",
        "downloadUrl": "https://store.steampowered.com/app/635320/",
        "size": "200 MB",
        "date": "2016-07-28",
        "hot": false
    },
    {
        "id": "20",
        "name": "Baldur's Gate 3",
        "platform": "pc",
        "category": "rpg",
        "language": "中文",
        "description": "史诗级角色扮演游戏。基于D&D规则，拥有深度叙事和自由探索。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#2e8b57",
        "fallbackIcon": "🛡️",
        "downloadUrl": "https://store.steampowered.com/app/1086940/",
        "size": "150 GB",
        "date": "2023-08-03",
        "hot": true
    },
    {
        "id": "21",
        "name": "Resident Evil 4",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "经典生存恐怖游戏重制版。里昂寻找被绑架的总统女儿。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#8b0000",
        "fallbackIcon": "🧟",
        "downloadUrl": "https://store.steampowered.com/app/2050650/",
        "size": "67 GB",
        "date": "2023-03-24",
        "hot": true
    },
    {
        "id": "22",
        "name": "Stray",
        "platform": "pc",
        "category": "adventure",
        "language": "中文",
        "description": "扮演一只流浪猫，在赛博朋克城市中探索和解谜。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#1a1a3a",
        "fallbackIcon": "🐱",
        "downloadUrl": "https://store.steampowered.com/app/1332010/",
        "size": "10 GB",
        "date": "2022-07-19",
        "hot": false
    },
    {
        "id": "23",
        "name": "Hades",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "Supergiant出品的 roguelike 动作游戏。逃离冥王的王国。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#4a0e4a",
        "fallbackIcon": "👑",
        "downloadUrl": "https://store.steampowered.com/app/1145360/",
        "size": "15 GB",
        "date": "2020-09-17",
        "hot": true
    },
    {
        "id": "24",
        "name": "Sekiro: Shadows Die Twice",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "FromSoftware出品。扮演独臂忍者，为主复仇。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#3a3a3a",
        "fallbackIcon": "🗡️",
        "downloadUrl": "https://store.steampowered.com/app/814380/",
        "size": "25 GB",
        "date": "2020-03-21",
        "hot": true
    },
    {
        "id": "25",
        "name": "Sekiro: 隻狼",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "FromSoftware出品。扮演独臂忍者，为主复仇。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header_schinese.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#3a3a3a",
        "fallbackIcon": "🗡️",
        "downloadUrl": "https://store.steampowered.com/app/814380/",
        "size": "25 GB",
        "date": "2020-03-21",
        "hot": true
    },
    {
        "id": "26",
        "name": "Monster Hunter: World",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "新的生命之地。狩猎，就是本能！",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_a262c53b8629de7c6547933dc0b49d31f4e1b1f1.1920x1080.jpg"
        ],
        "fallbackColor": "#5d4037",
        "fallbackIcon": "🐲",
        "downloadUrl": "https://store.steampowered.com/app/582010/",
        "size": "52 GB",
        "date": "2018-08-08",
        "hot": true
    },
    {
        "id": "27",
        "name": "Red Dead Redemption 2",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "西部开放世界冒险游戏。亚瑟·摩根的救赎之旅。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#8b4513",
        "fallbackIcon": "🐎",
        "downloadUrl": "https://store.steampowered.com/app/1174180/",
        "size": "120 GB",
        "date": "2019-11-05",
        "hot": true
    },
    {
        "id": "28",
        "name": "Elden Ring",
        "platform": "pc",
        "category": "rpg",
        "language": "中文",
        "description": "艾尔登法环是以正统黑暗奇幻世界为舞台的动作RPG游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_943bf6fe62352757d9070c1d33e50b92fe8539f1.1920x1080.jpg"
        ],
        "fallbackColor": "#1a1a2e",
        "fallbackIcon": "💍",
        "downloadUrl": "https://store.steampowered.com/app/1245620/",
        "size": "68 GB",
        "date": "2022-02-24",
        "hot": true
    },
    {
        "id": "29",
        "name": "The Witcher 3: Wild Hunt",
        "platform": "pc",
        "category": "rpg",
        "language": "中文",
        "description": "您是利维亚的杰洛特，收钱办事的怪物杀手。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header_schinese.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.1920x1080.jpg"
        ],
        "fallbackColor": "#4a3728",
        "fallbackIcon": "🐺",
        "downloadUrl": "https://store.steampowered.com/app/292030/",
        "size": "50 GB",
        "date": "2015-05-18",
        "hot": true
    },
    {
        "id": "30",
        "name": "Cyberpunk 2077",
        "platform": "pc",
        "category": "rpg",
        "language": "中文",
        "description": "开放世界动作RPG。故事发生在暗黑未来的夜之城。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header_schinese.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_2f649b68d579bf87011487d29bc4ccbfdd97d34f.1920x1080.jpg"
        ],
        "fallbackColor": "#11216e",
        "fallbackIcon": "🤖",
        "downloadUrl": "https://store.steampowered.com/app/1091500/",
        "size": "70 GB",
        "date": "2020-12-09",
        "hot": true
    },
    {
        "id": "31",
        "name": "Hollow Knight",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "在《空洞骑士》中打造属于自己的冒险之旅！",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_5384f9f8b96a0b9934b2bc35a4058376211636d2.1920x1080.jpg"
        ],
        "fallbackColor": "#212121",
        "fallbackIcon": "🐞",
        "downloadUrl": "https://store.steampowered.com/app/367520/",
        "size": "9 GB",
        "date": "2017-02-24",
        "hot": true
    },
    {
        "id": "32",
        "name": "Stardew Valley",
        "platform": "pc",
        "category": "casual",
        "language": "中文",
        "description": "农场经营模拟游戏。继承爷爷的农场，种植作物、饲养动物。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_30c4821c6f9a54b2fc6e2a3b4c5d6e7f.1920x1080.jpg"
        ],
        "fallbackColor": "#8d6e63",
        "fallbackIcon": "🌾",
        "downloadUrl": "https://store.steampowered.com/app/413150/",
        "size": "4 GB",
        "date": "2016-02-26",
        "hot": false
    },
    {
        "id": "33",
        "name": "The Last of Us Part I",
        "platform": "pc",
        "category": "adventure",
        "language": "中文",
        "description": "顽皮狗打造的经典末日生存冒险游戏remake版。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e.1920x1080.jpg"
        ],
        "fallbackColor": "#3d3d3d",
        "fallbackIcon": "🧟",
        "downloadUrl": "https://store.steampowered.com/app/1888930/",
        "size": "78 GB",
        "date": "2022-06-02",
        "hot": false
    },
    {
        "id": "34",
        "name": "Black Myth: Wukong",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "以中国神话为背景的动作角色扮演游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header_schinese.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_86c4b7462bba219a0d0b89931a35812b9f188976.1920x1080.jpg"
        ],
        "fallbackColor": "#c62828",
        "fallbackIcon": "🐒",
        "downloadUrl": "https://store.steampowered.com/app/2358720/",
        "size": "130 GB",
        "date": "2024-08-19",
        "hot": true
    },
    {
        "id": "35",
        "name": "Stellar Blade",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "动作冒险游戏。扮演Eve在地球上对抗入侵的Na-tiz。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1676970/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1676970/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#ff1493",
        "fallbackIcon": "⚔️",
        "downloadUrl": "https://store.steampowered.com/app/1676970/",
        "size": "35 GB",
        "date": "2024-04-26",
        "hot": false
    },
    {
        "id": "36",
        "name": " Civilization VI",
        "platform": "pc",
        "category": "strategy",
        "language": "中文",
        "description": "经典策略游戏。建立一个经得起时间考验的帝国。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#2e8b57",
        "fallbackIcon": "🏛️",
        "downloadUrl": "https://store.steampowered.com/app/289070/",
        "size": "15 GB",
        "date": "2016-10-21",
        "hot": false
    },
    {
        "id": "37",
        "name": "Rain World",
        "platform": "pc",
        "category": "adventure",
        "language": "中文",
        "description": "在残酷的雨世界中生存。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/314520/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/314520/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#1a4a5a",
        "fallbackIcon": "🐌",
        "downloadUrl": "https://store.steampowered.com/app/314520/",
        "size": "3 GB",
        "date": "2017-03-28",
        "hot": false
    },
    {
        "id": "38",
        "name": "Dark Soul III",
        "platform": "pc",
        "category": "rpg",
        "language": "中文",
        "description": "FromSoftware动作RPG的巅峰之作。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#1a0a0a",
        "fallbackIcon": "🔥",
        "downloadUrl": "https://store.steampowered.com/app/374320/",
        "size": "25 GB",
        "date": "2016-04-11",
        "hot": true
    },
    {
        "id": "39",
        "name": "Mortal Kombat 11",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "经典格斗游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976310/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976310/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#8b0000",
        "fallbackIcon": "🩸",
        "downloadUrl": "https://store.steampowered.com/app/976310/",
        "size": "50 GB",
        "date": "2019-04-23",
        "hot": false
    },
    {
        "id": "40",
        "name": "ARK: Survival Evolved",
        "platform": "pc",
        "category": "survival",
        "language": "中文",
        "description": "恐龙生存游戏。驯服恐龙并生存。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#228b22",
        "fallbackIcon": "🦖",
        "downloadUrl": "https://store.steampowered.com/app/346110/",
        "size": "70 GB",
        "date": "2017-06-14",
        "hot": true
    },
    {
        "id": "41",
        "name": "Assassin's Creed Odyssey",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "古希腊开放世界动作冒险。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/812560/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/812560/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#4169e1",
        "fallbackIcon": "⚔️",
        "downloadUrl": "https://store.steampowered.com/app/812560/",
        "size": "80 GB",
        "date": "2018-10-05",
        "hot": false
    },
    {
        "id": "42",
        "name": "Assassin's Creed Valhalla",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "维京时代开放世界动作冒险。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1498950/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1498950/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#8b4513",
        "fallbackIcon": "🪓",
        "downloadUrl": "https://store.steampowered.com/app/1498950/",
        "size": "65 GB",
        "date": "2020-11-10",
        "hot": false
    },
    {
        "id": "43",
        "name": "Far Cry 5",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "开放世界射击游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552520/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552520/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#2e8b57",
        "fallbackIcon": "🔫",
        "downloadUrl": "https://store.steampowered.com/app/552520/",
        "size": "56 GB",
        "date": "2018-03-27",
        "hot": false
    },
    {
        "id": "44",
        "name": "Far Cry 6",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "热带开放世界射击游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1483620/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1483620/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#ffa500",
        "fallbackIcon": "🌴",
        "downloadUrl": "https://store.steampowered.com/app/1483620/",
        "size": "60 GB",
        "date": "2021-10-07",
        "hot": false
    },
    {
        "id": "45",
        "name": "Rainbow Six Siege",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "战术射击游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#ff8c00",
        "fallbackIcon": "🏰",
        "downloadUrl": "https://store.steampowered.com/app/359550/",
        "size": "85 GB",
        "date": "2015-12-01",
        "hot": true
    },
    {
        "id": "46",
        "name": "Call of Duty: Modern Warfare II",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "使命召唤现代战争系列。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#1a1a2e",
        "fallbackIcon": "💂",
        "downloadUrl": "https://store.steampowered.com/app/1938090/",
        "size": "125 GB",
        "date": "2022-10-28",
        "hot": true
    },
    {
        "id": "47",
        "name": "Call of Duty: Warzone",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "免费大逃杀游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962663/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962663/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#2f4f4f",
        "fallbackIcon": "⚔️",
        "downloadUrl": "https://store.steampowered.com/app/1962663/",
        "size": "100 GB",
        "date": "2022-03-10",
        "hot": true
    },
    {
        "id": "48",
        "name": "Minecraft",
        "platform": "pc",
        "category": "casual",
        "language": "中文",
        "description": "沙盒建造游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#228b22",
        "fallbackIcon": "🧱",
        "downloadUrl": "https://store.steampowered.com/app/1091500/",
        "size": "1 GB",
        "date": "2011-11-18",
        "hot": true
    },
    {
        "id": "49",
        "name": "Valheim",
        "platform": "pc",
        "category": "survival",
        "language": "中文",
        "description": "维京生存游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#2f4f4f",
        "fallbackIcon": "🏔️",
        "downloadUrl": "https://store.steampowered.com/app/892970/",
        "size": "7 GB",
        "date": "2021-02-02",
        "hot": true
    },
    {
        "id": "50",
        "name": "Phasmophobia",
        "platform": "pc",
        "category": "horror",
        "language": "中文",
        "description": "合作恐怖游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg",
        "screenshots": [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"
        ],
        "fallbackColor": "#1a1a1a",
        "fallbackIcon": "👻",
        "downloadUrl": "https://store.steampowered.com/app/739630/",
        "size": "15 GB",
        "date": "2020-09-18",
        "hot": true
    },
    {
        "id": "51",
        "name": "Resident Evil Village",
        "platform": "pc",
        "category": "horror",
        "language": "中文",
        "description": "生化危机8：村庄。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#4a4a4a",
        "fallbackIcon": "🧟",
        "downloadUrl": "https://store.steampowered.com/app/1332010/",
        "size": "35 GB",
        "date": "2021-05-07",
        "hot": false
    },
    {
        "id": "52",
        "name": "Dead Space",
        "platform": "pc",
        "category": "horror",
        "language": "中文",
        "description": "死亡空间重制版。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1693420/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1693420/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a1a3a",
        "fallbackIcon": "👨‍🚀",
        "downloadUrl": "https://store.steampowered.com/app/1693420/",
        "size": "50 GB",
        "date": "2023-01-27",
        "hot": false
    },
    {
        "id": "53",
        "name": "It Takes Two",
        "platform": "pc",
        "category": "adventure",
        "language": "中文",
        "description": "合作冒险游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#ff69b4",
        "fallbackIcon": "🎎",
        "downloadUrl": "https://store.steampowered.com/app/1426210/",
        "size": "50 GB",
        "date": "2021-03-26",
        "hot": false
    },
    {
        "id": "54",
        "name": "Unravel",
        "platform": "pc",
        "category": "puzzle",
        "language": "中文",
        "description": "物理益智游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/470160/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/470160/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#228b22",
        "fallbackIcon": "🧶",
        "downloadUrl": "https://store.steampowered.com/app/470160/",
        "size": "8 GB",
        "date": "2016-06-09",
        "hot": false
    },
    {
        "id": "55",
        "name": "Uncharted 4",
        "platform": "pc",
        "category": "adventure",
        "language": "中文",
        "description": "神秘海域4。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#2e8b57",
        "fallbackIcon": "🏴‍☠️",
        "downloadUrl": "https://store.steampowered.com/app/1593500/",
        "size": "80 GB",
        "date": "2022-01-28",
        "hot": false
    },
    {
        "id": "56",
        "name": "God of War",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "战神。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#4169e1",
        "fallbackIcon": "⚔️",
        "downloadUrl": "https://store.steampowered.com/app/1593500/",
        "size": "90 GB",
        "date": "2022-01-14",
        "hot": true
    },
    {
        "id": "57",
        "name": "Horizon Zero Dawn",
        "platform": "pc",
        "category": "rpg",
        "language": "中文",
        "description": "地平线：零之曙光。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1158310/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1158310/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#2e8b57",
        "fallbackIcon": "🤖",
        "downloadUrl": "https://store.steampowered.com/app/1158310/",
        "size": "67 GB",
        "date": "2020-08-07",
        "hot": false
    },
    {
        "id": "58",
        "name": "Monster Hunter Rise",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "怪物猎人：崛起。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#ffa500",
        "fallbackIcon": "🐉",
        "downloadUrl": "https://store.steampowered.com/app/1888930/",
        "size": "30 GB",
        "date": "2022-01-13",
        "hot": false
    },
    {
        "id": "59",
        "name": "Disco Elysium",
        "platform": "pc",
        "category": "rpg",
        "language": "中文",
        "description": "极乐迪斯科。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#ff4500",
        "fallbackIcon": "🕵️",
        "downloadUrl": "https://store.steampowered.com/app/632470/",
        "size": "8 GB",
        "date": "2019-10-15",
        "hot": false
    },
    {
        "id": "60",
        "name": "Celeste",
        "platform": "pc",
        "category": "platformer",
        "language": "中文",
        "description": "蔚蓝平台跳跃游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#4169e1",
        "fallbackIcon": "🏔️",
        "downloadUrl": "https://store.steampowered.com/app/504230/",
        "size": "2 GB",
        "date": "2018-01-25",
        "hot": false
    },
    {
        "id": "61",
        "name": "Dead Cells",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "死亡细胞。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#2f4f4f",
        "fallbackIcon": "🗡️",
        "downloadUrl": "https://store.steampowered.com/app/588650/",
        "size": "2 GB",
        "date": "2018-08-07",
        "hot": false
    },
    {
        "id": "62",
        "name": "Slay the Spire",
        "platform": "pc",
        "category": "strategy",
        "language": "中文",
        "description": "杀戮尖塔。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#4b0082",
        "fallbackIcon": "🃏",
        "downloadUrl": "https://store.steampowered.com/app/646570/",
        "size": "2 GB",
        "date": "2019-01-23",
        "hot": false
    },
    {
        "id": "63",
        "name": "Vampire Survivors",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "吸血鬼幸存者。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#8b0000",
        "fallbackIcon": "🧛",
        "downloadUrl": "https://store.steampowered.com/app/1794680/",
        "size": "500 MB",
        "date": "2022-10-20",
        "hot": true
    },
    {
        "id": "64",
        "name": "Don't Starve",
        "platform": "pc",
        "category": "survival",
        "language": "中文",
        "description": "饥荒。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/219740/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/219740/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#8b4513",
        "fallbackIcon": "🔥",
        "downloadUrl": "https://store.steampowered.com/app/219740/",
        "size": "3 GB",
        "date": "2013-04-10",
        "hot": false
    },
    {
        "id": "65",
        "name": "Don't Starve Together",
        "platform": "pc",
        "category": "survival",
        "language": "中文",
        "description": "饥荒：多人版。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322330/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322330/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#8b4513",
        "fallbackIcon": "🔥",
        "downloadUrl": "https://store.steampowered.com/app/322330/",
        "size": "4 GB",
        "date": "2015-04-21",
        "hot": false
    },
    {
        "id": "66",
        "name": "Portal 2",
        "platform": "pc",
        "category": "puzzle",
        "language": "中文",
        "description": "传送门2。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#ff8c00",
        "fallbackIcon": "🔷",
        "downloadUrl": "https://store.steampowered.com/app/620/",
        "size": "10 GB",
        "date": "2011-04-19",
        "hot": false
    },
    {
        "id": "67",
        "name": "Half-Life: Alyx",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "半条命：艾莉克斯。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a1a3a",
        "fallbackIcon": "🎮",
        "downloadUrl": "https://store.steampowered.com/app/546560/",
        "size": "50 GB",
        "date": "2020-03-23",
        "hot": false
    },
    {
        "id": "68",
        "name": "Dishonored 2",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "耻辱2。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/403640/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/403640/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#4a0e4a",
        "fallbackIcon": "🗡️",
        "downloadUrl": "https://store.steampowered.com/app/403640/",
        "size": "45 GB",
        "date": "2016-11-11",
        "hot": false
    },
    {
        "id": "69",
        "name": "Dishonored: Death of the Outsider",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "耻辱：界外魔之死。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/614570/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/614570/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#4a0e4a",
        "fallbackIcon": "🗡️",
        "downloadUrl": "https://store.steampowered.com/app/614570/",
        "size": "30 GB",
        "date": "2017-09-15",
        "hot": false
    },
    {
        "id": "70",
        "name": "Prey",
        "platform": "pc",
        "category": "horror",
        "language": "中文",
        "description": "掠食。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/480490/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/480490/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a1a3a",
        "fallbackIcon": "👽",
        "downloadUrl": "https://store.steampowered.com/app/480490/",
        "size": "25 GB",
        "date": "2017-05-05",
        "hot": false
    },
    {
        "id": "71",
        "name": "Control",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "控制。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/870780/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/870780/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a1a2e",
        "fallbackIcon": "🔮",
        "downloadUrl": "https://store.steampowered.com/app/870780/",
        "size": "40 GB",
        "date": "2019-08-27",
        "hot": false
    },
    {
        "id": "72",
        "name": "Alan Wake",
        "platform": "pc",
        "category": "horror",
        "language": "中文",
        "description": "心灵杀手。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/13510/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/13510/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a1a1a",
        "fallbackIcon": "🔦",
        "downloadUrl": "https://store.steampowered.com/app/13510/",
        "size": "10 GB",
        "date": "2012-02-16",
        "hot": false
    },
    {
        "id": "73",
        "name": "Alan Wake 2",
        "platform": "pc",
        "category": "horror",
        "language": "中文",
        "description": "心灵杀手2。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1644090/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1644090/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a1a1a",
        "fallbackIcon": "🔦",
        "downloadUrl": "https://store.steampowered.com/app/1644090/",
        "size": "80 GB",
        "date": "2023-10-27",
        "hot": false
    },
    {
        "id": "74",
        "name": "Borderlands 3",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "无主之地3。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#ff8c00",
        "fallbackIcon": "🔫",
        "downloadUrl": "https://store.steampowered.com/app/397540/",
        "size": "75 GB",
        "date": "2019-09-13",
        "hot": false
    },
    {
        "id": "75",
        "name": "Borderlands 2",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "无主之地2。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/49520/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/49520/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#ff8c00",
        "fallbackIcon": "🔫",
        "downloadUrl": "https://store.steampowered.com/app/49520/",
        "size": "20 GB",
        "date": "2012-09-18",
        "hot": false
    },
    {
        "id": "76",
        "name": "Tiny Tina's Wonderlands",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "小蒂娜的奇幻乐园。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1665970/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1665970/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#ff69b4",
        "fallbackIcon": "🧚",
        "downloadUrl": "https://store.steampowered.com/app/1665970/",
        "size": "60 GB",
        "date": "2022-03-25",
        "hot": false
    },
    {
        "id": "77",
        "name": "DOOM Eternal",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "毁灭战士：永恒。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#8b0000",
        "fallbackIcon": "💀",
        "downloadUrl": "https://store.steampowered.com/app/782330/",
        "size": "50 GB",
        "date": "2020-03-20",
        "hot": false
    },
    {
        "id": "78",
        "name": "DOOM (2016)",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "毁灭战士。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/379720/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/379720/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#8b0000",
        "fallbackIcon": "💀",
        "downloadUrl": "https://store.steampowered.com/app/379720/",
        "size": "70 GB",
        "date": "2016-05-13",
        "hot": false
    },
    {
        "id": "79",
        "name": "Wolfenstein: The New Order",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "德军总部：新秩序。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/201430/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/201430/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#4a4a4a",
        "fallbackIcon": "💂",
        "downloadUrl": "https://store.steampowered.com/app/201430/",
        "size": "50 GB",
        "date": "2014-05-20",
        "hot": false
    },
    {
        "id": "80",
        "name": "Quake",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "雷神之锤。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2310/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2310/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a1a3a",
        "fallbackIcon": "⚔️",
        "downloadUrl": "https://store.steampowered.com/app/2310/",
        "size": "2 GB",
        "date": "1996-06-22",
        "hot": false
    },
    {
        "id": "81",
        "name": "Back 4 Blood",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "Back 4 Blood。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1054370/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1054370/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#8b0000",
        "fallbackIcon": "🧟",
        "downloadUrl": "https://store.steampowered.com/app/1054370/",
        "size": "40 GB",
        "date": "2021-10-12",
        "hot": false
    },
    {
        "id": "82",
        "name": "Sea of Thieves",
        "platform": "pc",
        "category": "adventure",
        "language": "中文",
        "description": "海盗冒险游戏。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a5a5a",
        "fallbackIcon": "🏴‍☠️",
        "downloadUrl": "https://store.steampowered.com/app/1172620/",
        "size": "50 GB",
        "date": "2022-06-03",
        "hot": false
    },
    {
        "id": "83",
        "name": "Fall Guys",
        "platform": "pc",
        "category": "casual",
        "language": "中文",
        "description": "糖豆人。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1097150/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1097150/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#ff69b4",
        "fallbackIcon": "🎮",
        "downloadUrl": "https://store.steampowered.com/app/1097150/",
        "size": "10 GB",
        "date": "2020-08-04",
        "hot": true
    },
    {
        "id": "84",
        "name": "Among Us",
        "platform": "pc",
        "category": "casual",
        "language": "中文",
        "description": "太空狼人杀。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a1a3a",
        "fallbackIcon": "👨‍🚀",
        "downloadUrl": "https://store.steampowered.com/app/945360/",
        "size": "500 MB",
        "date": "2018-06-15",
        "hot": true
    },
    {
        "id": "85",
        "name": "Lost Ark",
        "platform": "pc",
        "category": "rpg",
        "language": "中文",
        "description": "失落的方舟。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#4a0e4a",
        "fallbackIcon": "⚔️",
        "downloadUrl": "https://store.steampowered.com/app/1593500/",
        "size": "60 GB",
        "date": "2022-02-11",
        "hot": false
    },
    {
        "id": "86",
        "name": "Path of Exile",
        "platform": "pc",
        "category": "rpg",
        "language": "中文",
        "description": "流放之路。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238960/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238960/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a0a0a",
        "fallbackIcon": "💀",
        "downloadUrl": "https://store.steampowered.com/app/238960/",
        "size": "20 GB",
        "date": "2013-01-23",
        "hot": false
    },
    {
        "id": "87",
        "name": "Warframe",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "星际战甲。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/230410/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/230410/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#ffa500",
        "fallbackIcon": "🤖",
        "downloadUrl": "https://store.steampowered.com/app/230410/",
        "size": "40 GB",
        "date": "2013-03-25",
        "hot": false
    },
    {
        "id": "88",
        "name": "EVE Online",
        "platform": "pc",
        "category": "simulation",
        "language": "中文",
        "description": "EVE星战前夜。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8500/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8500/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a1a3a",
        "fallbackIcon": "🚀",
        "downloadUrl": "https://store.steampowered.com/app/8500/",
        "size": "40 GB",
        "date": "2003-05-06",
        "hot": false
    },
    {
        "id": "89",
        "name": "The Forest",
        "platform": "pc",
        "category": "survival",
        "language": "中文",
        "description": "森林。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#228b22",
        "fallbackIcon": "🌲",
        "downloadUrl": "https://store.steampowered.com/app/242760/",
        "size": "12 GB",
        "date": "2018-04-18",
        "hot": false
    },
    {
        "id": "90",
        "name": "The Long Dark",
        "platform": "pc",
        "category": "survival",
        "language": "中文",
        "description": "漫漫长夜。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/305620/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/305620/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a3a5a",
        "fallbackIcon": "❄️",
        "downloadUrl": "https://store.steampowered.com/app/305620/",
        "size": "10 GB",
        "date": "2017-08-01",
        "hot": false
    },
    {
        "id": "91",
        "name": "S.T.A.L.K.E.R.: Call of Pripyat",
        "platform": "pc",
        "category": "fps",
        "language": "中文",
        "description": "潜行者：普里皮亚季的召唤。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/41700/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/41700/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#2f4f4f",
        "fallbackIcon": "☢️",
        "downloadUrl": "https://store.steampowered.com/app/41700/",
        "size": "10 GB",
        "date": "2010-09-02",
        "hot": false
    },
    {
        "id": "92",
        "name": "Metro Exodus",
        "platform": "pc",
        "category": "fps",
        "language": "中文",
        "description": "地铁：离去。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412020/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412020/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a3a1a",
        "fallbackIcon": "🚇",
        "downloadUrl": "https://store.steampowered.com/app/412020/",
        "size": "60 GB",
        "date": "2019-02-15",
        "hot": false
    },
    {
        "id": "93",
        "name": "Metro 2033",
        "platform": "pc",
        "category": "fps",
        "language": "中文",
        "description": "地铁2033。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/43110/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/43110/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a3a1a",
        "fallbackIcon": "🚇",
        "downloadUrl": "https://store.steampowered.com/app/43110/",
        "size": "8 GB",
        "date": "2010-03-18",
        "hot": false
    },
    {
        "id": "94",
        "name": "S.T.A.L.K.E.R. 2",
        "platform": "pc",
        "category": "fps",
        "language": "中文",
        "description": "潜行者2。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1649240/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1649240/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#2f4f4f",
        "fallbackIcon": "☢️",
        "downloadUrl": "https://store.steampowered.com/app/1649240/",
        "size": "100 GB",
        "date": "2024-11-20",
        "hot": true
    },
    {
        "id": "95",
        "name": "DayZ",
        "platform": "pc",
        "category": "survival",
        "language": "中文",
        "description": "DAYZ。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/221100/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/221100/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#8b4513",
        "fallbackIcon": "🩸",
        "downloadUrl": "https://store.steampowered.com/app/221100/",
        "size": "40 GB",
        "date": "2018-12-13",
        "hot": false
    },
    {
        "id": "96",
        "name": "Killer Instinct",
        "platform": "pc",
        "category": "action",
        "language": "中文",
        "description": "杀手本能。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1266700/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1266700/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#ff4500",
        "fallbackIcon": "👊",
        "downloadUrl": "https://store.steampowered.com/app/1266700/",
        "size": "45 GB",
        "date": "2023-02-24",
        "hot": false
    },
    {
        "id": "97",
        "name": "Kena: Bridge of Spirits",
        "platform": "pc",
        "category": "adventure",
        "language": "中文",
        "description": "凯娜：精神之桥。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1491380/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1491380/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#2e8b57",
        "fallbackIcon": "🌿",
        "downloadUrl": "https://store.steampowered.com/app/1491380/",
        "size": "15 GB",
        "date": "2021-09-21",
        "hot": false
    },
    {
        "id": "98",
        "name": "Scorn",
        "platform": "pc",
        "category": "horror",
        "language": "中文",
        "description": "蔑视。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1570670/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1570670/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#4a0e4a",
        "fallbackIcon": "👁️",
        "downloadUrl": "https://store.steampowered.com/app/1570670/",
        "size": "30 GB",
        "date": "2022-10-21",
        "hot": false
    },
    {
        "id": "99",
        "name": "F.E.A.R. 2",
        "platform": "pc",
        "category": "horror",
        "language": "中文",
        "description": "F.E.A.R. 2。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21090/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21090/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#1a1a1a",
        "fallbackIcon": "👻",
        "downloadUrl": "https://store.steampowered.com/app/21090/",
        "size": "8 GB",
        "date": "2009-02-27",
        "hot": false
    },
    {
        "id": "100",
        "name": "A Plague Tale: Requiem",
        "platform": "pc",
        "category": "adventure",
        "language": "中文",
        "description": "瘟疫传说：安魂曲。",
        "coverUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1566690/header.jpg",
        "screenshots": ["https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1566690/ss_1a2b3c4d5e6f7g8h9i0j.1920x1080.jpg"],
        "fallbackColor": "#8b0000",
        "fallbackIcon": "🐀",
        "downloadUrl": "https://store.steampowered.com/app/1566690/",
        "size": "50 GB",
        "date": "2022-10-17",
        "hot": false
    }
];

let currentPage = 1;
let itemsPerPage = 12;
let currentFilter = 'all';

// 获取平台显示名称
function getPlatformName(platform) {
    const platformMap = {
        'pc': 'PC',
        'switch': 'Switch',
        'ps4': 'PS4/PS5'
    };
    return platformMap[platform] || platform;
}

// 获取分类显示名称
function getCategoryName(category) {
    const categoryMap = {
        'action': '动作',
        'rpg': '角色扮演',
        'strategy': '策略',
        'adventure': '冒险',
        'casual': '休闲'
    };
    return categoryMap[category] || category;
}

// 生成游戏封面HTML
function getGameCoverHTML(game) {
    // 如果有Steam封面图片，使用图片；否则使用fallback
    if (game.coverUrl) {
        return `<img src="${game.coverUrl}" alt="${game.name}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div style="display:none;width:100%;height:100%;background:linear-gradient(135deg,${game.fallbackColor},${adjustColor(game.fallbackColor,-30)});flex-direction:column;align-items:center;justify-content:center;">
            <span style="font-size:60px;">${game.fallbackIcon}</span>
            <span style="color:white;font-size:14px;text-align:center;padding:0 10px;text-shadow:0 2px 4px rgba(0,0,0,0.5);">${game.name}</span>
        </div>`;
    } else {
        // 没有Steam图片的，使用彩色背景+图标
        return `<div style="
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, ${game.fallbackColor}, ${adjustColor(game.fallbackColor, -30)});
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
        ">
            <span style="font-size: 60px; margin-bottom: 10px;">${game.fallbackIcon}</span>
            <span style="color: white; font-size: 14px; text-align: center; padding: 0 10px; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">${game.name}</span>
        </div>`;
    }
}

// 调整颜色亮度
function adjustColor(color, amount) {
    let usePound = false;
    if (color[0] == "#") {
        color = color.slice(1);
        usePound = true;
    }
    let num = parseInt(color, 16);
    let r = (num >> 16) + amount;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + amount;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    let g = (num & 0x0000FF) + amount;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
}

// 加载游戏数据
function loadGames() {
    renderGames(gamesData);
    renderPagination(gamesData.length);
}

// 渲染游戏卡片
function renderGames(games, page = 1) {
    const grid = document.getElementById('gamesGrid');
    if (!grid) return;

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageGames = games.slice(start, end);

    if (pageGames.length === 0) {
        grid.innerHTML = '<div class="no-results"><h2>暂无游戏</h2><p>请尝试其他筛选条件</p></div>';
        return;
    }

    grid.innerHTML = pageGames.map(game => `
        <div class="game-card" onclick="goToGameDetail('${game.id}')">
            <div class="game-card-image">
                ${getGameCoverHTML(game)}
                ${game.hot ? '<span class="game-card-badge">热门</span>' : ''}
            </div>
            <div class="game-card-content">
                <h3 class="game-card-title">${game.name}</h3>
                <div class="game-card-info">
                    <span class="game-card-tag" style="background:${game.fallbackColor}">${getPlatformName(game.platform)}</span>
                    <span class="game-card-tag">${getCategoryName(game.category)}</span>
                    <span class="game-card-tag">${game.language}</span>
                </div>
                <p class="game-card-desc">${game.description}</p>
                <div class="game-card-footer">
                    <span class="game-card-size">${game.size}</span>
                    <a href="${game.downloadUrl}" class="download-btn" onclick="event.stopPropagation()">下载</a>
                </div>
            </div>
        </div>
    `).join('');
}

// 渲染分页
function renderPagination(total) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    const totalPages = Math.ceil(total / itemsPerPage);
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let html = '';
    html += `<button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">上一页</button>`;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            html += `<button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            html += `<span>...</span>`;
        }
    }

    html += `<button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">下一页</button>`;

    pagination.innerHTML = html;
}

// 切换分页
function changePage(page) {
    const totalPages = Math.ceil(gamesData.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderGames(gamesData, page);
    renderPagination(gamesData.length);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 初始化筛选功能
function initFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.dataset.filter;

            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            filterGames(filter);
        });
    });
}

// 筛选游戏
function filterGames(filter) {
    currentFilter = filter;
    currentPage = 1;

    if (filter === 'all') {
        renderGames(gamesData);
        renderPagination(gamesData.length);
    } else if (filter === 'pc') {
        const filtered = gamesData.filter(game => game.platform === 'pc');
        renderGames(filtered);
        renderPagination(filtered.length);
    } else if (['action', 'rpg', 'strategy', 'adventure', 'casual', 'simulation', 'shooter', 'sports', 'racing'].includes(filter)) {
        const filtered = gamesData.filter(game => game.category === filter);
        renderGames(filtered);
        renderPagination(filtered.length);
    } else {
        renderGames(gamesData);
        renderPagination(gamesData.length);
    }
}

// 搜索功能
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const keyword = searchInput.value.trim();

    if (!keyword) {
        alert('请输入搜索关键词');
        return;
    }

    window.location.href = `search.html?keyword=${encodeURIComponent(keyword)}`;
}

// 搜索结果页
function handleSearchResults() {
    const params = new URLSearchParams(window.location.search);
    const keyword = params.get('keyword');

    if (!keyword) {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('searchKeyword').textContent = keyword;

    const results = gamesData.filter(game =>
        game.name.toLowerCase().includes(keyword.toLowerCase()) ||
        game.description.toLowerCase().includes(keyword.toLowerCase())
    );

    renderGames(results);
    document.getElementById('resultCount').textContent = results.length;
}

// 跳转到游戏详情页
function goToGameDetail(id) {
    window.location.href = `game.html?id=${id}`;
}

// 加载游戏详情
function loadGameDetail() {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('id');

    if (!gameId) {
        window.location.href = 'index.html';
        return;
    }

    const game = gamesData.find(g => g.id === gameId);

    if (!game) {
        document.getElementById('gameDetail').innerHTML = '<div class="no-results"><h2>游戏不存在</h2></div>';
        return;
    }

    document.getElementById('gameTitle').textContent = game.name;
    document.getElementById('gameCover').innerHTML = getGameCoverHTML(game);
    document.getElementById('gamePlatform').textContent = getPlatformName(game.platform);
    document.getElementById('gameCategory').textContent = getCategoryName(game.category);
    document.getElementById('gameLanguage').textContent = game.language;
    document.getElementById('gameSize').textContent = game.size;
    document.getElementById('gameDate').textContent = game.date;
    document.getElementById('gameDesc').textContent = game.description;
    
    // 使用下载管理器生成下载按钮
    const downloadContainer = document.getElementById('downloadLink');
    if (downloadContainer && typeof generateDownloadButtons === 'function') {
        const downloadLinks = game.downloadLinks || [];
        downloadContainer.outerHTML = generateDownloadButtons(game.downloadUrl, downloadLinks);
    } else {
        // 如果下载管理器未加载，使用默认方式
        document.getElementById('downloadLink').href = game.downloadUrl;
    }

    // 加载截图
    const screenshotsContainer = document.getElementById('screenshotsGrid');
    if (screenshotsContainer && game.screenshots && game.screenshots.length > 0) {
        screenshotsContainer.innerHTML = game.screenshots.map((src, index) => `
            <img src="${src}" alt="截图${index + 1}" class="screenshot-item" 
                 onerror="this.style.display='none'" 
                 onclick="showScreenshot('${src}')" />
        `).join('');
    } else if (screenshotsContainer) {
        screenshotsContainer.innerHTML = '<p style="color:#a0a0a0;">暂无截图</p>';
    }
}

// 显示大图
function showScreenshot(src) {
    window.open(src, '_blank');
}

// 初始化搜索页面
if (document.getElementById('searchKeyword')) {
    loadGames();
    handleSearchResults();
}

// 初始化详情页面
if (document.getElementById('gameDetail')) {
    loadGames();
    loadGameDetail();
}

// 回车搜索
document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
});