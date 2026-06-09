import { StepFactory }
from "./StepFactory";

export class WorkflowEngine {

  async execute(
    workflow: any,
    input: any
  ) {

    let currentData = input;

    const results = [];

    const orderedSteps =
      [...workflow.steps]
        .sort(
          (a, b) =>
            a.order - b.order
        );

    for (
      const step of orderedSteps
    ) {

      const handler =
        StepFactory.getHandler(
          step.type
        );

      currentData =
        await handler.execute(
          currentData,
          step.config
        );

      results.push({
        stepId: step.id,
        stepType: step.type,
        output: currentData
      });
    }

    return {
      finalOutput:
        currentData,
      results
    };
  }
}