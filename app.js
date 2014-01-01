var app		= require('http').createServer(handler),
    io 		= require('socket.io').listen(app),
    fs 		= require('fs'),
    connections = 0;
	port	= 8080,
	html 	= fs.readFileSync('index.html', 'utf8');


function handler (req, res){

	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', Buffer.byteLength(html, 'utf8'));
	res.end(html);
}

function tick(){

	var Obj = {
		time: new Date().toUTCString(),
		connections: app._connections
	};
	//io.sockets.send(new Date().toUTCString());
	io.sockets.json.send(Obj);
}

setInterval(tick, 1000);

app.listen(port);
