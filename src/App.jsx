import Home from './assets/home.png';
import Trend from './assets/trend.png';
import Logo from './assets/logo.png';
import Log from './assets/log.png';
import Navbar from './components/Navbar.jsx';
import Sidebar from "./components/Sidebar.jsx";
import Thumbnail from './components/Thumbnail.jsx';

function App() {
  return (
    <>
    
       <Navbar logo={Home} />
      
      



   
      <div className="sb">
 
      <div className="new">
            
             <div> <Thumbnail thumbnail={Logo} title={"November Rain"} description={"Blackmore"} /></div>
             <div>  <Thumbnail thumbnail={Log} title={"Mandom"} description={"Ringo Roadgain"} /></div>
             <div>  <Thumbnail thumbnail={Logo} title={"November Rain"} description={"Blackmore"} /></div>
              <div> <Thumbnail thumbnail={Log} title={"Mandom"} description={"Ringo Roadgain"} /></div>
              
            </div>
                  <div className="new">
            
             <div> <Thumbnail thumbnail={Logo} title={"November Rain"} description={"Blackmore"} /></div>
             <div>  <Thumbnail thumbnail={Log} title={"Mandom"} description={"Ringo Roadgain"} /></div>
             <div>  <Thumbnail thumbnail={Logo} title={"November Rain"} description={"Blackmore"} /></div>
              <div> <Thumbnail thumbnail={Log} title={"Mandom"} description={"Ringo Roadgain"} /></div>
              
            </div>
                  <div className="new">
            
             <div> <Thumbnail thumbnail={Logo} title={"November Rain"} description={"Blackmore"} /></div>
             <div>  <Thumbnail thumbnail={Log} title={"Mandom"} description={"Ringo Roadgain"} /></div>
             <div>  <Thumbnail thumbnail={Logo} title={"November Rain"} description={"Blackmore"} /></div>
              <div> <Thumbnail thumbnail={Log} title={"Mandom"} description={"Ringo Roadgain"} /></div>
              
            </div>


      </div>
      
    </>
  );
}

export default App;