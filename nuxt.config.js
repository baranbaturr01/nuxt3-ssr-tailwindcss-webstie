
export default defineNuxtConfig({
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},

        },
    },
    css: [
        "~/assets/css/main.css"
    ],
    //ssr config
    ssr: true,
    //target config
    target: 'server',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt3',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

})
