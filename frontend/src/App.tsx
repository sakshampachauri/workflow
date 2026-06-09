import {
  BrowserRouter,
  Routes,
  Route
}
  from "react-router-dom";

import WorkflowListPage
  from "./pages/WorkflowListPage";

import WorkflowBuilderPage from "./pages/WorkflowBuilderPage";
import ExecuteWorkflowPage from "./pages/ExecuteWorkflowPage";
import ExecutionHistoryPage from "./pages/ExecutionHistoryPage";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <WorkflowListPage />
          }
        />

        <Route
          path="/create"
          element={
            <WorkflowBuilderPage />
          }
        />

        <Route
          path="/workflow/:id"
          element={
            <WorkflowBuilderPage />
          }
        />

        <Route
          path="/execute/:id"
          element={
            <ExecuteWorkflowPage />
          }
        />
        <Route
          path="/executions"
          element={
            <ExecutionHistoryPage />
          }
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;