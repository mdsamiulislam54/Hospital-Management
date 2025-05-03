import React from "react";

const Faq = () => {
  return (
    <div>
        <div>
        <h1 class="text-3xl md:text-4xl font-bold text-white  my-8 text-center ">Frequently Asked Questions</h1>
        </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
    
    </div>
  );
};

export default Faq;
