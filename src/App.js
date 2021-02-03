import logo from './logo.svg';
import './App.css';
import About from  './comp/screens/About.js';
import Info from  './comp/screens/Info.js';

function App() {
  return (
    <div>
     <About></About>

<Info name="sakshi" age="21" city="pune">
     props-child prperty
   </Info>
   <Info name="sahil" age="20" city="pune"></Info>
 <Info name="shubham" age="23" city="pune"></Info>
    </div>
  );
}

export default App;
