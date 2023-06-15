import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { ProtectedRoute } from './components/ProtectedRoutes'
import { useAuthStore } from './store/authStore';
import { shallow } from 'zustand/shallow';
import Index from './pages/Index';
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
import VerGruposPage from './pages/teacher/VerGruposTeacherPage';
import VerGrupoTeacherPage from './pages/teacher/VerGrupoTeacherPage';
import MiPerfilTeacherPage from './pages/teacher/MiPerfilTeacherPage';
import VerGruposAdminPage from './pages/admin/VerGruposAdminPage';
import VerGrupoAdminPage from './pages/admin/VerGrupoAdminPage';
import AgregarGrupoAdminPage from './pages/admin/AgregarGrupoAdminPage';
import MiPerfilAdminPage from './pages/admin/MiPerfilAdminPage';
import VerGruposStdPage from './pages/student/VerGruposStdPage';
import EditarAsignacionPage from './pages/student/EditarAsignacionPage';
import Material from './pages/Material';

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
          <Route path='/student' element={<VerGruposStdPage/>} />
          <Route path='/teacher' element={<Dashboard />} />
          <Route path='/teacher/asignaciones' element={<AsignacionesTeacherPage />} />
          <Route path='/teacher/agregarasignacion' element={<AgregarAsignacionPage />} />
          <Route path='/teacher/editarasignacion/:id' element={<EditarAsignacionPage/>}/>
          <Route path='/teacher/agregarcurso' element={<AgregarCursoPage />} />
          <Route path='/material/:id' element={<Material/>}/>
          <Route path='/teacher/agregarmaterial/:id' element={<AgregarMaterialPage />} />
          <Route path='/teacher/grupos' element={<VerGruposPage />} />
          <Route path='/teacher/grupo/:id' element={<VerGrupoTeacherPage />} />
          <Route path='/teacher/cursos' element={<VerCursosPage />} />
          <Route path='/teacher/miperfil' element={<MiPerfilTeacherPage />} />
          <Route path='/admin/agregargrupo' element={<AgregarGrupoAdminPage/>}/>        
          <Route path='/admin/vergrupos' element={<VerGruposAdminPage/>} />
          <Route path='/calificacion' element={<CalificacionPage />} />
          <Route path='/admin/grupo/:id' element={<VerGrupoAdminPage/>}/>
          <Route path='/admin/miperfil' element={<MiPerfilAdminPage/>}/>
          </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
