import mongoose, { Schema, Document, Model } from "mongoose";

const postSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  author:{type:Schema.Types.ObjectId, ref:'User'},
}, {
    timestamps: true,
});

const postModel = mongoose.model("Post", postSchema);

export default postModel;