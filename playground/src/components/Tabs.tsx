import { useRef, useState } from "react";

const tabs = [
  {
    id: "home",
    label: "Home",
    content: "Welcome to the Home tab.",
  },
  {
    id: "profile",
    label: "Profile",
    content: "This is your Profile.",
  },
  {
    id: "settings",
    label: "Settings",
    content: "These are your Settings.",
  },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    let newIndex = activeTab;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      newIndex = (activeTab + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      newIndex = (activeTab - 1 + tabs.length) % tabs.length;
    } else {
      return;
    }

    setActiveTab(newIndex);
    tabRefs.current[newIndex]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Sample Tabs"
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            role="tab"
            id={`${tab.id}-tab`}
            aria-selected={activeTab === index}
            aria-controls={`${tab.id}-panel`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={handleKeyDown}
            style={{
              padding: "10px 18px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              cursor: "pointer",
              backgroundColor:
                activeTab === index ? "#2563eb" : "#f3f4f6",
              color: activeTab === index ? "white" : "black",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`${tabs[activeTab].id}-panel`}
        aria-labelledby={`${tabs[activeTab].id}-tab`}
        style={{
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "6px",
        }}
      >
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
}

export default Tabs;