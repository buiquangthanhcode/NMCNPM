import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },                                        
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    
    isAdmin: {
      type: Boolean,
      default: false,
    },
    country: {
      type: String,
      default: "VietNam",
     
    },
    img: {
      type: String,
      default: "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
    },
    city: {
      type: String,
      default:"Ho Chi Minh"
    },
    phone: {
      type: String,
      default:"1234567890"
    },
    hotelname: {
      type: String,
      default:"Hotel Sai Gon"
     
    },
   
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);