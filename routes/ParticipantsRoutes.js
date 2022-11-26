const express = require("express");
const {
  getAllParticipants,
  putParticipants,
  deleteParticipants,
  putWinner
} = require("../controllers/ParticipantsController");

const router = express.Router();

router.route("/").get(getAllParticipants).put(putParticipants);
router.route("/winner").get(getAllParticipants).put(putWinner);
router.route("/reset").delete(deleteParticipants);

module.exports = router;
