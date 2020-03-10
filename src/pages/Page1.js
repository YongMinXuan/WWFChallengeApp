import React, { Component } from "react"
import HomeButton from '../components/Homebutton'
import Progressbar from '../components/Progressbar'
import { Link } from "gatsby"

class Page1 extends Component {
    state = {
        userInput: ''
    }

    inputChangeHandler = (event) => {

        this.setState({ userInput: event.target.value });

        let limit = parseInt(this.state.userInput)
        let uniqueinput = 'input'

        for (var i = 1; i < limit + 1; i++) {

            this.setState({ uniqueinput: 0 });

        }

    }
    render() {


        return (
            <div className="App">
                <div className="container">

                    <Progressbar location={1} />
                </div>
          
                <label>Number of parts: </label>
                <input min={0} type="number" onChange={this.inputChangeHandler} />
               
                <div className="buttongroup">
                    <Link to='/'><button className="backbutton" >Back </button></Link>
                    <Link to={`/Page2`} state={{
                        pleasant: this.state.userInput,
                    }}><button disabled={!this.state.userInput} className="button" >Next </button></Link>

                </div>
            </div>
        );
    }
}


export default Page1;
