import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Habits from './Habits'
import AddButton from './AddHabit'
import UserContext from '../Contexts/UserContext'
import InfoContext from "../Contexts/InfoContext"




export default function App() {

    const [user, setUser] = useState({})
    const [token, setToken] = useState('')
    const [habitosHoje, setHabitosHoje] = useState([])
    const [progress, setProgress] = useState(1)

    return (
        <InfoContext.Provider value={{token, setToken}}>
            <UserContext.Provider value={{ user, setUser, progress, setProgress, habitosHoje, setHabitosHoje}}>
                <BrowserRouter>
                    <Routes>

                        <Route path='/' element={<Login />} />
                        <Route path='/cadastro' element={<SignUp />} />
                        <Route path='/habitos' element={<Habits />} />
                        <Route path='/add' element={<AddButton />} />

                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </InfoContext.Provider>
    )
}