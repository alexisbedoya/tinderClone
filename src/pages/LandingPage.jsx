import { Header } from "../components/Header.jsx";
import { TinderCards } from "../components/TinderCards.jsx";
import { SwipeButtons } from "../components/SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Chats} from "../components/Chats.jsx";

export function LandingPage() {
  return (
    <div>
      <Router>
        <Switch>
          
          <Route path="/chat">
              <Header backButton = "/" />
            <Chats />
          </Route>
          <Route path="/profile">
              <Header />
            <h1>i am the profile page</h1>
          </Route>
          
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

