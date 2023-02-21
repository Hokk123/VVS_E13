module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
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
