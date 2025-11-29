import createHttpError from "http-errors";
import { saveFileToCloudinary } from "../utils/saveFileToCloudinary.js";
import { User } from "../models/user.js";

export const updateUserAvatar = async (req, res, next) => {
  if (!req.file) {
  return next(createHttpError(400, "No file"));
}

  const result = await saveFileToCloudinary(req.file.buffer);

  const updateUser = await User.findByIdAndUpdate(
    req.user._id,
    { avatar: result.secure_url },
    { new: true }
  );

res.status(200).json({ url: updateUser.avatar });
};
