# 🎮 游戏下载站维护指南

## 目录
1. [添加新游戏](#添加新游戏)
2. [下载链接配置](#下载链接配置)
3. [获取Steam数据](#获取steam数据)
4. [常见问题](#常见问题)

---

## 添加新游戏

### 步骤1: 找到游戏ID

在 `js/main.js` 文件中，找到 `gamesData` 数组，在最后一个游戏后面添加新游戏。

### 步骤2: 复制模板并填写

```javascript
{
    "id": "13",                          // 新的唯一ID（数字或字符串）
    "name": "游戏中文名",                 // 必须填写
    "platform": "pc",                    // pc | switch | ps4
    "category": "action",               // action | rpg | strategy | adventure | casual
    "language": "中文",                  // 中文 | 英文 | 多语言
    "description": "游戏描述...",        // 游戏简介
    "coverUrl": "封面图片URL",           // 见下文获取方法
    "screenshots": ["截图1", "截图2"],   // 截图数组
    "downloadUrl": "下载链接",          // 主下载链接
    "downloadLinks": [                   // 备用下载（可选）
        {"name": "百度网盘", "url": "链接"},
        {"name": "阿里云盘", "url": "链接"}
    ],
    "size": "50 GB",                    // 文件大小
    "date": "2024-01-01",               // 发布日期
    "hot": true                         // true = 显示热门标签
}
```

---

## 下载链接配置

### 方式1: 单一下载
```javascript
"downloadUrl": "https://pan.baidu.com/s/xxxxx"
```

### 方式2: 多个备用链接（推荐）
```javascript
"downloadUrl": "https://pan.baidu.com/s/主链接",
"downloadLinks": [
    {"name": "百度网盘", "url": "https://pan.baidu.com/s/xxx"},
    {"name": "阿里云盘", "url": "https://aliyundrive.com/s/xxx"},
    {"name": "夸克网盘", "url": "https://pan.quark.cn/s/xxx"},
    {"name": "Steam", "url": "https://store.steampowered.com/app/xxx"}
]
```

### 方式3: 下载密码说明
如果下载链接需要密码，在下载页面显示：

```javascript
"downloadPassword": "laoquzhang.com"
```

然后在下载按钮旁边显示密码提示。

---

## 获取Steam数据

### 方法1: 使用Steam API（推荐）

访问以下URL获取游戏信息：
```
https://store.steampowered.com/api/appdetails?appids=游戏ID&cc=cn&l=schinese
```

**示例 - 获取艾尔登法环信息:**
- 游戏ID: 1245620
- API URL: `https://store.steampowered.com/api/appdetails?appids=1245620&cc=cn&l=schinese`

### 方法2: 手动提取图片URL

**封面图:**
```
https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/{APP_ID}/header.jpg
```

**截图:**
```
https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/{APP_ID}/ss_xxxxxxxx.1920x1080.jpg
```

### 方法3: 常用游戏ID参考

| 游戏 | Steam ID |
|------|----------|
| 艾尔登法环 | 1245620 |
| 空洞骑士 | 367520 |
| 巫师3 | 292030 |
| 赛博朋克2077 | 1091500 |
| 怪物猎人世界 | 582010 |
| 黑神话：悟空 | 2358720 |
| 只狼 | 814380 |
| 战神4 | 1593500 |
| 艾尔登法环 DLC | 2778590 |

---

## 常见问题

### Q: 如何添加自己的下载文件？
```javascript
// 将文件放在 downloads 文件夹
"downloadUrl": "/downloads/game-name.exe"
```

### Q: 如何显示下载密码？
在 game.html 的下载区域添加密码提示

### Q: 如何标记热门游戏？
```javascript
"hot": true  // 显示热门标签
```

### Q: 下载链接格式有哪些？
- 百度网盘: `https://pan.baidu.com/s/xxx`
- 阿里云盘: `https://aliyundrive.com/s/xxx`  
- 夸克网盘: `https://pan.quark.cn/s/xxx`
- 直链下载: `https://example.com/game.zip`

---

## 快速开始

1. 打开 `js/main.js`
2. 找到 `gamesData` 数组
3. 复制一个新游戏模板
4. 填写游戏信息
5. 保存文件
6. 刷新网页查看效果

✅ 完成！