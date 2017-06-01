let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry : "./app/index.jsx",
  output: {
    path : path.resolve(__dirname, "public"),
    filename : "bundle.js"
  },
	resolve: {
		alias: {
			App 						:  path.resolve(__dirname, "app/components/App.jsx"),
			Navigation 			:  path.resolve(__dirname, "app/components/Navigation.jsx"),
			Weather 				:  path.resolve(__dirname, "app/components/Weather.jsx"),
			About 					:  path.resolve(__dirname, "app/components/About.jsx"),
			Example 				:  path.resolve(__dirname, "app/components/Example.jsx"),
			WeatherForm 		:  path.resolve(__dirname, "app/components/WeatherForm.jsx"),
			WeatherMessage 	:  path.resolve(__dirname, "app/components/WeatherMessage.jsx"),
			OpenWeatherMap 	:  path.resolve(__dirname, "app/api/OpenWeatherMap.jsx"),
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
