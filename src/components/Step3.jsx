import React, { useEffect } from "react";
import { useFormContext } from "../state.jsx";
import { useForm } from "react-hook-form";

const Step3 = () => {
  const { formData, setFormData, setCurrentStep } = useFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      formData,
    },
  });
  console.log("form data", formData);

  useEffect(() => {
    setValue("onlineStorage", formData.onlineStorage);
    setValue("largerStorage", formData.largerStorage);
    setValue("customizableProfile", formData.customizableProfile);
  }, [formData, setValue]);

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(4);
  };

  const goBack = () => {
    setCurrentStep(2);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <h1 className="text-3xl font-bold">Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>

        {/* Grid layout for the add-ons */}
        <div className="mb-4">
          {/* Online Storage */}
          <div className="p-4 mb-4 border rounded-lg text-center">
            <label className="flex flex-col items-center justify-center w-full">
              <input
                type="checkbox"
                id="onlineStorage"
                {...register("onlineStorage")}
                className="mr-2 border-2 border-gray-300 rounded-md w-16 h-8 mb-2" // Rectangular checkbox styling
              />
              <h3 className="text-lg font-semibold">Online Service</h3>
              <p className="text-sm text-center">
                Access to multiplayer games {""}
              </p>
              <div className="text-indigo-500">
                {" "}
                {formData.billing === "Monthly" ? "$1/month" : "$10/year"}
              </div>
            </label>
          </div>

          {/* Larger Storage */}
          <div className="p-4 mb-4 border rounded-lg text-center">
            <label className="flex flex-col items-center justify-center w-full">
              <input
                type="checkbox"
                id="largerStorage"
                {...register("largerStorage")}
                className="mr-2 border-2 border-gray-300 rounded-md w-16 h-8 mb-2" // Rectangular checkbox styling
              />
              <h3 className="text-lg font-semibold">Larger Storage</h3>
              <p className="text-sm text-center">
                Extra 1TB cloud storage {""}
              </p>
              <div className="text-indigo-500">
                {" "}
                {formData.billing === "Monthly" ? "$2/month" : "$20/year"}
              </div>
            </label>
          </div>

          {/* Customizable Profile */}
          <div className="p-4 mb-4 border rounded-lg text-center">
            <label className="flex flex-col items-center justify-center w-full">
              <input
                type="checkbox"
                id="customizableProfile"
                {...register("customizableProfile")}
                className="mr-2 border-2 border-gray-300 rounded-md w-16 h-8 mb-2" // Rectangular checkbox styling
              />
              <h3 className="text-lg font-semibold">Customizable Profile</h3>
              <p className="text-sm text-center">
                Custom themes on your profile {""}
              </p>
              <div className="text-indigo-500">
                {" "}
                {formData.billing === "Monthly" ? "$2/month" : "$20/year"}
              </div>
            </label>
          </div>
        </div>

        {errors.onlineStorage && (
          <p className="text-red-500">Please select at least one add-on</p>
        )}

        {/* Submit Button */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={goBack} // Go back to Step 1
            className="!bg-white !text-gray-500 py-2 px-4 rounded border border-gray-300 hover:bg-gray-100"
          >
            Go Back
          </button>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
