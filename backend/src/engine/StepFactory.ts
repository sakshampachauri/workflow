import { TrimHandler }
from "./handlers/TrimHandler";

import { UppercaseHandler }
from "./handlers/UppercaseHandler";

import { LowercaseHandler }
from "./handlers/LowercaseHandler";

import { DelayHandler }
from "./handlers/DelayHandler";

import { ConditionHandler }
from "./handlers/ConditionHandler";

import { MockApiHandler }
from "./handlers/MockApiHandler";

import { OutputHandler }
from "./handlers/OutputHandler";

export class StepFactory {

  static getHandler(
    type: string
  ) {

    switch(type) {

      case "trim":
        return new TrimHandler();

      case "uppercase":
        return new UppercaseHandler();

      case "lowercase":
        return new LowercaseHandler();

      case "delay":
        return new DelayHandler();

      case "condition":
        return new ConditionHandler();

      case "mock-api":
        return new MockApiHandler();

      case "output":
        return new OutputHandler();

      default:
        throw new Error(
          `Unsupported step ${type}`
        );
    }
  }
}