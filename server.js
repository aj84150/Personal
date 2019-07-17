const express = require('express')

const app = express()

app.get("/order/:id", (req, res) => {
	const id = parseInt(req.params.id);
	res.send('You requested for !'+id);
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});