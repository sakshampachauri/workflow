export const STEP_TYPES = [
  "trim",
  "uppercase",
  "lowercase",
  "delay",
  "condition",
  "mock-api",
  "output"
] as const;

export type StepType = typeof STEP_TYPES[number];