var webpack = require("webpack")
var path = require('path')

module.exports ={
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
       ], //entry file where does it start?
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
                root: __dirname,
                extensions: ['', '.js', '.jsx'],
                      //file extensions to be able to process from inside file req calls
                alias: {
                    appcss: 'app/styles/app.scss',
                }
            },
    module: {
        loaders: [
                {
                    loader: 'babel-loader', //same name as in package.json
                    query: {
                        presets: ['react', 'es2015', 'stage-0'] //babel loader: parse files through react translator and run them through es2015 
                    },
                    test: /\.jsx?$/,  //what files to laod? //=open/end regex, escape. > look for jsx files, ?=at the end of file name
                    exclude: /(node_modules|bower_components)/ //ignore node modules folder or bower components for the translation
                    
                }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './node_modules/foundation-sites/scss')] //combine 2 paths
    },
    devtool: 'cheap-module-eval-source-map'
}