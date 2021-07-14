import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NevigationBar from "./NevigationBar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Homepage from "./Homepage";
import Contact from "./Contact";
import About from "./About";
import Error404 from "./Error404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NevigationBar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Homepage} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/" exact={true} component={Homepage} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
