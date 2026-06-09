import mongoose from "mongoose";

const StepSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true
    },

    order: {
      type: Number,
      required: true
    },

    type: {
      type: String,
      required: true
    },

    config: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    }
  },
  { _id: false }
);

const WorkflowSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    steps: [StepSchema]
  },
  {
    timestamps: true
  }
);

export const Workflow = mongoose.model(
  "Workflow",
  WorkflowSchema
);