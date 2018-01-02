import colors from 'colors';
import express from 'express';
import path from 'path';
import open from 'open';
import config from '../webpack.config.dev';
import webpack from 'webpack';

const port = 3000;
const app = express();
const compiler = webpack(config);



app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    /*eslint-disable no-console */
    console.log(`Error in starting server ${err}`.red);
  }
  else {
    open(`http://localhost:${port}`);

  }
});
/*eslint-disable no-console */
console.log("Starting server...".green);
