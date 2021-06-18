
import { Header } from '../components/Header.jsx';
import {TinderCards} from '../components/TinderCards.jsx';
import {SwipeButtons} from "../components/SwipeButtons";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export function LandingPage() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route path = "/">
                        
                        <TinderCards />
                        <SwipeButtons />
                    </Route>
                    <Route path = "/chat">
                        
                    </Route>
                </Switch>
           
          </Router>
         
        </div>
    )
}
    
          {/* Chats screen*/ }
          {/*Individual chat screen*/}