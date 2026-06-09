import {
  useEffect,
  useState
} from "react";

import {
  getExecutionHistory
}
from "../api/workflowApi";

export default function ExecutionHistoryPage() {

  const [
    executions,
    setExecutions
  ] = useState<any[]>([]);

  const [
    loading,
    setLoading
  ] = useState(true);

  useEffect(() => {

    loadExecutions();

  }, []);

  const loadExecutions =
  async () => {

    try {

      const data =
        await getExecutionHistory();

      setExecutions(data);

    } catch(error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  if(loading){

    return (
      <div>
        Loading...
      </div>
    );
  }

  return (

    <div
      style={{
        maxWidth:"1000px",
        margin:"0 auto",
        padding:"20px"
      }}
    >

      <h1>
        Execution History
      </h1>

      {
        executions.length === 0 && (

          <p>
            No executions found
          </p>

        )
      }

      {
        executions.map(
          execution => (

            <div
              key={
                execution._id
              }
              style={{
                border:
                  "1px solid #ddd",
                padding:
                  "20px",
                marginBottom:
                  "20px"
              }}
            >

              <h3>
                Workflow:
                {" "}
                {
                  execution
                    .workflowId
                    ?.name
                }
              </h3>

              <p>
                Status:
                {" "}
                {
                  execution.status
                }
              </p>

              <p>
                Created:
                {" "}
                {
                  new Date(
                    execution.createdAt
                  ).toLocaleString()
                }
              </p>

              <h4>
                Final Output
              </h4>

              <pre>
                {
                  JSON.stringify(
                    execution.finalOutput,
                    null,
                    2
                  )
                }
              </pre>

              <h4>
                Step Results
              </h4>

              {
                execution.stepResults?.map(
                  (
                    step:any,
                    index:number
                  ) => (

                    <div
                      key={index}
                      style={{
                        marginBottom:
                          "10px"
                      }}
                    >

                      <strong>
                        {
                          step.stepType
                        }
                      </strong>

                      <pre>
                        {
                          JSON.stringify(
                            step.output,
                            null,
                            2
                          )
                        }
                      </pre>

                    </div>

                  )
                )
              }

            </div>

          )
        )
      }

    </div>

  );
}