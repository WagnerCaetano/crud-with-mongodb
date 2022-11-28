const ParticipantsModel = require("../models/Participants");

exports.getAllParticipants = async () => {
  return await ParticipantsModel.find();
};

exports.putParticipants = async (participant) => {
  const actual = await this.getAllParticipants();

  console.log(actual);

  console.log("update", { ...actual[0]._doc._id, participants: [...actual[0]._doc.participants, participant]  })

  return await ParticipantsModel.findByIdAndUpdate(actual[0]._doc._id, { ...actual[0]._doc, participants: [...actual[0]._doc.participants, participant]  });
};

exports.putWinner = async (winner) => {
  const actual = await this.getAllParticipants();

  return await ParticipantsModel.findByIdAndUpdate(actual[0]._doc._id, { ...actual[0]._doc, name: winner, status: 'sorteado' });
};

exports.deleteParticipants = async () => {
  const actual = await this.getAllParticipants();

  await ParticipantsModel.findByIdAndDelete(actual[0]._doc._id);
  return this.setup();
};

exports.setup = async () => {

  return await ParticipantsModel.create({ participants: [], name: "", status: "vazio" });
};