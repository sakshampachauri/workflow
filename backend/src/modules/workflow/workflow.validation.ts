import { z } from "zod";

export const StepSchema = z.object({
  id: z.string(),
  order: z.number(),
  type: z.enum([
    "uppercase",
    "lowercase",
    "trim",
    "delay",
    "condition",
    "mock-api",
    "output"
  ]),
  config: z.record(z.string(), z.any()).optional()
});

export const CreateWorkflowSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  steps: z.array(StepSchema).optional()
});

export type CreateWorkflowInput =
  z.infer<typeof CreateWorkflowSchema>;