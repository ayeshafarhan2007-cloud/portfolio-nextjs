import { useState } from "react";

function Disclosure() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="faq-content"
      >
        {isOpen ? "▼" : "▶"} What is React?
      </button>

      {isOpen && (
        <div id="faq-content">
          <p>
            React is a JavaScript library for building user interfaces.
          </p>
        </div>
      )}
    </div>
  );
}

export default Disclosure;