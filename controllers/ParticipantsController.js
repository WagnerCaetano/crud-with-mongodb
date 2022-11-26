const ParticipantsService = require("../services/ParticipantsService");

exports.getAllParticipants = async (req, res) => {
  try {
    const Participants = await ParticipantsService.getAllParticipants();
    res.json({ data: Participants, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.putParticipants = async (req, res) => {
  try {
    const Participants = await ParticipantsService.putParticipants(req.body.participant);
    res.json({ data: Participants, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.putWinner = async (req, res) => {
  try {
    const Participants = await ParticipantsService.putWinner(req.body.winner);
    res.json({ data: Participants, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.deleteParticipants = async (req, res) => {
  try {
    const Participants = await ParticipantsService.deleteParticipants(req.params.id);
    res.json({ data: Participants, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
