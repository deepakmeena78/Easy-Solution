import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Help from './Help/Help'
import Home from './Home/Home'
import HelpById from './Help/HelpById'
import SignUp from './SignUpIn/SignUp'
import SignIn from './SignUpIn/SignIn'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/help' element={<Help />} />
                <Route path='/help-details/:id' element={<HelpById />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/login' element={<SignIn />} />
                <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>
        </>
    )
}

export default Routing
