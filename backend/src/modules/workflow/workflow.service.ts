import { Workflow } from "./workflow.model";

export class WorkflowService {
  async create(data: any) {
    return Workflow.create(data);
  }

  async getAll() {
    return Workflow.find().sort({
      createdAt: -1
    });
  }

  async getById(id: string) {
    return Workflow.findById(id);
  }

  async update(
    id: string,
    data: any
  ) {
    return Workflow.findByIdAndUpdate(
      id,
      data,
      {
        new: true
      }
    );
  }

  async delete(id: string) {
    return Workflow.findByIdAndDelete(id);
  }
}