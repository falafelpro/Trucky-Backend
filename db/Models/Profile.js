const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema ({

image: String,
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

}

);

module.exports = mongoose.model("Profile", ProfileSchema)