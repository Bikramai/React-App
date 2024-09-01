// import Button from "./components/Button";
// import { BsCalendarCheckFill } from "react-icons/bs";

import Like from "./components/Like";


function App() { 
  return (
    <div>
      <Like onClick={() => console.log('clicked')}/>
    </div>
  );
}

export default App;
