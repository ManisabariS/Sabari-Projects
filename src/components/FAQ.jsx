import { useState } from 'react';
import './css/FAQ.css';

function FAQ() {
    const faqData = [
        {
            question: "What is DevLogics?",
            answer:
                "DevLogics is a UK-based software company that collaborates with startups, small and medium-sized businesses (SMBs), and enterprises to develop innovative digital products and strategies aimed at solving business challenges and delivering measurable results."
        },
        {
            question: "What services do you offer?",
            answer:
                "We offer a range of services including Web Development, DevOps, and AI/ML solutions designed to help your business grow and achieve its goals."
        },
        {
            question: "How can I contact you?",
            answer:
                "You can reach us via our website's contact form or email us directly at info@devlogics.com."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
         
            <div className="faq-main">
                <div className="faq-container">
                    <div className="faq-heading">
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <div className="faq-content">
                        {faqData.map((item, index) => (
                            <div className="faq-item" key={index}>
                                <h2 className="faq-question" onClick={() => toggleAnswer(index)}>
                                    {item.question}
                                    <span className="faq-icon">
                                        {openIndex === index ? "▲" : "▼"}
                                    </span>
                                </h2>
                                {openIndex === index && (
                                    <div className="faq-answer">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         
    );
}

export default FAQ;
