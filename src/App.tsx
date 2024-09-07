// import Button from "./components/Button";
// import { BsCalendarCheckFill } from "react-icons/bs";
// import Like from "./components/Like";
// import Message from "./Message";

import { useState } from "react";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // Add
    setBugs(bugs.map((bug) => (bug.id ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
