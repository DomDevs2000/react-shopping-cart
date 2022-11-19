const path = require('path');
const express = require('express');
const http = require('http');
const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);
const app = express();
const server = http.createServer(app);

const host = 'http://localhost';
const port = process.env.npm_config_port ? process.env.npm_config_port : 8080;

app.use(express.static(path.join('css')));
app.use(express.static(path.join('js')));
app.use('/images', express.static(path.join(__dirname, '../images')));

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './', 'index.html'));
});

server.listen(port);
server.on('listening', (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.info('==> Listening on port %s. Open up %s:%s/ in your browser.', port, host, port);
});
