const sidebar = {
    '/ds/': [
        {
            text: "mysql",
            icon: "leibie",
            prefix: "mysql/",
            collapsable: true,
            children: [
                "home",
                "lock",
                "optimize",
                "translation",
            ],
        },
        {
            text: "redis",
            icon: "effective",
            prefix: "redis/",
            collapsable: true,
            children: [
                "dataStracture",
                "home",
                "persistent",
            ],
        }
    ],
}

module.exports = sidebar;