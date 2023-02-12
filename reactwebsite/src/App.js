
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import data from '../src/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourcePage from './components/resourcePage';


function App() {
  return (
    <div className="App">

     <Routes>
             
              <Route path="/" element={<Home data={data} />} />
          <Route path="/blogpost/:id" element={<BlogPost data={data} />} />
              <Route path='resourcePage' element={<ResourcePage/>}/>
             

    </Routes>

    


   

    
    </div>
  );
}

export default App;
