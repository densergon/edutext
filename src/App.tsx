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
import Dashboard from './pages/teacher/DashboardTeacher';
import CalificacionPage from './pages/teacher/CalificacionPage';
import AsignacionesTeacherPage from './pages/teacher/AsignacionesTeacherPage';
import AgregarAsignacionPage from './pages/teacher/AgregarAsignacionPage';
import VerCursosPage from './pages/teacher/VerCursosPage';
import AgregarCursoPage from './pages/teacher/AgregarCursoPage';
import ScrollToTop from './components/ScrollToTop';
import AgregarMaterialPage from './pages/teacher/AgregarMaterialPage';

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
          <Route path='/teacher' element={<Dashboard />} />
          <Route path='/teacher/asignaciones' element={<AsignacionesTeacherPage />} />
          <Route path='/teacher/agregarasignacion' element={<AgregarAsignacionPage />} />
          <Route path='/teacher/agregarcurso' element={<AgregarCursoPage/>}/>
          <Route path='/teacher/agregarmaterial' element={<AgregarMaterialPage/>}/>
          <Route path='/teacher/cursos' element={<VerCursosPage/>}/>
          <Route path='/calificacion' element={<CalificacionPage />} />
        </Route>
      </Routes>
      <ScrollToTop/>
    </BrowserRouter>
  )
}

export default App
