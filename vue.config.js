module.exports = {
  // chainWebpack: config => {
  //   config.plugin("provide").use(require("webpack").ProvidePlugin, [
  //     {
		// mapboxgl: "mapbox-gl"
  //     }
  //   ]);
  // },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/covid-19/'
    : '/'
}
