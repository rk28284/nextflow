const videoModel = require("../model/video.model");

const createVideo = async (req, res) => {
  try {
    const video = await videoModel.create({
      ...req.body,
      owner: req.user.id,
      history: [{ updatedBy: req.user.id, action: "Created" }],
    });
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const getVideos = async (req, res) => {
  try {
    const videos = await videoModel.find().populate("owner");
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};





module.exports = {
  createVideo,
  getVideos,
};
