
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import { Button } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Video from './components/Video';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Upload from './components/Upload';

function App() {
  return (
    <Router>
 <Header/>

    <ColorModeSwitcher/>
   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/upload" element={<Upload/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
