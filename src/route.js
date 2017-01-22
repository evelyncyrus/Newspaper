
export default function router() {
    routers: [{
        path: '*',
        component() {
            require(['./view/home'])
        }
    },
    {
        path: '/',
        component() {
            require(['./view/home'])
        }
    },
    {
        path: '/home',
        component() {
            require(['./view/home'])
        }
    },
    {
        path: '/detail',
        component() {
            require(['./view/detail'])
        }
    },
    {
        path: '/list',
        component() {
            require(['./components/list'])
        }
    },
    {
        path: '/panel',
        component() {
            require(['./components/panel'])
        }

    }
    ]
}