import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
      default: "",
    },
    tag: {
      type: String,
      enum: ['Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo'],
      default: 'Todo',
    },
  },
  {
    timestamps: true,
  },
);

noteSchema.index(
  { title: "text", content: "text" },
  { default_language: "english" }
);

export const Note = model('Note', noteSchema);
