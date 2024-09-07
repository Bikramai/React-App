// import Button from "./components/Button";
// import { BsCalendarCheckFill } from "react-icons/bs";
// import Like from "./components/Like";
// import Message from "./Message";

import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "Bikram",
    address: {
      city: "Cleveland",
      zipCode: 44310,
    },
  });

  const handleClick = () => {
    //updating Nested Objects
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 44322 },
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
