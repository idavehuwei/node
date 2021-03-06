var redis = require("redis")
var client = redis.createClient()

/*
    Calling unref() will allow this program to exit immediately after the get
    command finishes. Otherwise the client would hang as long as the
    client-server connection is alive.
*/
client.unref()
client.get("foo", function (err, value) {
	if (err) throw (err)
	console.log(value)
})
