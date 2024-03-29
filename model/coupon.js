const mongoose = require("mongoose");
const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  discountType: {
    type: String,
    required: true,
  },
  discountAmount: {
    type: Number,
  },
  maxCartAmount: {
    type: Number,
  },
  maxDiscountAmount: {
    type: Number,
  },
  user: {
    type: Array,
    ref: "User",
    default: [],
  },
  maxUsers: {
    type: Number,
  },
  status: {
    type: Boolean,
    default: true,
  },

  expiryDate: {
    type: Date,
    required: true,
  },
});

const coupon = mongoose.model("coupon", couponSchema);
module.exports = coupon;
