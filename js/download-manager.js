// ========================================
// 游戏下载管理器 - v1.0
// 使用方法：将此文件引入到HTML中
// ========================================

// 下载来源配置
const DOWNLOAD_SOURCES = {
    // 百度网盘
    baidu: {
        name: "百度网盘",
        icon: "🔗",
        color: "#4DA6FF"
    },
    // 阿里云盘
    aliyun: {
        name: "阿里云盘", 
        icon: "☁️",
        color: "#FF6A00"
    },
    // 夸克网盘
    quark: {
        name: "夸克网盘",
        icon: "📦",
        color: "#4CAF50"
    },
    // 123网盘
    chromedown: {
        name: "123网盘",
        icon: "📁",
        color: "#FF9800"
    },
    // 自己的服务器
    local: {
        name: "本地下载",
        icon: "💾",
        color: "#9C27B0"
    },
    // Steam
    steam: {
        name: "Steam商店",
        icon: "🎮",
        color: "#171a21"
    }
};

// 生成下载按钮HTML
function generateDownloadButtons(downloadUrl, downloadLinks = []) {
    let buttons = [];
    
    // 主下载按钮
    if (downloadUrl && downloadUrl !== "#") {
        buttons.push(`
            <a href="${downloadUrl}" class="download-btn-primary" target="_blank" rel="noopener">
                <span>🚀</span> 立即下载
            </a>
        `);
    }
    
    // 备用下载链接
    if (downloadLinks && downloadLinks.length > 0) {
        buttons.push('<div class="download-alternatives">');
        buttons.push('<span class="download-label">备用下载：</span>');
        
        downloadLinks.forEach(link => {
            const source = getSourceInfo(link.url);
            buttons.push(`
                <a href="${link.url}" class="download-btn-secondary" target="_blank" 
                   style="background: ${source.color}20; border-color: ${source.color};"
                   title="${link.name || source.name}">
                    <span>${source.icon}</span> ${link.name || source.name}
                </a>
            `);
        });
        
        buttons.push('</div>');
    }
    
    return buttons.join('');
}

// 识别下载来源
function getSourceInfo(url) {
    if (!url) return DOWNLOAD_SOURCES.local;
    
    const urlLower = url.toLowerCase();
    
    if (urlLower.includes('baidu.com') || urlLower.includes('pan.baidu.com')) {
        return DOWNLOAD_SOURCES.baidu;
    }
    if (urlLower.includes('aliyundrive.com') || urlLower.includes('aliyun.com')) {
        return DOWNLOAD_SOURCES.aliyun;
    }
    if (urlLower.includes('quark.cn') || urlLower.includes('pan.quark.cn')) {
        return DOWNLOAD_SOURCES.quark;
    }
    if (urlLower.includes('123pan.com') || urlLower.includes('123865.com')) {
        return DOWNLOAD_SOURCES.chromedown;
    }
    if (urlLower.includes('steampowered.com')) {
        return DOWNLOAD_SOURCES.steam;
    }
    
    return DOWNLOAD_SOURCES.local;
}

// 示例数据 - 添加新游戏时参考
const exampleGameData = {
    // 方式1: 单一下载链接
    "downloadUrl": "https://pan.baidu.com/s/xxx",
    
    // 方式2: 多个下载链接（推荐）
    "downloadUrl": "https://pan.baidu.com/s/主链接",
    "downloadLinks": [
        {"name": "百度网盘", "url": "https://pan.baidu.com/s/xxx"},
        {"name": "阿里云盘", "url": "https://aliyundrive.com/s/xxx"},
        {"name": "夸克网盘", "url": "https://pan.quark.cn/s/xxx"}
    ],
    
    // 方式3: 自己托管的文件
    "downloadUrl": "/downloads/games/elden-ring.exe",
    "downloadLinks": [
        {"name": "本地下载", "url": "/downloads/games/elden-ring.exe"},
        {"name": "Steam", "url": "https://store.steampowered.com/app/1245620"}
    ]
};

// 模板 - 复制此模板添加新游戏
const newGameTemplate = {
    "id": "",                    // 唯一ID，如 "13"
    "name": "",                  // 游戏中文名
    "platform": "pc",           // pc / switch / ps4
    "category": "action",       // action/rpg/strategy/adventure/casual
    "language": "中文",
    "description": "",          // 游戏介绍（从Steam API获取）
    "coverUrl": "",              // 封面图（Steam）
    "screenshots": [],          // 截图数组（Steam）
    "downloadUrl": "#",          // 主下载链接
    "downloadLinks": [],        // 备用下载链接数组
    "size": "0 GB",            // 文件大小
    "date": "2024-01-01",       // 发布日期
    "hot": false                // 是否热门
};

console.log("下载管理器已加载！使用 generateDownloadButtons() 生成下载按钮");