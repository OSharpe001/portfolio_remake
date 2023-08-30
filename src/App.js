import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import './App.css';
import { AboutMe, Footer, Header, Main, ProjectDetailPage } from './components';


export default function App() {

  const [form, setForm] = useState({
    title: "",
    details: "",
    image: "",
    site: "",
    github: "",
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main
                                    setForm={setForm}
                                  />}/>
        <Route path="/details" element={<ProjectDetailPage
                                                        form={form}
                                                      />}/>
        <Route path="/aboutme" element={<AboutMe />}/>
      </Routes>
      <Footer />
    </div>
  );
};
