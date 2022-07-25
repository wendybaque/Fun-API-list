import './App.css';
import useAxios from './hooks/useAxios';

import Footer from "../src/components/Footer";
import Jumbotron from './components/Jumbotron';
import ButtonFilter from './components/ButtonFilter';
import ListApi from './components/ListApi';
import { useEffect } from 'react';

function App() {
  const {fetchData, response, loading} = useAxios('entries');

  useEffect(() => {
    fetchData({params:{category:'Animals'}});
  }, []);


  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md">
      <Jumbotron fetchData={fetchData} />
      <div className='container mx-auto max-w-4xl rounded-md '>
        <ButtonFilter fetchData={fetchData} />
        <ListApi response={response} loading={loading} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
