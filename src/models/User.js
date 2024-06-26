import { Schema, model, models } from "mongoose";
const UserSchema = new Schema({
  email: {
    type: "string",
    unique: [true, "Email already in use"],
    required: [true, "Email is required"],
  },
  username: {
    type: "string",
    unique: [true, "Username already in use"],
    required: [true, "Username is required"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);
export default User;