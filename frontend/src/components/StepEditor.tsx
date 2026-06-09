import { type Step } from "../types/workflow";

interface Props {

  step: Step;

  index: number;

  onRemove: (
    id: string
  ) => void;

    onUpdate: (
    step: Step
  ) => void;
}

export default function StepEditor({
  step,
  index,
  onRemove,
  onUpdate
}: Props) {

  return (

    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px"
      }}
    >

      <h4>
        Step {index + 1}
      </h4>

      <p>
        Type:
        {" "}
        {step.type}
      </p>
            {
  step.type === "delay" && (
    <div>

      <label>
        Duration (ms)
      </label>

      <input
        type="number"
        value={
          step.config?.duration || ""
        }
        onChange={(e) =>
          onUpdate({
            ...step,

            config: {
              ...step.config,

              duration: Number(
                e.target.value
              )
            }
          })
        }
      />

    </div>
  )
}

{
 step.type ===
 "condition" && (

 <>
   <input

     placeholder="Contains"

     value={
       step.config
         ?.value || ""
     }

     onChange={(e)=>

       onUpdate({

         ...step,

         config: {

           operator:
             "contains",

           value:
             e.target.value
         }
       })

     }

   />
 </>
 )
}

      <button
        onClick={() =>
          onRemove(step.id)
        }
      >
        Remove
      </button>
      



    </div>
    
  );
}