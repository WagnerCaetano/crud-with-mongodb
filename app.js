const express = require("express");
const mongoose = require("mongoose");
const ParticipantsRouter = require("./routes/ParticipantsRoutes");
const ParticipantsService = require("./services/ParticipantsService");

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: './connectionString.env' });
}

//middleware
app.use(express.json());
app.use("/api/Participants", ParticipantsRouter);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// setup
ParticipantsService.getAllParticipants().then(participants => {
  if (participants.length === 0) {
    ParticipantsService.setup().then(res => {});
  } else {
    ParticipantsService.deleteParticipants().then(res => {});
  }
});

//setTimeout(() => {
//  ParticipantsService.putParticipants("roberto").then(participants => {});
//}, 3000);

// setTimeout(() => {
//   ParticipantsService.deleteParticipants().then(participants => console.log(participants));
// }, 9000);

module.exports = app;
