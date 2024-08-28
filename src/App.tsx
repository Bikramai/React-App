import Button from "./components/Button";
import { BsCalendarCheckFill } from "react-icons/bs";


function App() { 
  return (
    <div>
      <Button onClick={() => console.log('Clicked')}>My Dyanamic Button</Button>
      <BsCalendarCheckFill color="red" size="300"/>
    </div>
  );
}

export default App;
