import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./components/NavbarComponent";
import {AppRouter} from "./components/AppRouter";
import {useContext} from "react";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

function App() {
    const {auth} = useContext(Context);
    const [user , loading , error] = useAuthState(auth);

    if(loading){
        return <Loader/>
    }

  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <AppRouter/>

        </div>
      </BrowserRouter>
  );
}

export default App;
