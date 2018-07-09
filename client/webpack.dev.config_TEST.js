module.exports = {
  target: "web",
  // webpack-dev-server will monitor the code dependency
  // of these entry points, and re-create the bundle
  // when changes are detected. In this example, the main
  // javascript is main.js, and it points to
  // other code dependencies
  entry: {
    app: ["./app/javascripts/packs/main.js"]
  },
  // This specifies where javascript bundle is created when
  // webpack CLI is run. However, webpack-dev-server is only 
  // concerned with the 'filename' parameter.
  // webpack-dev-server generates the bundle with the 'filename' in
  // memory. It never creates an actual file in the 'path' specified
  // unlike the webpack CLI.  
  output: {
    path: path.resolve(__dirname, "../build/assets"),
    filename: "bundle.js",
  },
  // webpack-dev-server configuration
  devServer: {
    // Can be omitted unless you are using 'docker' 
    host: '0.0.0.0',
    // This is where webpack-dev-server serves your bundle
    // which is created in memory.
    // To use the in-memory bundle,
    // your <script> 'src' should point to the bundle
    // prefixed with the 'publicPath', e.g.:
    //   <script src='http://localhost:9001/assets/bundle.js'>
    //   </script>
    publicPath: '/assets/',
    // The local filesystem directory where static html files
    // should be placed.
    // Put your main static html page containing the <script> tag
    // here to enjoy 'live-reloading'
    // E.g., if 'contentBase' is '../views', you can
    // put 'index.html' in '../views/main/index.html', and
    // it will be available at the url:
    //   https://localhost:9001/main/index.html
    contentBase: path.resolve(__dirname, "../views"),
    // 'Live-reloading' happens when you make changes to code
    // dependency pointed to by 'entry' parameter explained earlier.
    // To make live-reloading happen even when changes are made
    // to the static html pages in 'contentBase', add 
    // 'watchContentBase'
    watchContentBase: true,
    compress: true,
    port: 9001
  }
}