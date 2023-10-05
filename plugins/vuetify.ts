import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
export default defineNuxtPlugin({
  name: "vuetify",
  enforce: "pre",
  async setup(nuxtApp) {
    const vuetify = createVuetify({ 
      ssr: true,
      components,
      directives,
    })
    nuxtApp.vueApp.use(vuetify)
  },
})