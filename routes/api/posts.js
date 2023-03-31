const express = require("express");
const router = express.Router();

//post model
const Posts = require("../../models/post");

//@routes GET API/post
//@desc GET ALL post
router.get("/", async (req, res) => {
  try {
    const post = await Posts.find();
    if (!post) throw Error("No posts found");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//@routes GET API/post
//@desc GET specific post
router.get("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) throw Error("No posts found");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//@routes POST API/post
//@desc Create a post

router.post("/", async (req, res) => {
  /*res.send('Let\'s create a post');*/
  /*console.log(req.body);*/
  const newPost = new Posts(req.body);
  try {
    const post = await newPost.save();
    if (!post) throw Error("Something went wrong while saving the post");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//@routes DEL API/post
//@desc DEL by id
router.delete("/:id", async (req, res) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if (!post) throw Error("No ID found");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//@routes UPDATE API/post
//@desc UPDATE
router.patch("/:id", async (req, res) => {
  try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
    if (!post) throw Error("Something when wrong while updating");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
