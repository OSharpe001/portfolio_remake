import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutMe, Footer, Header, Main, ProjectDetailPage } from './components';


export default function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/details" element={<ProjectDetailPage />}/>
        <Route path="/aboutme" element={<AboutMe />}/>
      </Routes>
      <Footer />
    </div>
  );
};
