const path = require('path');
// require pertence ao NODE

// module.exports = {
//     entry: 'src/index.jsx', <-- dependendo do sistema operacional ele pode falhar (windows usa \\) entry indica o prinncipal arquivo, o arquivo inicial
// };

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }
};