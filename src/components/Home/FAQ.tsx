"use client";
import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import styles from "../../styles/Home/FAQ.module.css"; // Import your CSS module

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQComponent() {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Explicitly typed as string
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking on the 'Sign Up' button and following the registration process.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      id: 3,
      question: "How can I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
    },
    {
      id: 4,
      question: "Is there a mobile app available?",
      answer: "Yes, our mobile app is available for both iOS and Android devices.",
    },
    {
      id: 5,
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee for all our premium plans.",
    },
    {
      id: 6,
      question: "How do I contact customer support?",
      answer:
        "You can reach our support team 24/7 through the contact form or by emailing support@example.com.",
    },
  ];

  const toggleItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.faqTitle}>FAQ</h1>
      
      {/* Search input */}
      <div className={styles.searchContainer}>
        <Search className={styles.searchIcon} />
        <input
          type="search"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* Accordion for FAQs */}
      <div className={styles.faqList}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((item) => (
            <div key={item.id} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleItem(item.id)}
              >
                <span>{item.question}</span>
                {expandedItems.includes(item.id) ? (
                  <ChevronUp className={styles.faqChevron} />
                ) : (
                  <ChevronDown className={styles.faqChevron} />
                )}
              </button>

              {expandedItems.includes(item.id) && (
                <div className={styles.faqAnswer}>{item.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div className={styles.noFaqs}>No FAQs found matching your search.</div>
        )}
      </div>
    </div>
  );
}
