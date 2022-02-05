import express from "express"

const server = express()

server.listen(3333, () => {
	console.log("server is running at url https://localhost:3333")
})