const http2 = require('http2');
const options = {
	key: getKeySomehow(),
	cert: getCertSomehow()
};

// https is necessary otherwise browsers will not
// be able to connect
const server = http2.createSecureServer(options);
server.on('stream', (stream, headers) => {
	// stream is a Duplex
	// headers is an object containing the request headers

	// respond will send the headers to the client
	// meta headers starts with a colon (:)
	stream.respond({ ':status': 200 });

	// there is also stream.respondWithFile()
	// and stream.pushStream()

	stream.end('Hello World!');
});

server.listen(3000);
