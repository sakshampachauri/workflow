// import { useState }
// from "react";

// export default function WorkflowBuilderPage() {

//  const [name,setName] =
//  useState("");

//  const [
//    description,
//    setDescription
//  ] = useState("");

//  return (

//   <div>

//    <h1>
//      Create Workflow
//    </h1>

//    <input
//      value={name}
//      onChange={(e)=>
//        setName(
//          e.target.value
//        )
//      }
//      placeholder="Name"
//    />

//    <textarea
//      value={description}
//      onChange={(e)=>
//        setDescription(
//          e.target.value
//        )
//      }
//    />

//   </div>
//  );
// }


import { useEffect, useState }
from "react";

import { v4 }
from "uuid";

import { type Step }
from "../types/workflow";

import StepEditor
from "../components/StepEditor";
import {createWorkflow,getWorkflowById, updateWorkflow} from "../api/workflowApi";
import {
  useNavigate, useParams
}
from "react-router-dom";
export default function WorkflowBuilderPage() {
 const navigate =
  useNavigate();
  const [name,setName] =
  useState("");

  const { id } = useParams();
  useEffect(() => {

  if (!id) return;

  loadWorkflow();

}, [id]);
  const [
    description,
    setDescription
  ] = useState("");

  const [
    steps,
    setSteps
  ] = useState<Step[]>([]);

  const addStep = (
    type: string
  ) => {

    const newStep: Step = {

      id: v4(),

      order:
        steps.length + 1,

      type: type as any,

      config: {}
    };

    setSteps([
      ...steps,
      newStep
    ]);
  };

  const removeStep = (
    id: string
  ) => {

    const updated =
      steps.filter(
        step =>
          step.id !== id
      );

    setSteps(updated);
  };

  const updateStep = (
  updatedStep: Step
) => {

 setSteps(
   steps.map(step =>

     step.id ===
     updatedStep.id

       ? updatedStep

       : step
   )
 );
};

const loadWorkflow =
async () => {

  const workflow =
    await getWorkflowById(id!);

  setName(
    workflow.name
  );

  setDescription(
    workflow.description
  );

  setSteps(
    workflow.steps
  );
};

 const saveWorkflow = async () => {

  try {

    const payload = {
      name,
      description,
      steps
    };

    if (id) {

      await updateWorkflow(
        id,
        payload
      );

    } else {

      await createWorkflow(
        payload
      );

    }

    navigate("/");

  } catch(error) {

    console.error(error);

  }
};
  return (

    <div>

    <h1>
  {
    id
      ? "Edit Workflow"
      : "Create Workflow"
  }
</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>
          setName(
            e.target.value
          )
        }
      />

      <br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e)=>
          setDescription(
            e.target.value
          )
        }
      />

      <hr />

      <h2>
        Steps
      </h2>

      {steps.map(
        (
          step,
          index
        ) => (

          <StepEditor
            key={step.id}
            step={step}
            index={index}
            onRemove={
              removeStep
            }
             onUpdate={
               updateStep
               }
          />
        )
      )}

      <select
  onChange={(e)=>{

    if(
      e.target.value
    ){

      addStep(
        e.target.value
      );
    }

  }}
>

<option value="">
 Add Step
</option>

<option value="trim">
 Trim
</option>

<option value="uppercase">
 Uppercase
</option>

<option value="lowercase">
 Lowercase
</option>

<option value="delay">
 Delay
</option>

<option value="condition">
 Condition
</option>

<option value="mock-api">
 Mock API
</option>

<option value="output">
 Output
</option>

</select>

<button
  onClick={saveWorkflow}
>
  Save Workflow
</button>

    </div>
  );
}