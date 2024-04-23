import logo from './logo.svg';
import './App.css';
import PrimerComponente from './components/PrimerComponente';
import SegundoComponente from './components/SegundoComponente';
import SingleTool from './components/SingleTool';
import ToolList from './components/ToolsList';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TEXTO</p>
        
        <Navbar></Navbar>

        <PrimerComponente></PrimerComponente>
        
        
        <SegundoComponente></SegundoComponente>

        <PostForm></PostForm>

      </header>
    </div>
  );
}

export default App;
