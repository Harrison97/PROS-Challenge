import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

//NOTE TO SELF : There is no button on this page. (for science)
//Outputs are set to sync with the state which is set to sync with the inputs.
//There is a button in here that can be commented in.
//In order to add the button uncomment it,
//and remove the callbacks in the UpdateInputValue function

class BMICalculator extends Component {

    state = {
        feet: 5,
        inches: 11,
        weight: 185,
        bmi: '25.8',
        bmiClass: 'Overweight'
    }

    calculateBmi() {
        var bmiClass = '';
        var bmi = (0.453592 * this.state.weight) / Math.pow(0.0254 * (12 * this.state.feet + 1 * this.state.inches), 2);
        if(bmi<=18) bmiClass = "Underweight";
        else if (bmi<=24) bmiClass = "Healthy BMI";
        else if (bmi<=29) bmiClass = "Overweight";
        else if (bmi<=39) bmiClass = "Obese";
        else bmiClass = "Extremely Obese";
        this.setState({
            bmi: Number.parseFloat(bmi).toPrecision(3),
            bmiClass: bmiClass
        }, () => {
            console.log(this.state.bmi);
        });
    }

    //function used for keeping input boxes and state synced
    updateInputValue(evt) {
        // console.log(evt.target.id)
        switch (evt.target.id) {
            case "ft": this.setState({ feet: evt.target.value }, ()=> {this.calculateBmi()}); break;
            case "in": this.setState({ inches: evt.target.value }, ()=> {this.calculateBmi()}); break;
            case "weight": this.setState({ weight: evt.target.value }, ()=> {this.calculateBmi()}); break;
            default:
                break;
        }
    }

    render() {

        return (
            <div>
                <p>BMI Calculator</p>

                {/* All the input fields... */}
                <InputGroup>
                    <Input placeholder="ft" id="ft" value={this.state.feet} onChange={(e) => this.updateInputValue(e)}></Input>
                    <InputGroupAddon addonType="append">ft</InputGroupAddon>
                </InputGroup>
                <br />
                <InputGroup>
                    <Input placeholder="in" id="in" value={this.state.inches} onChange={(e) => this.updateInputValue(e)}></Input>
                    <InputGroupAddon addonType="append">in</InputGroupAddon>
                </InputGroup>
                <br />
                <InputGroup>
                    <Input placeholder="weight" id="weight" value={this.state.weight} onChange={(e) => this.updateInputValue(e)}></Input>
                    <InputGroupAddon addonType="append">lbs</InputGroupAddon>
                </InputGroup>

                <br />
                {/* Calculate Button */}
                {/* <Button id="calculate" onClick={this.calculateBmi.bind(this)}>Calculate</Button> */}
                {/* <br /><br /> */}
                
                {/* Output is showed here after button is clicked */}
                <div className="output">
                    <p>{this.state.bmi}</p>
                    <p>{this.state.bmiClass}</p>
                </div>

            </div>

        );

    };
}





export default BMICalculator;