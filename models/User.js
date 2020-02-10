const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    photo: String,
    likedRecipes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe;',
      },
    ],
    role: {
      type: String,
      default: 'basic',
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;