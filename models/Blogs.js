const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "title is required"],
  },
  snippet: {
    type: String,
    trim: true,
    required: [true, "snippet is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  author: {
    type: Schema.Types.ObjectId,
    refs: "user",
    required: [true, "author is required"],
  },

  image: {
    type: [String],
    default: "",
  },

  ratings: {
    type: Number,
    default: 1,
    validator: {
     max:[5,"above 1"],
     min:[1,"below 5"],
    },
  },
});

module.exports = model("blog", blogSchema);
