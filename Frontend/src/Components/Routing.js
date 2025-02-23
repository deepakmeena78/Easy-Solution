import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Help from './Help/Help'
import Home from './Home/Home'
import HelpById from './Help/HelpById'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/help' element={<Help />} />
                <Route path='//help-details/:id' element={<HelpById />} />
                <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>
        </>
    )
}

export default Routing
