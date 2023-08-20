import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Footer, Header, Main, ProjectDetailPage } from './components';

export default function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/details" element={<ProjectDetailPage />}/>
      </Routes>
      <Footer />
    </div>
  );
};
