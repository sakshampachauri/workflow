import { StepHandler }
from "../interfaces/StepHandler";

export class MockApiHandler
implements StepHandler {

  async execute(
    input: any
  ) {

    await new Promise(
      resolve =>
        setTimeout(
          resolve,
          1000
        )
    );

    return {
      previousData: input,
      apiResponse: {
        status: 200,
        message: "Success"
      }
    };
  }
}