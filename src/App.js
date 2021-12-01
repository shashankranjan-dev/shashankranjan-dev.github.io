import './App.css';
import Homepage from './Homepage/Homepage';
import sssss from './image/sssss.jpg';



function App() {
  return (
    <div className="App">
      <Homepage />
      <img src={sssss} style={{width:"-webkit-fill-available" }} className="" alt="my-photo"/>
   
    </div>
  );
}

export default App;
