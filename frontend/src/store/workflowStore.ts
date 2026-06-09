import { create } from "zustand";

import {
  getWorkflows
} from "../api/workflowApi";

interface Store {

  workflows: any[];

  fetchWorkflows: () => Promise<void>;
}

export const useWorkflowStore =
create<Store>((set,get) => ({

  workflows: [],

  fetchWorkflows: async () => {

    const data = await getWorkflows();
     console.log("Fetched workflows:", data);
    set({
      workflows: data
    });
     console.log("Store Data:", get().workflows);
  }
}));