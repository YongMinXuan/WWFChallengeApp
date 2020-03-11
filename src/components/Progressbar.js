import React, { Component } from 'react';
//import logo from './logo.svg';



class Progressbar extends Component {




    render() {

     
        let components = [];
        if (this.props.location == 1) {
            components.push(
                <ul className="step-progressbar">
                    <li key={1} className="step-progressbar__item step-progressbar__item--active">
                        Step 1 </li>

                    <li key={2} className="step-progressbar__item ">Step 2</li>
                    <li key={3} className="step-progressbar__item">Step 3</li>
                </ul>
            );
        }


        else if (this.props.location == 2) {
            components.push(
                <ul className="step-progressbar">
                    <li className="step-progressbar__item step-progressbar__item--complete">
                        Step 1 </li>

                    <li className="step-progressbar__item step-progressbar__item--active">Step 2</li>
                    <li className="step-progressbar__item">Step 3</li>
                </ul>
            );
        }

        else if (this.props.location == 3) {
            components.push(
                <ul className="step-progressbar">
                    <li className="step-progressbar__item step-progressbar__item--complete">
                        Step 1 </li>

                    <li className="step-progressbar__item step-progressbar__item--complete">Step 2</li>
                    <li className="step-progressbar__item step-progressbar__item--complete">Step 3</li>
                </ul>
            );
        }

        return (
            // components
            components
        );
    }


}
export default Progressbar;