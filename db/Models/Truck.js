const mongoose = require("mongoose");
const TruckSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialty: {
      type: [String],
      enum: ["Burger", "Coffee", "Mexican", "Indian"],
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    dishes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dish",
      },
    ],
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Truck", TruckSchema);
