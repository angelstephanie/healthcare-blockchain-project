const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use("/files", express.static("files"));

// Mongodb Connection
const mongoUrl =
  "mongodb+srv://{username}:{password}@healthcareblockchain.ywpkw.mongodb.net/?retryWrites=true&w=majority&appName=HealthcareBlockchain";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

// Multer Connection
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

require("./healthcareProvidersDetails");
const HealthcareProvidersSchema = mongoose.model("HealthcareProviders");
const upload = multer({ storage: storage });

app.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await HealthcareProvidersSchema.create({title: title, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/get-files", async (req, res) => {
  try {
    HealthcareProvidersSchema.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});

// API
app.get("/", async (req, res) => {
  res.send("Success");
});

app.listen(4000, () => {
  console.log("Server Started");
});
