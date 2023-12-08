const fs = require("fs")
const mongoose = require("mongoose")

configDotenv.config({ path: "./config/config.env" })

const Bootcamp = require("./models/Bootcamp")

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: true,
  useUnifiedTopology: true,
})

const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf8")
)

const importData = async () => {
  try {
    await Bootcamp.create(bootcamps)

    console.log("Data Imported...")
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

const deleteData = async () => {
  try {
    await Bootcamp.deleteMany()

    console.log("Data Deleted...")
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

if (process.argv[2] === "-i") {
  importData()
} else if (process.argv[2] === "-d") {
  deleteData()
}
