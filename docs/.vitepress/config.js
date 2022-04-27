// ./docs/.vitepress/config.js

module.exports = {
    base: '/vue-validators/',
    title: 'VueValidators.vue',
    description: 'A documentation site for the VueValidators component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/vue-validators" },
            { text: "GitHub", link: "https://github.com/obewds/vue-validators" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
