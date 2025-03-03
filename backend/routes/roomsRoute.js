const express = require("express");
const router = express.Router();

const Room = require("../models/room");

/** get all room list */
router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    return res.send( rooms );
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

/** get room by Id */
router.get("/room/:id", async (req, res) => {
    try {
      const room = await Room.findById(req.params.id);
      if (!room) return res.status(404).json({ message: "room not found" });
      res.json(room);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  });

  router.post("/addroom", async (req, res) => {
    try {
      const newRoom = new Room(req.body);
      await newRoom.save();
      res.status(201).json({ message: "New Room Added", data: newRoom });
    } catch (error) {
      res.status(400).json({ message: error }); 
    }
  });

module.exports = router