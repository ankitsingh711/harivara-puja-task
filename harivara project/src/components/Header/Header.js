import React, { Component, Fragment } from 'react';
import './Header.css'

class Header extends Component {
    constructor(){
        super()

        this.state = {
            myHeading: ' Harivara Project '
        }
    }

    render(){
        return(
            <Fragment>
                <center>
                <h1 className='myheading'>{ this.state.myHeading }</h1>
                </center>
            </Fragment>
        )
    }
}

export default Header