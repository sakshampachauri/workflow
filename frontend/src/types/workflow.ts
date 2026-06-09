// export type StepType =
//   | "trim"
//   | "uppercase"
//   | "lowercase"
//   | "delay"
//   | "condition"
//   | "mock-api"
//   | "output";

// export interface Step {
//   id: string;
//   order: number;
//   type: StepType;
//   config?: Record<string, any>;
// }

// export interface Workflow {
//   _id?: string;
//   name: string;
//   description?: string;
//   steps: Step[];
// }


import type { StepType } from "./step";

export interface Step {

  id: string;

  order: number;

  type: StepType;

  config: Record<
    string,
    any
  >;
}

export interface Workflow {

  _id?: string;

  name: string;

  description: string;

  steps: Step[];
}