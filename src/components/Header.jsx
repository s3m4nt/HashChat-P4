import React from 'react'
import Button from '@material-ui/core/Button'
import header01 from '../assets/images/HashChat_01.png'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function Header(props) {
    return (
<>
<div class="wrapper" style={{background: '#f2f2f2'}}>
        <section className="content">
            <div className="columns">
                <main className="main"></main>
                <aside className="sidebar-first"><img style={{ width: '200px'}} src={header01} alt="HashChat Logo" /></aside>
                <aside className="sidebar-second">
                    <Button 
                    startIcon={<ExitToAppIcon />}
                    onClick={props.onLogOut}
                    variant="contained"
                    style={{color: 'white', background: '#f2844d'}}
                    >logout
                    </Button>
                </aside>
            </div>
        </section>
    </div>
</>
    )
}

export default Header
