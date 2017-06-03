let webpack = require("webpack");
let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry : [
		"./app/index.jsx"
	],
  output: {
    path : path.resolve(__dirname, "public"),
    filename : "bundle.js"
  },
	resolve: {
		alias: {
			App 							:  path.resolve(__dirname, "app/components/App.jsx"),
			Navigation 				:  path.resolve(__dirname, "app/components/Navigation.jsx"),
			FindPhotos 				:  path.resolve(__dirname, "app/components/FindPhotos.jsx"),
			About 						:  path.resolve(__dirname, "app/components/About.jsx"),
			Example 					:  path.resolve(__dirname, "app/components/Example.jsx"),
			ListPhoto 				:  path.resolve(__dirname, "app/components/ListPhoto.jsx"),
			FetchAPI 					:  path.resolve(__dirname, "app/components/FetchAPI.jsx"),
			Form 					:  path.resolve(__dirname, "app/components/Form.jsx"),
		},
		extensions: ['.js', '.jsx']
	},
  module : {
    rules: [
      { test:/\.(jsx)$/, use: "babel-loader" },
      {
				test:/\.css$/,
				use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
			}
    ]
  },
  plugins : [
	new  HtmlWebpackPlugin({
    template : "./app/index.html"
  }),
	new ExtractTextPlugin("style.css")
	]
}
