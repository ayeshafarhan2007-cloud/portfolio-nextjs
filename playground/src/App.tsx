import { useRef, useState } from "react";
import Modal from "./components/Modal";
import Tabs from "./components/Tabs";
import Disclosure from "./components/Disclosure";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>React Accessibility Playground</h1>

      <button
        ref={openButtonRef}
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          openButtonRef.current?.focus();
        }}
      >
        <p>This is my first accessible modal.</p>
      </Modal>

      <hr style={{ margin: "2rem 0" }} />

      <h2>Tabs Demo</h2>

      <Tabs />

      <hr style={{ margin: "2rem 0" }} />

      <h2>Disclosure Demo</h2>

      <Disclosure />
    </main>
  );
}

export default App;