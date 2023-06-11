import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { ProtectedRoute } from './components/ProtectedRoutes'
import { useAuthStore } from './store/authStore';
import { shallow } from 'zustand/shallow';
import Index from './pages/Index';
import HomeStudent from './pages/HomeStudent';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUsPage from './pages/AboutUsPage';
import DashboardPage from './pages/DashboardPage';
import CalificacionPage from './pages/CalificacionPage';

function App() {

  const { isAuth } = useAuthStore((state) => ({ isAuth: state.isAuth }), shallow)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/aboutUs' element={<AboutUsPage />} />
        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route path='/student' element={<HomeStudent />} />
          <Route path='/teacher' element={<DashboardPage />} />
          <Route path='/calificacion' element={<CalificacionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
