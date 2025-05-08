import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import ThankYou from "./components/ThankYouMessage.jsx";
import { FormProvider, useFormContext } from "./state.jsx";

const App = () => {
  return (
    <FormProvider>
      <div className="grid min-h-[100svh] items-center bg-muted-foreground">
        <div className="app flex flex-auto">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="form-content w-3/4 flex items-between justify-between pt-10 px-4">
            <FormNavigation />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};
const FormNavigation = () => {
  const { currentStep } = useFormContext();
  console.log(currentStep);

  return (
    <>
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
      {currentStep === 4 && <Step4 />}
      {currentStep === 5 && <ThankYou />}
    </>
  );
};
export default App;
// import React from "react";
// import SideBar from "./components/SideBar";
// import Step1 from "./components/Step1";
// import Step2 from "./components/Step2";
// import Step3 from "./components/Step3";
// import Step4 from "./components/Step4";
// import ThankYou from "./components/ThankYouMessage.jsx";
// import { FormProvider, useFormContext } from "./state.jsx";

// const App = () => {
//   return (
//     <FormProvider>
//       <div className="flex min-h-screen bg-white p-8 gap-6">
//         {/* Sidebar */}
//         <div className="w-[275px]">
//           <SideBar />
//         </div>

//         {/* Main content */}
//         <div className="flex-1 flex items-center justify-center">
//           <FormNavigation />
//         </div>
//       </div>
//     </FormProvider>
//   );
// };

// const FormNavigation = () => {
//   const { currentStep } = useFormContext();

//   return (
//     <>
//       {currentStep === 1 && <Step1 />}
//       {currentStep === 2 && <Step2 />}
//       {currentStep === 3 && <Step3 />}
//       {currentStep === 4 && <Step4 />}
//       {currentStep === 5 && <ThankYou />}
//     </>
//   );
// };

// export default App;
