import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./layout/Layout";
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import DashboardScreen from './screens/dashboard/DashboardScreen'
import ProtectedRoutes from './protected/ProtectedRoutes';
import ProfileScreen from './screens/dashboard/ProfileScreen';
import SettingsScreen from './screens/dashboard/SettingsScreen';
import ResetPasswordScreen from './screens/auth/ResetPasswordScreen';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>

        {/* Guest Routes */}
        <Route path="/"  element={<LoginScreen/>}/>
        <Route path="/register"  element={<RegisterScreen/>}/>
        <Route path="/forgot-password"  element={<ResetPasswordScreen/>}/>      

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
          </Route>
                  
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
