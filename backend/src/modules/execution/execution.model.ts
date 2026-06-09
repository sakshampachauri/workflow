import mongoose from "mongoose";

const StepResultSchema =
  new mongoose.Schema({
    stepId: String,
    stepType: String,
    output:
      mongoose.Schema.Types.Mixed
  });

const ExecutionSchema =
  new mongoose.Schema(
    {
      workflowId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Workflow"
      },

      input: String,

      finalOutput:
        mongoose.Schema.Types.Mixed,

      status: {
        type: String,
        enum: [
          "SUCCESS",
          "FAILED"
        ]
      },

      stepResults: [
        StepResultSchema
      ]
    },
    {
      timestamps: true
    }
  );

export const Execution =
  mongoose.model(
    "Execution",
    ExecutionSchema
  );