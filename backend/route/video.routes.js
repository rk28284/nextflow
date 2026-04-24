const express = require("express");
const videoRouter = express.Router();
const {
  createVideo,
  getVideos,
} = require("../controllers/video.controller");


// Get all videos
videoRouter.get("/video", getVideos);

// Create a new video
videoRouter.post("/video", createVideo);





module.exports = videoRouter;
