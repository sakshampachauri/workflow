import { StepHandler }
from "../interfaces/StepHandler";

export class TrimHandler
implements StepHandler {

  async execute(input: string) {

    return input.trim();

  }
}