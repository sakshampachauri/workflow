export type StepType =
  | "uppercase"
  | "lowercase"
  | "trim"
  | "delay"
  | "condition"
  | "mock-api"
  | "output";

export interface Step {
  id: string;
  order: number;
  type: StepType;
  config?: Record<string, any>;
}

export interface CreateWorkflowDto {
  name: string;
  description?: string;
  steps?: Step[];
}