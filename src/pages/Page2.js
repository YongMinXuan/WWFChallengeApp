import React, { Component } from 'react';
import Progressbar from '../components/Progressbar'
import { Link } from "gatsby"


class Page2 extends Component {
    state = {

    }

    componentDidMount() {
        const pleasant = this.props.location.state.data
       
    }



   

    myFunction = () => {
        this.props.updateItem(this.state)
    }

    calculatetotal = (name, event) => {
        
        let inputvalue = event.target.value
        let id = name
       
        this.setState({ [id]: inputvalue }, function () {

            let currentstate = this.state
             
            var sum = 0;
           
            for (var el in currentstate) {
               
                if (currentstate.hasOwnProperty(el)) {
                   
                    sum += parseFloat(currentstate[el]);
                    
                }
            }
        })

       



    }



    render() {
     
    

       
        let limit = parseInt(this.props.location.state.pleasant)
       
        let components = [];
        for (var i = 1; i < limit + 1; i++) {
           
            let input = 'input' + i

            components.push(
                <div key={i}>

                    <label className="labels" >Part {i}% </label>

                    <input aria-label="inputvalues" align="right" className="inputboxes" min={0} type="number" name={input} onChange={(e) => this.calculatetotal(input, e)} />

                </div>);


        }





        var sum = 0
        var count = 0
       
        let currentinputvalues = this.state
        
        for (var el in currentinputvalues) {
            
            count += 1

           
            if (currentinputvalues.hasOwnProperty(el)) {
              
               if (currentinputvalues[el] === "") {
                count -= 1
            }
                sum += parseFloat(currentinputvalues[el]);
               
            }
        }

      
        return (
            <div className="App">
                <h1>Page 2</h1>
                <div className="container">                   

                    <Progressbar location={2} />
            
                    <div className="container2">
                        {components}
                       
                    </div>
                    <div className="buttongroup">

                     
                        <Link to='/Page1'><button className="backbutton" >Back </button></Link>
                       
                        <Link to='/Page3'><button disabled={sum < 100 || count < limit} className="button" >Next </button></Link>
                        

                    </div>
                </div>
            </div>
        );
    }
}

Page2.defaultProps = {
    location: {
        
    }
}
export default Page2;