import React, { Component } from 'react';

import HomeButton from '../components/Homebutton'
import BacktoHomeButton from '../components/BacktoHomebutton'
import { Link } from "gatsby"
import Progressbar from '../components/Progressbar'


class Page3 extends Component {

    render() {

        return (
            <div className="finalpage">

                <div className="container">

                    <Progressbar location={3} />
                </div>
                <h1 className="headings">Success!</h1>
                <Link to="/" ><BacktoHomeButton >Home </BacktoHomeButton></Link>

            </div>
        );
    }
}


export default Page3;