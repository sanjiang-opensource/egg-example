'use strict';
// 读取配置文件
module.exports = appInfo => {
    const config = {};

    config.keys = appInfo + '12345';
    // 添加配置
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
        '.tpl': 'nunjucks',
        },
    };

    config.news = {
       pageSize: 5,
       serverUrl: 'https://hacker-news.firebaseio.com/v0',
    }

    config.middleware = [
        'robot',
    ]

    config.robot = {
        ua: [
            /Baiduspider/i,
        ]
    }

    return config;
}