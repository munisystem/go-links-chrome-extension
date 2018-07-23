const path = require('path')
const glob = require('glob');

module.exports = {
    entry: {
      background: path.join(__dirname, './src/background.ts'),
    },
    output: {
        path: path.join(__dirname, './dist/js'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'initial'
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}
