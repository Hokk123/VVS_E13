module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: false,
      },
    plugins: [
        new HtmlWebpackPlugin({
     title: 'Production',
   }),
 ],
    output: {
        filename: 'main.js'
    }
}