import React from "react";
const data = [
    {
      "id": 1,
      "question": "How can I book an appointment with a doctor?",
      "answer": "select the ' Doctor List' option, choose your health issue, pick a doctor, select a date & time, and confirm the booking."
    },
    {
      "id": 2,
      "question": "Can I visit the doctor offline after booking online?",
      "answer": "Yes! You can book your appointment online and visit the doctor at the hospital on your selected date."
    },
    {
      "id": 3,
      "question": "What if I don’t know which doctor to visit?",
      "answer": "Use our ‘Health Assistant’ feature to describe your symptoms — our system will suggest the most suitable doctors for you."
    },
    {
      "id": 4,
      "question": "How can I check a doctor’s profile?",
      "answer": "Go to the 'Doctor List' section and click on any doctor’s card to view their profile, experience, degrees, and patient reviews."
    },
    {
      "id": 5,
      "question": "How can I cancel a booked appointment?",
      "answer": "Go to the ‘My Appointments’ section in your profile, find your appointment, and click on the ‘Cancel’ button next to it."
    },
    {
      "id": 6,
      "question": "Do you support online payments?",
      "answer": "Yes, we support payments via Bkash, Nagad, Rocket, and card payments."
    },
    {
      "id": 7,
      "question": "Do I need an account to book an appointment?",
      "answer": "Yes, for security and record purposes, you need to create an account — it only takes a minute to register."
    },
    {
      "id": 8,
      "question": "How much does a doctor charge for a consultation?",
      "answer": "You can check each doctor’s consultation fee and other charges from their profile page."
    },
    {
      "id": 9,
      "question": "Will I get my medical reports online?",
      "answer": "Yes! All your reports will be available under the ‘My Reports’ section once they’re ready — you’ll also get SMS and email notifications."
    },
    {
      "id": 10,
      "question": "Is there any emergency medical support available?",
      "answer": "Yes, in emergencies, click on the ‘Emergency Help’ option to get our helpline number and immediate support."
    }
  ]
  
const Faq = () => {
  return (
    <div>
        <div>
        <h1 class="text-3xl md:text-4xl font-bold text-white  my-8 text-center ">Frequently Asked Questions</h1>
        </div>
        {
            data.map((item)=><div className="collapse collapse-plus 
            border-b mb-2 border-white
            ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold text-white">
            {item.question}
            </div>
            <div className="collapse-content text-sm text-white">
          {item.answer}
            </div>
          </div>)
        }
      
    
    </div>
  );
};

export default Faq;
