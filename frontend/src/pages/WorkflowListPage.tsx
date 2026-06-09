// import { useEffect }
// from "react";

// import {
//   Link
// } from "react-router-dom";

// import {
//   useWorkflowStore
// }
// from "../store/workflowStore";

// export default function WorkflowListPage() {

//   const {
//     workflows,
//     fetchWorkflows
//   } = useWorkflowStore();

//   useEffect(() => {

//     fetchWorkflows();

//   }, []);

//   return (
//     <div>

//       <h1>
//         Workflows
//       </h1>

//       <Link to="/create">
//         Create Workflow
//       </Link>

//       {workflows.map(
//         workflow => (

//           <div
//             key={workflow._id}
//           >
//             <h3>
//               {workflow.name}
//             </h3>

//             <p>
//               {workflow.description}
//             </p>

//             <Link
//               to={`/workflow/${workflow._id}`}
//             >
//               Edit
//             </Link>

//           </div>
//         )
//       )}

//     </div>
//   );
// }


import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useWorkflowStore } from "../store/workflowStore";

export default function WorkflowListPage() {

    //   const {
    //     workflows,
    //     fetchWorkflows
    //   } = useWorkflowStore();
    const workflows = useWorkflowStore(
        state => state.workflows
    );

    const fetchWorkflows = useWorkflowStore(
        state => state.fetchWorkflows
    );

    useEffect(() => {
        // console.log("Fetching workflows...", workflows);
        fetchWorkflows();
    }, []);

    useEffect(() => {
        console.log(
            "Workflows changed:",
            workflows
        );
    }, [workflows]);

    return (
        <div>

            <h1>
                Workflow Automation Platform
            </h1>

            {/* <Link to="/create">
                Create Workflow
            </Link> */}
            <div>

                <Link to="/create">
                    Create Workflow
                </Link>

                {" | "}

                <Link to="/executions">
                    Execution History
                </Link>

            </div>

            <hr />

            {
                workflows.map(workflow => (

                    <div
                        key={workflow._id}
                        style={{
                            border: "1px solid #ddd",
                            padding: "10px",
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >

                        <h3>
                            {workflow.name}
                        </h3>

                        <p>
                            {workflow.description}
                        </p>

                        <p>
                            Steps:
                            {" "}
                            {workflow.steps.length}
                        </p>

                        <Link
                            to={`/workflow/${workflow._id}`}
                        >
                            Edit
                        </Link>
                        <span> </span>
                        <Link
                            to={`/execute/${workflow._id}`}
                        >
                            Execute
                        </Link>
                    </div>

                ))
            }

        </div>
    );
}