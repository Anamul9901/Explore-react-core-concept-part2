 
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';


function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked');
  }

  const handleFour = (num) =>{
    alert(num +3);
  }
 
  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>
      
      <Counter></Counter>


      {/*normally jevabe kortam: <button onclick = "handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('button 3 clicked')}}>Click 3</button>

      <button onClick={() => handleFour(2)}>Four</button>
    </>
  )
}

export default App
