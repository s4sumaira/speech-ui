export const MenuData = [
    {
        id: "1",
        title: "Home",
        active:false,
        url:'/home'
    },
    {
        id: "2",
        title: "Services",
        active:false,
        submenu: [{
            id: "2.1",
            title: "Web design",
            active:false,
            url:'/web'
        },
        {
            id: "2.2",
            title: "Web development",
            active:false,
            submenu: [{
                id: "2.2.1",
                title: "Frontend",
                active:false,
                url:'/frontend'
            },
            {
                id: "2.2.2",
                title: "Backend",
                active:false,
                submenu: [{
                    id: "2.2.2.1",
                    title: "NodeJS",
                    active:false,
                    url:'/node'
                },
                {
                    id: "2.2.2.2",
                    title: "PHP",
                    active:false,
                    url:'/php'
                },
                ],
            },
            ],
        },
        {
            id: "2.3",
            title: "SEO",
            active:false,
            url:'/seo'
        },
        ],
    },
    {
        id: "3",
        title: "About",
        active:false,
        submenu: [{
            id: "3.1",
            title: "Who we are",
            active:false,
            url:'/whoweare'
        },
        {
            id: "3.2",
            title: "Our values",
            active:false,
            url:'/ourvalues'
        },
        ],
    },
];