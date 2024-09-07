// import Button from "./components/Button";
// import { BsCalendarCheckFill } from "react-icons/bs";
// import Like from "./components/Like";
// import Message from "./Message";

import { useState } from "react";

function App() {
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick = () => {
    // Add
    setTags([ ...tags, 'exciting']);

    // Remove
    setTags(tags.filter(tag => tag !== 'happy'));

    // Update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
