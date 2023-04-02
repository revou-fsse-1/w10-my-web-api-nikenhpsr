const express = require("express");
const router = express.Router();

//posts model
const Posts = require("../../models/db");

//@routes POST api/Posts
router.post("/", async (req, res) => {
  const newPost = new Posts(req.body);
  try {
    const post = await newPost.save();
    if(!post) throw Error('Something went wrong');
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({msg: err});
  }
});

//@routes GET ALL api/Posts
router.get("/", async (req, res) => {
  try {
    const post = await Posts.find();
    if(!post) throw Error('No Items');
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({msg: err});
  }
});

//@routes GET specific api/Posts
router.get("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if(!post) throw Error('No Items');
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({msg: err});
  }
});

//@routes DEL api/Posts by Id
router.delete("/:id", async (req, res) => {
    try {
      const post = await Posts.findByIdAndDelete(req.params.id);
      if(!post) throw Error('No Items');
      res.status(200).json({success: true});
    } catch (err) {
      res.status(500).json({msg: err});
    }
  });

//@routes PATCH api/Posts by Id
router.patch("/:id", async (req, res) => {
    try {
      const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
      if(!post) throw Error('No Items');
      res.status(200).json({success: true});
    } catch (err) {
      res.status(500).json({msg: err});
    }
  });

module.exports = router