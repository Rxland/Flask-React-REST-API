import React from 'react'

import { NavLink } from "react-router-dom"

import classes from "./HomePage.module.css"


function HomePage() {
    return (
        <div className = { classes.HomePage }>
            

        <NavLink to = "/product">
            Go to add new person
        </NavLink>

        </div>
    )
}

export default HomePage
