const http = require("http");
const url = require("url");
const primes = require("./cpu_intensive_task_prime");

const server = http.createServer(function(request, response) {
  const { pathname, query } = url.parse(request.url, true);

  if (pathname === "/primes") {
    const result = primes.nthPrime(query.n || 0);
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(result));
    response.end();
  } else {
    response.statusCode = 404;
    response.write("Not Found");
    response.end();
  }
});

server.listen(28080);
