export interface ContactFAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const contactFaqs: ContactFAQItem[] = [
  {
    id: "01",
    question: "Who is eligible to participate in Sustainathon 2.0?",
    answer: "Sustainathon 2.0 is open to undergraduate and postgraduate students, researchers, and early-stage innovators from any recognized institution or university across the country. Interdisciplinary teams with complementary skills (design, engineering, business, domain science) are strongly encouraged.",
    category: "Eligibility"
  },
  {
    id: "02",
    question: "What is the recommended team size?",
    answer: "Teams must consist of 2 to 4 members. You can also participate if you have team members from different colleges or universities.",
    category: "Teams"
  },
  {
    id: "03",
    question: "Is there any registration fee to participate?",
    answer: "No, participation in Sustainathon 2.0 is completely free of charge. We believe impactful innovation should be accessible to all passionate problem solvers.",
    category: "Registration"
  },
  {
    id: "04",
    question: "How will the rounds and screening process work?",
    answer: "The hackathon begins with an online idea submission round, followed by an online technical screening and mentorship phase. Selected finalist teams will be invited to Sharda University, Greater Noida for the 24-hour offline Grand Finale.",
    category: "Format"
  },
  {
    id: "05",
    question: "Will accommodation and meals be provided for the Grand Finale?",
    answer: "Yes, shortlisted finalist teams attending the Grand Finale on the Sharda University campus will be provided with meals, workspace access, high-speed Wi-Fi, and designated resting areas throughout the offline hackathon period.",
    category: "Logistics"
  },
  {
    id: "06",
    question: "Can we submit a project that we have already started working on?",
    answer: "All core coding and implementation for your project must be developed during the designated hackathon timeline. However, you are free to build on open-source libraries, APIs, and pre-existing conceptual research.",
    category: "Rules"
  }
];
