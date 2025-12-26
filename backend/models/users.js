
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
  username: String,
  email: String,
  passwordHash: String,
  role: { type: String, enum: ["user", "admin", "guide"], default: "user" },
  profile: {
    fullName: String,
    gender: String,
    dateOfBirth: Date,
    phone: String,
    country: String,
    avatarUrl: String,
    preferences: {
      languages: [String],
      interests: [String], // e.g., "mountains", "culture", "food"
      budgetRange: { min: Number, max: Number }
    }
  },
  accountStatus: { type: String, enum: ["active", "suspended", "deleted"], default: "active" },
  createdAt: Date,
  updatedAt: Date,
  lastLogin: Date,
  activityLog: [
    {
      action: String, // "login", "update_profile", "book_trip"
      ipAddress: String,
      device: String,
      timestamp: Date
    }
  ]
}
);

userSchema.pre('save', function () {
  this._snapshot = this.toObject();
});

userSchema.post('save', function (doc) {
  console.log('AUDIT LOG:', {
    action: 'create',
    userId: doc._id,
    data: doc.toObject()
  });
});
           
const User = mongoose.model("User", userSchema);

module.exports = User;
