import React from "react";
import { useFormContext } from "../state.jsx";

const Step4 = () => {
  const { formData, setCurrentStep } = useFormContext();

  const billing = ["Monthly", "Yearly"].includes(formData.billing)
    ? formData.billing
    : "Monthly";
  const billingSuffix = billing === "Monthly" ? "mo" : "yr";

  const planPrices = {
    Arcade: { Monthly: 9, Yearly: 90 },
    Advanced: { Monthly: 12, Yearly: 120 },
    Pro: { Monthly: 15, Yearly: 150 },
  };

  const addOnPrices = {
    onlineStorage: { Monthly: 1, Yearly: 10 },
    largerStorage: { Monthly: 2, Yearly: 20 },
    customizableProfile: { Monthly: 2, Yearly: 20 },
  };

  const planPrice = planPrices[formData.plan]?.[billing] || 0;

  const selectedAddOns = Object.entries(addOnPrices)
    .filter(([key]) => formData[key])
    .map(([key, priceObj]) => ({
      name: key,
      price: priceObj[billing],
    }));

  const addOnsTotal = selectedAddOns.reduce((sum, item) => sum + item.price, 0);
  const total = planPrice + addOnsTotal;

  const goBack = () => setCurrentStep(3);
  const handleConfirm = () => setCurrentStep(5);

  return (
    <div>
      <h1 className="text-3xl font-bold">Finishing up</h1>
      <h2 className="text-gray-500 pb-1">
        Double-check everything looks okay before confirming.
      </h2>

      <div className="bg-blue-100 rounded-md px-6 py-4 mt-4">
        <div className="flex justify-between items-center border-b border-cool-gray pb-3">
          <div>
            <p className="font-semibold text-marine-blue">
              {formData.plan} ({billing})
            </p>
            <button
              type="button"
              className="text-sm text-cool-gray underline hover:text-purplish-blue transition bg-transparent p-0 shadow-none border-none outline-none !bg-transparent"
              onClick={() => setCurrentStep(2)}
            >
              Change
            </button>
          </div>
          <p className="font-bold text-marine-blue">
            ${planPrice}/{billingSuffix}
          </p>
        </div>

        <ul className="mt-3 space-y-2">
          {selectedAddOns.map((addon) => (
            <li
              key={addon.name}
              className="flex justify-between text-sm text-cool-gray"
            >
              <span>{addon.name.replace(/([A-Z])/g, " $1")}</span>
              <span className="text-marine-blue">
                +${addon.price}/{billingSuffix}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center px-2 mt-4">
        <p className="text-cool-gray text-sm">
          Total (per {billing === "Monthly" ? "month" : "year"})
        </p>
        <p className="!text-indigo-500 font-bold text-lg">
          ${total}/{billingSuffix}
        </p>
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={goBack}
          className="!bg-white !text-gray-500 py-2 px-4 rounded border border-gray-300 hover:bg-gray-100"
        >
          Go Back
        </button>
        <button
          type="button"
          onClick={handleConfirm}
          className="!bg-indigo-600 text-white px-6 py-2 rounded"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;
