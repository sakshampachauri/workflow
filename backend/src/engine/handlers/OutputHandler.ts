import { StepHandler }
from "../interfaces/StepHandler";

export class OutputHandler
implements StepHandler {

  async execute(
    input: any
  ) {

    return input;

  }
}