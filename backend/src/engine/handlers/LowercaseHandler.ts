import { StepHandler }
from "../interfaces/StepHandler";

export class LowercaseHandler
implements StepHandler {

  async execute(input: string) {

    return input.toLowerCase();

  }
}