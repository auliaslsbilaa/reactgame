// import logo from './logo.svg';
import './App.css';
import Intro from './component/Intro';
import BestGame from './component/BestGame';
import NavigationBar from './component/navigationBar';
import TrendingGame from './component/trendingGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/landingPage.css";
import Contact from './component/Contact';


function App() {
  return (
    <div>
      <div className='myBG'>
      <NavigationBar tittle="Game Holic"/>
      <Intro/>
      </div>
      <div className='trending'>
      <TrendingGame/>
      </div>
      <div className='best'>
      <BestGame/>
      </div>
      <div className='contact'>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
