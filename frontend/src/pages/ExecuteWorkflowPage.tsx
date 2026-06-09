// import { useState } from "react";
// import {useParams} from "react-router-dom";
// export default function ExecuteWorkflowPage() {

//     const { id } = useParams();
//   const [input, setInput] =
//     useState("");

//   return (

//     <div>

//       <h1>
//         Execute Workflow
//       </h1>

//       <textarea
//         value={input}
//         onChange={(e) =>
//           setInput(
//             e.target.value
//           )
//         }
//       />

//     </div>
//   );
// }

import { useState } from "react";
import { useParams } from "react-router-dom";
import { executeWorkflow } from "../api/workflowApi";

interface StepResult {
  stepId: string;
  stepType: string;
  output: any;
}

interface ExecutionResult {
  finalOutput: any;
  stepResults: StepResult[];
}

export default function ExecuteWorkflowPage() {
  const { id } = useParams();

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [execution, setExecution] =
    useState<ExecutionResult | null>(null);

  const [error, setError] =
    useState<string>("");

  const runWorkflow = async () => {
    try {
      if (!input.trim()) {
        setError("Input is required");
        return;
      }

      setError("");
      setLoading(true);

      const result =
        await executeWorkflow(
          id!,
          input
        );

      console.log(
        "Execution Result:",
        result
      );

      setExecution(result);

    } catch (err: any) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
        "Failed to execute workflow"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px"
      }}
    >
      <h1>
        Execute Workflow
      </h1>

      <div
        style={{
          marginBottom: "20px"
        }}
      >
        <label>
          Input
        </label>

        <textarea
          rows={5}
          value={input}
          onChange={(e) =>
            setInput(
              e.target.value
            )
          }
          placeholder="Enter workflow input..."
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "8px"
          }}
        />
      </div>

      <button
        onClick={runWorkflow}
        disabled={loading}
      >
        {
          loading
            ? "Running..."
            : "Run Workflow"
        }
      </button>

      {error && (
        <div
          style={{
            color: "red",
            marginTop: "15px"
          }}
        >
          {error}
        </div>
      )}

      {execution && (
        <div
          style={{
            marginTop: "30px"
          }}
        >
          <h2>
            Execution Results
          </h2>

          {execution.stepResults?.map(
            (
              step,
              index
            ) => (
              <div
                key={
                  step.stepId
                }
                style={{
                  border:
                    "1px solid #ddd",
                  padding:
                    "15px",
                  marginBottom:
                    "15px",
                  borderRadius:
                    "8px"
                }}
              >
                <h3>
                  Step {index + 1}
                </h3>

                <p>
                  <strong>
                    Type:
                  </strong>{" "}
                  {
                    step.stepType
                  }
                </p>

                <p>
                  <strong>
                    Output:
                  </strong>
                </p>

                <pre
                  style={{
                    background:
                      "#f5f5f5",
                    padding:
                      "10px",
                    overflow:
                      "auto"
                  }}
                >
                  {JSON.stringify(
                    step.output,
                    null,
                    2
                  )}
                </pre>
              </div>
            )
          )}

          <div
            style={{
              border:
                "2px solid green",
              padding:
                "20px",
              borderRadius:
                "8px"
            }}
          >
            <h2>
              Final Output
            </h2>

            <pre>
              {JSON.stringify(
                execution.finalOutput,
                null,
                2
              )}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}