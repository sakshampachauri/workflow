import { StepHandler }
from "../interfaces/StepHandler";

export class DelayHandler
implements StepHandler {

  async execute(
    input: any,
    config: any
  ) {

    const duration =
      config?.duration || 1000;

    await new Promise(
      resolve =>
        setTimeout(
          resolve,
          duration
        )
    );

    return input;
  }
}