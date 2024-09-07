// import Button from "./components/Button";
// import { BsCalendarCheckFill } from "react-icons/bs";
// import Like from "./components/Like";
// import Message from "./Message";

import { useState } from "react";
import produce from 'immer';

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // Add
    // setBugs(bugs.map((bug) => (bug.id ? { ...bug, fixed: true } : bug)));

    // using immer
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if (bug) bug.fixed = true;
    }))
  };

  return (
    <div>
      {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New'}</p>)}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
