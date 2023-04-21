import logo from './logo.svg';
import './App.css';
import ReactLogo from './Component/ReactLogo';
import ReactBenefits from './Component/ReactBenefits';
import Button from './Component/Button';
function App() {
  return (
    <div className="App">
      <header>
        <ReactLogo />
        <ReactBenefits />
        <Button />
        
      </header>
    </div>
  );
}

export default App;
