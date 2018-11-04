import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, InputGroupButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Button } from 'reactstrap';

class CalorieCalculator extends Component {
    //togglesplit bind hadled in render() instead
    //toggleSplit = this.toggleSplit.bind(this);
    activityArr = [
        '(BMR) Basal Metabolic Rate',
        'Sedentary - little to none',
        'Light Activity - 1-3 days per week',
        'Moderate Activity - 3-5 days per week',
        'Heavy Activity - 6-7 days per week',
        'Very Heavy Activity - twice a day, heavy workouts'
    ]

    state = {
        genderSplitButtonOpen: false,
        splitButtonOpen: false,
        feet: 5,
        inches: 11,
        weight: 185,
        age: 21,
        gender: '',
        activity: '',
        calories: ''
    }

    calculateCalories() {
        //calc basil metabolic rate
        var cals = (10 * 0.453592 * this.state.weight) + (6.25 * (2.54 * (12 * this.state.feet + 1 * this.state.inches)) - (5 * this.state.age));

        if (this.state.gender === "Male") {
            cals += 5;
        } else if (this.state.gender === "Female") {
            cals -= 161;
        }

        //checks activity level and multiplies by appropriate multiplier
        switch(this.state.activity) {
            case this.activityArr[0]: cals*=1.0; break;
            case this.activityArr[1]: cals*=1.2; break;
            case this.activityArr[2]: cals*=1.375; break;
            case this.activityArr[3]: cals*=1.55; break;
            case this.activityArr[4]: cals*=1.725; break;
            case this.activityArr[5]: cals*=1.9; break;
            default: console.log("BMR Calculated"); break;
        }

        this.setState({calories : Number.parseFloat(cals).toPrecision(4)}, () => {
            console.log(this.state);
        });
    }

    //function used for keeping input boxes and state synced
    updateInputValue(evt) {
        // console.log(evt.target.id)
        switch (evt.target.id) {
            case "ft": this.setState({ feet: evt.target.value }); break;
            case "in": this.setState({ inches: evt.target.value }); break;
            case "weight": this.setState({ weight: evt.target.value }); break;
            case "age": this.setState({ age: evt.target.value }); break;
            default:
                break;
        }
    }

    toggleSplit() {
        this.setState({ splitButtonOpen: !this.state.splitButtonOpen });
    }

    toggleGenderSplit() {
        this.setState({ genderSplitButtonOpen: !this.state.genderSplitButtonOpen });
    }

    setActiveLevel(evt) {
        //sets activity to correct drop box number str
        this.setState({ activity: this.activityArr[evt.target.id[evt.target.id.length - 1]] })
    }

    setGender(evt) {

        this.setState({ gender: evt.target.id })
    }

    render() {

        return (
            <div>
                <p>Calorie Calculator</p>
                <InputGroup>
                    <Input placeholder="ft" id="ft" value={this.state.feet} onChange={(e) => this.updateInputValue(e)} />
                    <InputGroupAddon addonType="append">ft</InputGroupAddon>
                    <Input placeholder="in" id="in" value={this.state.inches} onChange={(e) => this.updateInputValue(e)} />
                    <InputGroupAddon addonType="append">in</InputGroupAddon>
                </InputGroup>
                <br />
                <InputGroup>
                    <Input placeholder="weight" id="weight" value={this.state.weight} onChange={(e) => this.updateInputValue(e)} />
                    <InputGroupAddon addonType="append">lbs</InputGroupAddon>
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Age</InputGroupAddon>
                    <Input placeholder="age" id="age" value={this.state.age} onChange={(e) => this.updateInputValue(e)} />
                </InputGroup>
                <br />

                <InputGroup>
                    <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.genderSplitButtonOpen} toggle={this.toggleGenderSplit.bind(this)}>
                        <DropdownToggle split outline />
                        <DropdownMenu>
                            <DropdownItem disabled>Select one :</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem id="Male" onClick={(e) => this.setGender(e)}>Male</DropdownItem>
                            <DropdownItem id="Female" onClick={(e) => this.setGender(e)}>Female</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                    <Input disabled placeholder="-Gender-" value={this.state.gender} />

                </InputGroup>

                <br />

                <InputGroup>
                    <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit.bind(this)}>
                        <DropdownToggle split outline />
                        <DropdownMenu>
                            <DropdownItem disabled>Select one :</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem id="drop0" onClick={(e) => this.setActiveLevel(e)}>{this.activityArr[0]}</DropdownItem>
                            <DropdownItem id="drop1" onClick={(e) => this.setActiveLevel(e)}>{this.activityArr[1]}</DropdownItem>
                            <DropdownItem id="drop2" onClick={(e) => this.setActiveLevel(e)}>{this.activityArr[2]}</DropdownItem>
                            <DropdownItem id="drop3" onClick={(e) => this.setActiveLevel(e)}>{this.activityArr[3]}</DropdownItem>
                            <DropdownItem id="drop4" onClick={(e) => this.setActiveLevel(e)}>{this.activityArr[4]}</DropdownItem>
                            <DropdownItem id="drop5" onClick={(e) => this.setActiveLevel(e)}>{this.activityArr[5]}</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                    <Input disabled placeholder="-Activity Level-" value={this.state.activity} />

                </InputGroup>

                <br />

                <Button id="calculate" onClick={this.calculateCalories.bind(this)}>Calculate</Button>

                <div className="output">
                    {this.state.calories}
                </div>

            </div>

        );

    };
}


export default CalorieCalculator;