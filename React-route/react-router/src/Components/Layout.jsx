import React from 'react'
import Header from './Header'
import Copyright from './Copyright'
import Footer from './Footer'


function Layout(props) {
    return (
        <>
            <Header setPage={props.setPage} />
            {props.children}
            <Footer />
            <Copyright />

        </>
    )
}

export default Layout