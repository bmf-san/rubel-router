module.exports = [
  {
    entry: "./src/index.js",
    output: {
      path: __dirname + "/lib",
      filename: "index.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          query: {
            presets: ["es2015", "react", "stage-0"]
          }
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    }
  }
]
