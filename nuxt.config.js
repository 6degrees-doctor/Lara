export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/ProRate.png' },
    {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Cinzel&display=swap"'},
    {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css'},
    {rel:'stylesheet', href:'https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css'},
    {rel:'stylesheet',href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'},
    {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css'}
  ] ,
  script:[{
    src:'/JS/bootstrap.min.js',
   },
{
src:'/JS/script.js',
}]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['@/assets/css/main.css'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
