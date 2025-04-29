import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

const app = express()

// Middleware
app.use(cors()) // Allows requests from different origins
app.use(helmet()) // Security HTTP
app.use(morgan("dev")) // Logs the connections 
app.use(express.json()) // Allows express to use JSON

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
