import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import users from './routes/users';

const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/mern-app');

mongoose.connection.once('open', () => {
    console.log('connected to db mongodb://localhost/mern-app');
}).on('error', (error) => {
    console.log('Connection error:', error);
});

// set mongoose promise to global promise
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api/users', users);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static('client/public'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));
