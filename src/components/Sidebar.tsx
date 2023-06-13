import { NavLink } from 'react-router-dom'
import '../components/styles/Dashboard.less'
import {  FaUserFriends } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import SidebarTeacher from './teacher/SidebarTeacher'
import SiderbarAdmin from './admin/SiderbarAdmin'
import { useAuthStore } from '../store/authStore'

const Sidebar = () => {
    const role: String = useAuthStore((state) => state.role);
    const teacher=(<SidebarTeacher/>)
    const admin=(<SiderbarAdmin/>)
    const [sdebar,setSdbar]=useState(teacher)
    useEffect(()=>{
        if(role=='profesor'){
            setSdbar(teacher)
        }else if(role=='administrador'){
            setSdbar(admin)
        }
    },[])
    return sdebar
}

export default Sidebar