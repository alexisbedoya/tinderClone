

import { Header } from './components/Header.jsx';
import {TinderCards} from './components/TinderCards.jsx';
import {SwipeButtons} from "./components/SwipeButtons";
function App() {
  return (
    //BEM class maning covention 

    <div className="App">
       
     
          <Header />
          <TinderCards />
          <SwipeButtons />
         
        
    </div>
  );
}

export default App;
