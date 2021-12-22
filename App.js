import './App.css';
import tree from './tree.png'
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vw" }}>
       <h1 className='title red'>Your name here</h1> 
       {"\n"} 
       <img src={tree} alt ="tree"/>
       {"\n"}
       <img src='/sea.png' alt='sea' />
      </div>
      <video src='/00006.mp4' width="320" height="240" controls="controls"  />
    </div>
  );
}

export default App;
