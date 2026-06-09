import { Request, Response } from "express";
import { WorkflowService } from "./workflow.service";
import { CreateWorkflowSchema } from "./workflow.validation";

const workflowService =
  new WorkflowService();

export class WorkflowController {

  async create(
    req: Request,
    res: Response
  ) {
    try {

      const payload =
        CreateWorkflowSchema.parse(
          req.body
        );

      const workflow =
        await workflowService.create(
          payload
        );

      res.status(201).json({
        success: true,
        data: workflow
      });

    } catch (error: any) {

      res.status(400).json({
        success: false,
        message: error.message
      });

    }
  }

  async getAll(
    req: Request,
    res: Response
  ) {

    const workflows =
      await workflowService.getAll();

    res.json({
      success: true,
      data: workflows
    });
  }

  async getById(
    req: Request,
    res: Response
  ) {

    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    const workflow =
      await workflowService.getById(
        id
      );

    if (!workflow) {
      return res.status(404).json({
        success: false,
        message: "Workflow not found"
      });
    }

    res.json({
      success: true,
      data: workflow
    });
  }

  async update(
    req: Request,
    res: Response
  ) {

    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    const workflow =
      await workflowService.update(
        id,
        req.body
      );

    res.json({
      success: true,
      data: workflow
    });
  }

  async delete(
    req: Request,
    res: Response
  ) {

    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    await workflowService.delete(
      id
    );

    res.json({
      success: true
    });
  }
}