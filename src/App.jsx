// App.js
import React, { useState } from "react";
import photo from './assets/photo.png';


const faqs = [
  {
    question: "How can I add a new expense?",
    answer: "You can add a new expense by clicking the 'Add Expense' button and filling out the required details, such as amount, category, and date.",
  },
  {
    question: "Can I set a budget for specific categories?",
    answer: "Yes, you can set budgets for specific categories in the 'Budget Settings' section to track your spending effectively.",
  },
  {
    question: "How do I edit or delete an expense?",
    answer: "Go to the 'Expense List' section, find the expense you want to edit or delete, and click the corresponding action button.",
  },
  {
    question: "Can I export my expense data?",
    answer: "Yes, you can export your expense data as a CSV file from the 'Reports' section for further analysis.",
  },
  {
    question: "How can I track recurring expenses?",
    answer: "You can set up recurring expenses in the 'Recurring Transactions' section to automatically add them to your expense list at the specified interval.",
  },
];


const App = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-300 flex items-center justify-center px-4 py-8">
      <div className="w-full h-auto pb-6 pt-6 max-w-[100%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 div">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative">
            <img
              src={photo}
              alt="FAQ illustration"
              className="w-[90%] sm:w-[100%] max-w-none rounded-lg"
            />
          </div>

          {/* Right Section: FAQ */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-6 h1">FAQ</h1>
            <div className="space-y-4 div1">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 pb-4"
                >
                  <button
                    className="flex justify-between items-center w-full text-left text-base font-semibold text-gray-700 focus:outline-none b1"
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                    <span
                      className={` b2 transform transition-transform ${
                        isOpen === index ? "rotate-90" : ""
                      }`}
                    >
                     ◀
                    </span>
                  </button>
                  {isOpen === index && (
                    <p className="mt-2 text-gray-600 text-sm  p1">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
