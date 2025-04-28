import React, { createContext, useContext, useState } from "react";

// Create context for the form data and step
const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);
export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    billing: "",
    onlineStorage: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const [completedSteps, setCompletedSteps] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      plan: "Arcade",
      billing: "Monthly",
      onlineStorage: false,
      largerStorage: false,
      customizableProfile: false,
    });
    setCurrentStep(1);
    setCompletedSteps({
      1: false,
      2: false,
      3: false,
      4: false,
    });
  };
  const markStepAsCompleted = (step) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [step]: true,
    }));
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        formData,
        setFormData,
        resetForm,
        completedSteps, // Add completedSteps to context
        markStepAsCompleted, // Add function to mark steps as completed
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
