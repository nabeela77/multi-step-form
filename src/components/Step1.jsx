import React from "react";
import { useFormContext } from "../state.jsx";
import { useForm } from "react-hook-form";

const Step1 = () => {
  const { formData, setFormData, setCurrentStep } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });

    setCurrentStep(2);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary  sm:text-3xl">
        Personal Information
      </h1>
      <h2 className="text-gray-500 pb-1">
        Please provide your name, email address and phone number.
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="e.g.Stephen King"
            className="border rounded-md p-2 w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            placeholder="e.g.stephenking@lorem.com"
            className="border rounded-md p-2 w-full"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            {...register("phonenumber", {
              required: "Phone Number is required",
              pattern: {
                value:
                  /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?(\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4})$/,
                message: "Enter valid 10 digit Phone Number",
              },
            })}
            placeholder="e.g.+1 123 456 7890"
            className="border rounded-md p-2 w-full"
          />
          {errors.phonenumber && (
            <p className="text-red-500">{errors.phonenumber.message}</p>
          )}
        </div>
        <div className="flex whitespace-nowrap justify-end">
          <button
            type="submit"
            className="bg-PurplishBlue
              text-white rounded-md px-6 py-2"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
