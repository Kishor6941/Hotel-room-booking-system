const express = require("express");
const router = express.Router();
const moment = require("moment");
const Booking = require("../models/booking");
const Room = require("../models/room");

router.post("/bookroom", async (req, res) => {
  try {
    const booking = new Booking({
      room: req.body.room,
      roomid: req.body.roomid,
      userid: req.body.userid,
      fromdate: moment(req.body.fromdate).format("DD-MM-YYYY"),
      todate: moment(req.body.todate).format("DD-MM-YYYY"),
      totalamount: req.body.totalamount,
      totaldays: req.body.totaldays,
      transactionid: req.body.transactionid,
    });
    const newBooking = await booking.save();
    const roomTemp = await Room.findOne({ _id: req.body.roomid });

    roomTemp.currentbookings.push({
      bookingid: newBooking._id,
      fromdate: moment(req.body.fromdate).format("DD-MM-YYYY"),
      todate: moment(req.body.todate).format("DD-MM-YYYY"),
      userid : req.body.userid,
      status : booking.status
    });

    await roomTemp.save();

    res
      .status(201)
      .json({ message: "Room Booked successful", data: newBooking });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getbookingsbyuserid", async (req, res) => {
  try {
    const bookings = await Booking.find({ userid: req.body.userid });
    res.status(200).json(bookings);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/cancelbooking", async (req, res) => {
  try {
    const booking = await Booking.findOne({ _id: req.body.bookingid });
    booking.status = "cancelled";
    await booking.save();

    const room = await Room.findOne({ _id: req.body.roomid });
    const bookings= room.currentbookings;
    const temp = bookings.filter(
      (booking) => booking.bookingid.toString() !== req.body.bookingid
    );
    room.currentbookings = temp;

    await room.save();
    res.status(200).json({ message: "Your Booking Cancelled Successfully" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
