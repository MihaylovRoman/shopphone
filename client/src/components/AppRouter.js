import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'
import {Context} from '../index'

const AppRouter = () => {
    const {user} = useContext(Context)


    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) => 
            <Route key={path} path={path} Component={Component} exact />
            )}
            {publicRoutes.map(({ path, Component }) => 
            <Route key={path} path={path} Component={Component} exact />
            )}
            <Route element={<Navigate to={SHOP_ROUTE} exact/>}/>
        </Routes>
    )
}

export default AppRouter