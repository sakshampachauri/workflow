import express from "express";
import cors from "cors";
import morgan from "morgan";

import workflowRoutes from "./modules/workflow/workflow.routes";

import executionRoutes from "./modules/execution/execution.routes";



const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/executions",executionRoutes);

app.get("/health", (_, res) => {
  res.json({
    success: true
  });
});

app.use(
  "/api/workflows",
  workflowRoutes
);

export default app;