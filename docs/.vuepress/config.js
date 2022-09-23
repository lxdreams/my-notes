const { defineHopeConfig } = require("vuepress-theme-hope");
const { comment } = require("vuepress-plugin-comment2");


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
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
        },
    },
    themeConfig: {
        darkmode: 'enable',
        pageInfo: false,
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        prevLink: false,
        nextLink: false,
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
            // comment: {
            //     type: 'giscus',
            //     repo: 'kings1990/giscus-fastrequest',
            //     repoId: 'R_kgDOHLlUsg',
            //     category: 'fastRequest',
            //     categoryId: 'DIC_kwDOHLlUss4COlsW'
            // }
        },
        displayFooter: true,
        copyright: "Copyright © 2021-present Kings",
        themeColor: {
            green: "#21D789",
            blue: "#087CFA",
            red: "#FE2857",
            pink: "#f26d6d",
            lightBlue: "#07C3F2"
        },
        iconPrefix: 'iconfont icon-',
        logo: '/img/logoLine.gif',
        lastUpdated: 'Last Updated',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        //      docsRepo: 'kings1990/restful-fast-request-doc',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        locales: {
            '/': {
                footer: "Theme by <a target='blank' href='https://vuepress-theme-hope.github.io/v2/zh/'>vuepress-theme-hope</a>",
                // 多语言下拉菜单的标题
                selectText: 'Languages',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                navbar: [
                    {
                        text: '快速开始',
                        link: '/guide/getstarted/start',
                        icon: "start1"
                    },
                    {
                        text: '功能',
                        link: '/guide/feature',
                        icon: "tools"
                    },
                    {
                        text: '脚本',
                        link: '/guide/script',
                        icon: "code-box-fill"
                    },
                    {
                        text: '历史变更',
                        link: '/guide/history',
                        icon: "changelog"
                    },
                    {
                        text: '❤️赞助',
                        link: '/guide/sponsorList',
                    },
                    {
                        text: '视频教程',
                        link: '/guide/teachingVideo',
                        icon: "bilibili"
                    },
                    {
                        text: '加入群聊',
                        link: '/guide/concatGroup',
                        icon: "contactGroup"
                    }
                ],
                sidebar: {
                    '/guide/': [
                        "introduce",
                        {
                            text: "快速上手",
                            icon: "leibie",
                            prefix: "getstarted/",
                            collapsable: true,
                            children: [
                                "start",
                                "projectEnv",
                                "dataMapping",
                                "stringGenerationStrategy",
                                "icon",
                                "otherConfig",
                                "shortcut"
                            ],
                        },
                        "install",
                        "feature",
                        "script",
                        "whatsnew",
                        "history",
                        "buy",
                        "concatGroup",
                        "teachingVideo",
                        "faq",
                        "sponsorList",
                        "eula"
                    ],
                }
            }
        }
    }
})
