import { StepHandler }
from "../interfaces/StepHandler";

export class ConditionHandler
implements StepHandler {

  async execute(
    input: string,
    config: any
  ) {

    const operator =
      config.operator;

    const value =
      config.value;

    switch(operator) {

      case "contains":

        return {
          input,
          passed:
            input.includes(value)
        };

      default:

        return {
          input,
          passed: false
        };
    }
  }
}