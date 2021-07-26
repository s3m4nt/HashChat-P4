import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import header01 from '../assets/images/HashChat_01.png'
import '../assets/styles/site.css'

function Header() {
    return (
<>
<div class="wrapper">
        <section className="content">
            <div className="columns">
                <main className="main">Content: Flexible width</main>
                <aside className="sidebar-first"><img style={{ width: '200px'}} src={header01} alt="HashChat Logo" /></aside>
                <aside className="sidebar-second"><button>Log out</button></aside>
            </div>
        </section>
    </div>
</>
    )
}

export default Header
