const { defineHopeConfig } = require("vuepress-theme-hope");
const navbar = require('./navbar');
const sidebar = require('./sidebar');

module.exports = defineHopeConfig({
    plugins: [
        [
            '@vuepress/docsearch',
            {
                appId: "8FRYEU6KK8",
                apiKey: '84f513df1e83406ba42179da778d87b4',
                indexName: 'dromara-fast-request',
                locales: {
                    '/': {
                        placeholder: '搜索文档',
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                            },
                        },
                    },
                },
            },
        ],

    ],
    base: '/',
    title: '',
    description: 'note for',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/img/fastRequest.svg'
            }
        ],
        [
            'link',
            {
                rel: "stylesheet",
                href: "//at.alicdn.com/t/c/font_2601581_9o8c0qvtq78.css",
            },
        ],
        [
            'script',
            {
                src: '/js/baidu.js'
            }
        ]
    ],
    markdown: {
        lineNumbers: true,
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            metaLocales: {
                toc: "目录",
            }
        },
    },
    themeConfig: {
        darkmode: 'enable',
        pageInfo: false,
        plugins: {
            mdEnhance: {
                align: true,
                tasklist: true,
                container: true,
                lazyLoad: true,
                codegroup: true,
                mark: true,
                chart: true,
                flowchart: true
            },
        },
        displayFooter: true,
        copyright: "Copyright © 2021-present Kings",
        themeColor: {
            green: "#21D789",
            blue: "#0e6db1",
            red: "#FE2857",
            pink: "#f26d6d",
            lightBlue: "#07C3F2"
        },
        iconPrefix: 'iconfont icon-',
        logo: '/img/logoLine.gif',
        lastUpdated: 'Last Updated',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        locales: {
            '/': {
                footer: "Theme by <a target='blank' href='https://vuepress-theme-hope.github.io/v2/zh/'>vuepress-theme-hope</a>",
                selectText: 'Languages',
                label: '简体中文',
                algolia: {},
                navbar: navbar,
                sidebar: sidebar,
                metaLocales: {
                    toc: "目录",
                },
            }
        }
    }
})
