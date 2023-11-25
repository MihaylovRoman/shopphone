import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'


const AppRouter = () => {
    const isAuth = false

    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) => 
            <Route key={path} path={path} Component={Component} exact />
            )}
            {publicRoutes.map(({ path, Component }) => 
            <Route key={path} path={path} Component={Component} exact />
            )}
            <Route path='/' element={<Navigate to={SHOP_ROUTE} exact/>}/>
        </Routes>
    )
}

export default AppRouter