import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import MoviesDAO from "./dao/moviesDAO.js"

async function main() {
  dotenv.config()
  const client = new mongodb.MongoClient(process.env.MOVIEREVIEWS_DB_URI)
  const port = process.env.port || 8000

  try {
    await client.connect()
    await MoviesDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  } catch (e) {
    console.error(e)
  }
}

main().catch(console.error);

