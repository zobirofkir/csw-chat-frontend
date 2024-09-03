import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./layout/Layout";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/"  element={<LoginScreen/>}/>
        <Route path="/register"  element={<RegisterScreen/>}/>
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
