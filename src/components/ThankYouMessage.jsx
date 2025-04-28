import React from "react";

const ThankYou = () => {
  return (
    <div className="flex flex-col  items-center text-center max-w-md w-full mx-auto">
      <img
        src="/src/assets/images/icon-thank-you.svg"
        alt="Thank You"
        className="mb-6"
      />
      <h1 className="text-sm font-bold mb-4 ">
        Thank You for your submission!
      </h1>
      <p className="text-cool-gray">
        We have received your information, and our team will get back to you
        shortly.
      </p>
    </div>
  );
};

export default ThankYou;
