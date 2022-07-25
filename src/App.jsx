import './App.css';
import Footer from "../src/components/Footer";
import Jumbotron from './components/Jumbotron';
import ButtonFilter from './components/ButtonFilter';

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <div className='container mx-auto max-w-4xl rounded-md'>
        <ButtonFilter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
