import { api } from "./api";

export const getWorkflows = async () => {
  const res = await api.get("/workflows");
  return res.data.data;
};

export const getWorkflowById = async (
  id: string
) => {
  const res =
    await api.get(`/workflows/${id}`);

  return res.data.data;
};

export const createWorkflow = async (
  payload: any
) => {
  const res =
    await api.post(
      "/workflows",
      payload
    );

  return res.data.data;
};

export const updateWorkflow = async (
  id: string,
  payload: any
) => {
  const res =
    await api.put(
      `/workflows/${id}`,
      payload
    );

  return res.data.data;
};

export const executeWorkflow =
  async (
    workflowId: string,
    input: string
  ) => {

    const response =
      await api.post(
        `/executions/${workflowId}/execute`,
        {
          input
        }
      );

    return response.data.data;
  };

  export const getExecutionHistory =
async () => {

  const response =
    await api.get(
      "/executions"
    );

  return response.data.data;
};