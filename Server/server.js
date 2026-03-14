import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"

const app = express()

/* Middleware */

app.use(express.json())
app.use(cors())

/* MongoDB */

connectDB()

/* Routes */

app.use("/api/auth", authRoutes)

/* Static frontend */

app.use(express.static("public"))

/* Server */

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})