import {
  Request,
  Response
} from "express";

import { ExecutionService }
from "./execution.service";

const service =
  new ExecutionService();

export class ExecutionController {

  async run(
    req: Request,
    res: Response
  ) {

    try {

      const result =
        await service
          .executeWorkflow(
            Array.isArray(req.params.id) ? req.params.id[0] : req.params.id,
            req.body.input
          );

      res.json({
        success: true,
        data: result
      });

    } catch(error: any) {

      res.status(400).json({
        success: false,
        message:
          error.message
      });
    }
  }

    async getHistory(
    req: Request,
    res: Response
  ) {

    try {

      const executions =
        await service.getExecutions();

      res.json({
        success: true,
        data: executions
      });

    } catch(error:any) {

      res.status(500).json({
        success:false,
        message:error.message
      });

    }
  }
}