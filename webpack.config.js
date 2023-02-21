module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
      },
    plugins: [
        new HtmlWebpackPlugin({
     title: 'Development',
   }),
 ],
    output: {
        filename: 'main.js'
    }
}
