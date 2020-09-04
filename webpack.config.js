
module.exports = {
    module: {
      rules: [
        {
          test: /\.(woff|woff2|otf|ttf)$/,
          use: {
            loader: 'file-loader',
          },
        },
      ],
    },
  };