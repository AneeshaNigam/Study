import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Greet from "./components/greet";
import Seeoff from "./components/seeoff";
import Errorpage from "./components/ErrorPage";
function App(){
  return<>
    
    <BrowserRouter>
      <Link to="/greet"><button>Greet</button></Link>
      <br></br>
      <Link to="/seeoff"><button>Seeoff</button></Link>
      <Routes>
        <Route path="/greet" element={<Greet/>}/>
        <Route path="/seeoff" element={<Seeoff/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
    </BrowserRouter>
  </>
}
export default App;