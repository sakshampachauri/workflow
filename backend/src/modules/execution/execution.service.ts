import { Workflow }
from "../workflow/workflow.model";

import { Execution }
from "./execution.model";

import { WorkflowEngine }
from "../../engine/WorkFlowEngine";

export class ExecutionService {

  async executeWorkflow(
    workflowId: string,
    input: string
  ) {

    const workflow =
      await Workflow.findById(
        workflowId
      );

    if (!workflow) {

      throw new Error(
        "Workflow not found"
      );
    }

    const engine =
      new WorkflowEngine();

    const result =
      await engine.execute(
        workflow,
        input
      );

    const execution =
      await Execution.create({
        workflowId,

        input,

        finalOutput:
          result.finalOutput,

        status: "SUCCESS",

        stepResults:
          result.results
      });

    return execution;
  }

   async getExecutions() {

    return Execution
      .find()
      .populate(
        "workflowId",
        "name"
      )
      .sort({
        createdAt: -1
      });

  }
}