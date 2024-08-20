import Button from "./components/Button";


function App() { 
  return (
    <div>
      <Button onClick={() => console.log('Clicked')}>My Dyanamic Button</Button>
    </div>
  );
}

export default App;
