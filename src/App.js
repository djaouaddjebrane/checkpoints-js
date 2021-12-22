import PhotoProfil from './component/profil/ProfilePhoto';
import './App.css';
import FullName from './component/profil/FullName';
import Address from './component/profil/Address';


function App() {
  return (<>
    <h1 style={{backgroundColor:'white',margin:'0'}}>My Profil </h1>
    <div className="Profil">
      < PhotoProfil /> 
      <div className='rest'>
      <FullName/>
      <Address/>
      </div>
      
    </div>
    
    </>
  );
}

export default App;
