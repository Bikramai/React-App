// import Button from "./components/Button";
// import { BsCalendarCheckFill } from "react-icons/bs";
// import Like from "./components/Like";
// import Message from "./Message";

import { useState } from "react";


function App() { 
  const [drink, setDrink] = useState({
    title: "Lemanade", 
    price: 5,
  });

  const handleClick = () => {  //updating Objects
    setDrink({ ...drink, price: 6 });
  }; 

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
