import React from "react";
import FooterLand from "../LandingPage/FooterLand/FooterLand";
import HeaderLand from "../LandingPage/HeaderLand/HeaderLand";

const FAQ = () => {
  return (
    <>
      <HeaderLand></HeaderLand>
      <div className="bg-gray-100 min-h-screen flex justify-center mt-7 py-10 px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Frequently Asked Questions - FAQs
            </h1>
          </div>

          <div className="mt-6 space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-white shadow-md p-4 rounded-lg"
              >
                <input type="checkbox" />
                <div className="collapse-title text-xl font-semibold text-gray-800">
                  {faq.question}
                </div>
                <div className="collapse-content text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterLand></FooterLand>
    </>
  );
};

const faqData = [
  {
    question: "How do the email courses work?",
    answer:
      "After you register using your email address, you will receive a free introductory lesson. Reply to your introductory lesson with your answers. After we receive your answers, you will be matched with your personal English teacher. Your teacher will grade your tests and send you new tests.",
  },
  {
    question: "What if I don't have an email address?",
    answer:
      "You can sign up for a free email from providers like Gmail, Yahoo!, Hotmail, etc.",
  },
  {
    question: "How much does this cost?",
    answer: "Absolutely nothing.",
  },
  {
    question: "Will these lessons help me prepare for the TOEFL examination?",
    answer:
      "Yes, World English Institute courses are designed to help students improve their English skills with the TOEFL examination in mind.",
  },
  {
    question: "How long do the lessons take to complete?",
    answer:
      "The duration varies depending on the student's pace and learning speed.",
  },
];

export default FAQ;
