
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import FirstPage from './components/firstPage';
import SecondPage from './components/secondPage';
import data from '../src/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

     <Routes>
             
              <Route path="/" element={<Home data={data} />} />
          <Route path="/blogpost/:id" element={<BlogPost data={data} />} />
              <Route path='firstPage' element={<FirstPage/>}/>
              <Route path='secondPage' element={<SecondPage/>}/>

    </Routes>

    


   

    
    </div>
  );
}

export default App;
