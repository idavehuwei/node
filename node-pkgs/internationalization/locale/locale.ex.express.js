var express = require("express")
	, locale = require("locale")
	, supported = ["en", "en_US", "ja"]
	, app = express()

app.use(locale(supported))

app.get("/", function (req, res) {
	res.header("Content-Type", "text/plain")
	res.send(
		"You asked for: " + req.headers["accept-language"] + "\n" +
		"We support: " + supported + "\n" +
		"Our default is: " + locale.Locale["default"] + "\n" +
		"The best match is: " + req.locale + "\n"
	)
})

app.listen(8000)
