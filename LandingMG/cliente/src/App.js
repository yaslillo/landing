import styles from "./App.module.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Landing } from "./components/index";

function App() {
  return (
    <div className= {styles.App}>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
