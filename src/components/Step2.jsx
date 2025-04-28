import React, { useEffect, useState } from "react";
import { useFormContext } from "../state.jsx";
import { useForm } from "react-hook-form";

const Step2 = () => {
  const { formData, setFormData, setCurrentStep } = useFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: { plan: formData.plan },
  });
  const [billing, setBilling] = useState(formData.billing);

  useEffect(() => {
    setValue("plan", formData.plan);
    setValue("billing", billing);
  }, [formData.plan, billing, setValue]);
  const onSubmit = (data) => {
    setFormData({ ...formData, ...data, billing });
    setCurrentStep(3);
  };

  const handleRadioChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      plan: event.target.value,
      billing,
    }));
  };

  const handleToggleChange = () => {
    const newBilling = billing === "Monthly" ? "Yearly" : "Monthly";
    setBilling(newBilling);
    setFormData((prevData) => ({
      ...prevData,
      billing: newBilling,
    }));
  };

  const goBack = () => {
    setCurrentStep(1);
  };

  const getBorderClass = (planName) => {
    return formData.plan === planName ? "border-blue-500" : "border-gray-300";
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <h1 className="text-3xl font-bold">Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        {/* Grid layout for the plans */}
        <div className="grid gap-3 pt-3 sm:grid-cols-3 sm:gap-4 sm:pt-8">
          {/* Arcade Plan */}
          <div
            className={`p-4 border rounded-lg text-center relative ${getBorderClass(
              "Arcade"
            )}`}
          >
            <label>
              <input
                type="radio"
                value="Arcade"
                {...register("plan", { required: "Please select a plan" })}
                onChange={handleRadioChange}
                checked={formData.plan === "Arcade"}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="radio-custom">
                <img src="/src/assets/images/icon-arcade.svg" />
                <h3 className="text-lg font-semibold">Arcade</h3>
                <p>{billing === "Monthly" ? "$9/mo" : "$90/yr"}</p>
                <span class="text-md  text-xs font-bold ">
                  {formData.billing === "Yearly" ? "2 months free" : ""}
                </span>
              </div>
            </label>
          </div>

          {/* Advanced Plan */}
          <div
            className={`p-4 border rounded-lg text-center relative ${getBorderClass(
              "Advanced"
            )}`}
          >
            <label>
              <input
                type="radio"
                value="Advanced"
                {...register("plan", { required: "Please select a plan" })}
                onChange={handleRadioChange}
                checked={formData.plan === "Advanced"}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="radio-custom">
                <img src="/src/assets/images/icon-advanced.svg" />
                <h3 className="text-lg font-semibold">Advanced</h3>
                <p>{billing === "Monthly" ? "$12/mo" : "$120/yr"}</p>
                <span class="text-md  text-xs font-bold ">
                  {formData.billing === "Yearly" ? "2 months free" : ""}
                </span>
              </div>
            </label>
          </div>

          {/* Pro Plan */}
          <div
            className={`p-4 border rounded-lg text-center relative ${getBorderClass(
              "Pro"
            )}`}
          >
            <label>
              <input
                type="radio"
                value="Pro"
                {...register("plan", { required: "Please select a plan" })}
                onChange={handleRadioChange}
                checked={formData.plan === "Pro"}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="radio-custom">
                <img src="/src/assets/images/icon-pro.svg" />
                <h3 className="text-lg font-semibold">Pro</h3>
                <p>{billing === "Monthly" ? "$15/mo" : "$150/yr"}</p>
                <span class="text-md  text-xs font-bold ">
                  {formData.billing === "Yearly" ? "2 months free" : ""}
                </span>
              </div>
            </label>
          </div>
        </div>
        {/* Toggle Switch for Monthly/Yearly Billing */}
        <div className="flex items-center space-x-4 pt-2 bg-blue-100 rounded-sm justify-between px-1 py-1 mt-2">
          {/* Monthly Label */}
          <span
            className={`text-sm ${
              billing === "Monthly" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            Monthly
          </span>

          {/* Toggle container */}
          <div
            onClick={handleToggleChange}
            className={`relative inline-flex items-center cursor-pointer w-16 h-8 rounded-full transition-colors duration-300 ${
              billing === "Monthly" ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            {/* Slider background */}
            <div className="absolute inset-0 w-full h-full bg-indigo-950 rounded-full"></div>

            {/* Slider handle */}
            <div
              className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                billing === "Monthly"
                  ? "transform translate-x-0"
                  : "transform translate-x-8"
              }`}
            ></div>
          </div>

          {/* Yearly Label */}
          <span
            className={`text-sm ${
              billing === "Yearly" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            Yearly
          </span>
        </div>

        {/* Error Message for Plan */}
        {errors.plan && <p className="text-red-500">{errors.plan.message}</p>}
        {/* Submit Button */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={goBack} // Go back to Step 1
            className="!bg-white !text-gray-500 !hover:text-gray-700 py-2 px-4 !rounded !border"
          >
            Go Back
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
