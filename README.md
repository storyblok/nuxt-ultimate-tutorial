# The Storyblok Nuxt Ultimate Template

Based on a https://github.com/storyblok/nuxt-ultimate-tutorial and combines the recommandations from storyblok and my own suggestions.
Used as a way to debug storyblok issues in nuxt3.

The template is deployed to netlify here: https://storyblok-nuxt-ultimate-template.netlify.app/

Changes from nuxt-ultimate-tutorial:
* yarn instead of npm - [Advantages with yarn](https://www.knowledgehut.com/blog/web-development/yarn-vs-npm#:~:text=What%20is%20the%20major%20difference%20between%20NPM%20and%20Yarn%3F)
* Coverts the project into Typescript - [Advantages with a typed language](https://garycordero1690.medium.com/loosely-typed-and-strongly-type-languages-550ce60b2739#:~:text=Strongly%20typed%20languages%20give%20more%20structure%20and%20safety%20to%20the%20program%20and%20many%20errors%20are%20caught%20during%20the%20compilation%20time.%20Making%20it%20easier%20to%20debug%20and%20test%20your%20code.), [Nuxt with typescript](https://nuxt.com/docs/guide/concepts/typescript)
* Updated package scripts according to nuxt recommendations - [Nuxt3 Commands](https://nuxt.com/docs/api/commands/add)
* Storyblok CLI support - [storyblok CLI on github](https://github.com/storyblok/storyblok-cli)
* Eslint support and my recommended rules - [nuxt3 typescript eslint](https://www.npmjs.com/package/@nuxtjs/eslint-config-typescript), [typescript eslint](@typescript-eslint/eslint-plugin), [airbnb eslint rules](eslint-config-airbnb-base)
* Router middleware to redirect to path with trailing slash - [Forcing trailing slash for netlify](https://dev.to/mornir/nuxt-netlify-and-the-trailing-slash-3gge)
* Updated `[...slug].vue` with `useAsyncStoryblok` and better route handling - [useAsyncStoryblok as suggested method for pulling async data](https://github.com/storyblok/storyblok-nuxt#:~:text=%3Cscript%20setup%3E%0A%20%20const%20story%20%3D%20await%20useAsyncStoryblok(%22vue%22%2C%20%7B%20version%3A%20%22draft%22%20%7D)%3B%0A%3C/script%3E%0A%0A%3Ctemplate%3E%0A%20%20%3CStoryblokComponent%20v%2Dif%3D%22story%22%20%3Ablok%3D%22story.content%22%20/%3E%0A%3C/template%3E), [route handling with proper preview mode](https://discord.com/channels/700316478792138842/1068125231845216256/1068186352312668210)
* Attempts to improve tailwind intellisense - [Recommended extension and setting from 2022](https://stackoverflow.com/questions/47607602/how-to-add-a-tailwind-css-rule-to-css-checker#:~:text=2022%2D05%20Update,my%20recommended%20approach.)
* Updated AllArticles to improve prerendered support - [Using useAsyncData to store data in application](https://nuxt.com/docs/api/composables/use-async-data)
* Disables clicks in live editor - [bridge options](https://www.storyblok.com/docs/Guides/storyblok-latest-js#:~:text=If%20you%20want%20to%20prevent%20the%20iframe%20events%2C%20like%20clicking%20on%20a%20link%2C%20to%20happen%2C%20you%20can%20set%20this%20option.)
* Adds a custom async storyblok fetch composable that has proper error handling - [Throw 404 error if story was not found](https://github.com/storyblok/storyblok-nuxt/pull/267), [Adds a check for errors on useAsyncStoryblok to prevent errors from gettting to clients.](https://github.com/storyblok/storyblok-nuxt/pull/259)

## Vscode
### Recommended extensions:
* [vue.volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue language support recommended by nuxt3
* [Vue.vscode-typescript-vue-plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) - Typescript support for volar
* [bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - vscode tailwind css support

### Unrecommended extensions:
* [octref.vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - Not recommended for Typescript
* vscode.typescript-language-features - Built in support typescript support not recommended when using volar

### Setting up the Storyblok Space
Either use the [create your own copy link](https://app.storyblok.com/#!/build/169999) from [storyblok/nuxt-ultimate-tutorial](https://github.com/storyblok/nuxt-ultimate-tutorial#:~:text=Branch%3A%20part%2D5-,Storyblok%20space%3A%20Create%20your%20own%20copy,-About) or you can use the storyblok cli.

How to set up storyblok-nuxt-ultimate-template with Storyblok CLI:
1. Login to Storyblok CLI in your command line while in the project directory (make sure you have run `yarn install` first) - `yarn storyblok login`
![image](https://user-images.githubusercontent.com/5083273/209108425-7cc108a5-35e8-4602-ba69-78e4a748979c.png)

2. Create a new Storyblok Space - `yarn storyblok quickstart`

![image](https://user-images.githubusercontent.com/5083273/215266135-11c86f60-ab7e-4abd-aafa-ab37f098246d.png)
3. Grab your new storyblok space id - `yarn storyblok spaces`
4. Push the nuxt-ultimate-tutorial components to your new Storyblok space - `yarn storyblok push-components --space {your-space-id} storyblok/components.json`
5. Remove all the components that does not belong to nuxt-ultimate-tutorial - `yarn storyblok delete-components storyblok/components.json --space {your-space-id} --reverse`
6. ???
7. You are now ready to create content in Storyblok
