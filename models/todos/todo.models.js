import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', //string user in export's model parenthesis
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId, // ref is now compulsory to write
        ref: 'subTodo',
      },
    ], //Array of subtodos
  },
  { timestamps: true }
);

export const todo = mongoose.model('Todo', todoSchema); // Todo stored as todos in DB
