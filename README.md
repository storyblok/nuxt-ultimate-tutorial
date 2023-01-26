# The Storyblok Nuxt Ultimate Template

Based on a https://github.com/storyblok/nuxt-ultimate-tutorial and combines the recommandations from storyblok and my own suggestions.
Used as a way to debug storyblok issues in nuxt3.

Changes from nuxt-ultimate-tutorial:
* yarn instead of npm - [Advantages with yarn](https://www.knowledgehut.com/blog/web-development/yarn-vs-npm#:~:text=What%20is%20the%20major%20difference%20between%20NPM%20and%20Yarn%3F)
* Coverts the project into Typescript - [Advantages with a typed language](https://garycordero1690.medium.com/loosely-typed-and-strongly-type-languages-550ce60b2739#:~:text=Strongly%20typed%20languages%20give%20more%20structure%20and%20safety%20to%20the%20program%20and%20many%20errors%20are%20caught%20during%20the%20compilation%20time.%20Making%20it%20easier%20to%20debug%20and%20test%20your%20code.), [Nuxt with typescript](https://nuxt.com/docs/guide/concepts/typescript)
* Updated package scripts according to nuxt recommendations - [Nuxt3 Commands](https://nuxt.com/docs/api/commands/add)
* Storyblok CLI support - [storyblok CLI on github](https://github.com/storyblok/storyblok-cli)



## Vscode
### Recommended extensions:
* [vue.volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue language support recommended by nuxt3
* [Vue.vscode-typescript-vue-plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) - Typescript support for volar

### Unrecommended extensions:
* [octref.vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - Not recommended for Typescript
* vscode.typescript-language-features - Built in support typescript support not recommended when using volar
