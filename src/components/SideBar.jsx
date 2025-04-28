import React from "react";
import { useFormContext } from "../state.jsx";

const SideBar = () => {
  const { currentStep, setCurrentStep, completedSteps } = useFormContext();

  // Check if a step is completed (true) or not (false)
  const isStepCompleted = (step) => completedSteps?.[step] ?? false;

  const handleStepClick = (step) => {
    // Allow navigation to any previous step, and any completed step
    if (step <= currentStep || isStepCompleted(step)) {
      setCurrentStep(step); // Navigate to the selected step
    } else {
      console.log("This step is not completed yet.");
    }
  };

  return (
    <div
      className="sidebar w-full rounded-md text-white p-6 min-h-screen"
      style={{
        backgroundImage: "url('/src/assets/images/bg-sidebar-desktop.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <ul className="space-y-4">
        <li className="px-2 py-1">
          <div
            className={`whitespace-nowrap rounded-md px-4
             py-2
             text-sm transition-colors disabled:pointer-events-none 
            disabled:opacity-50 hover:bg-muted-foreground/20 w-full 
            justify-normal justify-items-start px-0 py-0 uppercase sm:grid sm:grid-cols-[max-content_auto] 
            sm:grid-rows-[max-content_auto] sm:gap-x-4 sm:px-4 sm:py-2 ${
              currentStep === 1 ? " text-white " : ""
            }`}
            onClick={() => handleStepClick(1)}
            style={{
              cursor:
                isStepCompleted(1) || currentStep === 1
                  ? "pointer"
                  : "not-allowed",
              opacity: isStepCompleted(1) || currentStep === 1 ? 1 : 0.5,
            }}
          >
            <span
              className={`row-span-full grid aspect-square h-8 
            place-items-center rounded-full font-bold border text-primary-foreground    ${
              currentStep === 1
                ? "bg-[#bfe2fd] text-[#02295a] border-transparent"
                : "border-white"
            }`}
            >
              1
            </span>
            <p className="text-xs text-primary-foreground sm:block">Step 1</p>
            <p className=" text-muted-foreground sm:block"> Your Info</p>
          </div>
        </li>

        <li className="px-2 py-1">
          <div
            className={`whitespace-nowrap rounded-md px-4
            py-2
            text-sm transition-colors disabled:pointer-events-none 
           disabled:opacity-50 hover:bg-muted-foreground/20 w-full 
           justify-normal justify-items-start px-0 py-0 uppercase sm:grid sm:grid-cols-[max-content_auto] 
           sm:grid-rows-[max-content_auto] sm:gap-x-4 sm:px-4 sm:py-2${
             currentStep === 2 ? " text-white " : ""
           }`}
            onClick={() => handleStepClick(2)}
            style={{
              cursor:
                isStepCompleted(2) || currentStep === 2
                  ? "pointer"
                  : "not-allowed",
              opacity: isStepCompleted(2) || currentStep === 2 ? 1 : 0.5,
            }}
          >
            <span
              className={`row-span-full grid aspect-square h-8 
                    place-items-center rounded-full font-bold border text-primary-foreground    ${
                      currentStep === 2
                        ? "bg-[#bfe2fd] text-[#02295a] border-transparent"
                        : "border-white"
                    }`}
            >
              2
            </span>
            <p className="text-xs text-primary-foreground sm:block">Step 2</p>
            <p className=" text-muted-foreground sm:block">Select Plan</p>
          </div>
        </li>

        <li className="px-2 py-1">
          <div
            className={` whitespace-nowrap rounded-md px-4
            py-2
            text-sm transition-colors disabled:pointer-events-none 
           disabled:opacity-50 hover:bg-muted-foreground/20 w-full 
           justify-normal justify-items-start px-0 py-0 uppercase sm:grid sm:grid-cols-[max-content_auto] 
           sm:grid-rows-[max-content_auto] sm:gap-x-4 sm:px-4 sm:py-2${
             currentStep === 3 ? " text-white " : ""
           }`}
            onClick={() => handleStepClick(3)}
            style={{
              cursor:
                isStepCompleted(3) || currentStep === 3
                  ? "pointer"
                  : "not-allowed",
              opacity: isStepCompleted(3) || currentStep === 3 ? 1 : 0.5,
            }}
          >
            <span
              className={`row-span-full grid aspect-square h-8 
                    place-items-center rounded-full font-bold border text-primary-foreground    ${
                      currentStep === 3
                        ? "bg-[#bfe2fd] text-[#02295a] border-transparent"
                        : "border-white"
                    }`}
            >
              3
            </span>
            <p className="text-xs text-primary-foreground sm:block">Step 3</p>
            <p className=" text-muted-foreground sm:block">Add-Ons</p>
          </div>
        </li>

        <li className="px-2 py-1">
          <div
            className={`whitespace-nowrap rounded-md px-4
            py-2
            text-sm transition-colors disabled:pointer-events-none 
           disabled:opacity-50 hover:bg-muted-foreground/20 w-full 
           justify-normal justify-items-start px-0 py-0 uppercase sm:grid sm:grid-cols-[max-content_auto] 
           sm:grid-rows-[max-content_auto] sm:gap-x-4 sm:px-4 sm:py-2 ${
             currentStep === 4 ? " text-white " : ""
           }`}
            onClick={() => handleStepClick(4)}
            style={{
              cursor:
                isStepCompleted(4) || currentStep === 4
                  ? "pointer"
                  : "not-allowed",
              opacity: isStepCompleted(4) || currentStep === 4 ? 1 : 0.5,
            }}
          >
            <span
              className={`row-span-full grid aspect-square h-8 
                    place-items-center rounded-full font-bold border text-primary-foreground    ${
                      currentStep === 4
                        ? "bg-[#bfe2fd] text-[#02295a] border-transparent"
                        : "border-white"
                    }`}
            >
              4
            </span>
            <p className="text-xs text-primary-foreground sm:block">Step 4</p>
            <p className=" text-muted-foreground sm:block">Summary</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
