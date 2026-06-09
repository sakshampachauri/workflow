import { StepHandler }
from "../interfaces/StepHandler";

export class UppercaseHandler
implements StepHandler {

  async execute(input: string) {

    return input.toUpperCase();

  }
}