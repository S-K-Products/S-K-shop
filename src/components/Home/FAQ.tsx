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
      question: "How do I place an order for eggs?",
      answer:
        "You can place an order for eggs by visiting our 'Shop' section and selecting the type and quantity of eggs you'd like to purchase.",
    },
    {
      id: 2,
      question: "What types of eggs do you supply?",
      answer:
        "We offer a variety of eggs, including organic, free-range, and premium farm eggs. All our eggs are fresh and sourced from local farms.",
    },
    {
      id: 3,
      question: "How can I check the freshness of your eggs?",
      answer:
        "Our eggs are always fresh, and we provide clear packaging dates for every batch. Additionally, we ensure they are stored in optimal conditions before delivery.",
    },
    {
      id: 4,
      question: "Do you offer egg delivery services?",
      answer:
        "Yes, we provide home delivery services for fresh eggs. You can choose your preferred delivery time during checkout.",
    },
    {
      id: 5,
      question: "What is your refund or exchange policy?",
      answer:
        "We offer a 100% satisfaction guarantee. If you are not happy with your eggs, you can return them within 7 days for a full refund or exchange.",
    },
    {
      id: 6,
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team through the contact form on our website or by emailing support@eggsupplier.com. We are available 24/7 to assist you.",
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
