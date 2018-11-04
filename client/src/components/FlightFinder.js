import React, { Component } from 'react';
import axios from 'axios';
import { InputGroup, Input, InputGroupAddon, InputGroupButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Button } from 'reactstrap';
import { watchFile } from 'fs';

class FlightFinder extends Component {
    //togglesplit bind hadled in render() instead
    //toggleSplit = this.toggleSplit.bind(this);

    state = {
        location: 'HOU',
        flights: [{}],
        cities: [],
        events: []

    }

    wait = ms => new Promise((r, j) => setTimeout(r, ms));

    searchCity(s) {
        if (!this.state.cities[s]) return;
        try {
            axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=f4GIqL0lzY6iU7hcA583SF7ALpdJDQxK&radius=100&unit=miles&size=100&city=' + (this.state.cities[s]) + '&apikey=f4GIqL0lzY6iU7hcA583SF7ALpdJDQxK')
                .then(res => {
                    // this.setState({json: res})
                    if (!res.data._embedded) return;
                    var arr = res.data._embedded.events;
                    // for (var i = 1; i < this.state.flights.length; i++) {
                    // console.log(this.state.flights[i].destination);
                    for(var i = 1; i <100 ;i++) {
                        if(this.state.events[i] == ' ') {
                            this.state.events[i] = res.data._embedded.events[1].name;
                            break;
                        }
                    }
                    
                    this.forceUpdate();
                    console.log(arr.find(obj => obj.dates.start.localDate === function () {
                        this.state.flights[s].departure_date[-1] = this.state.flights[s].departure_date[-1]++;
                        return this.state.flights[s].departure_date;

                    }));
                    console.log(this.state.events)


                    // console.log(res.data.find(obj => obj.code == this.state.flights[i].destination));
                    // }
                    // console.log(res.data._embedded.events);

                    // this.setState({ posts });
                });
        } catch (e) {
            console.log("sorry, no flights")
        }

    }

    render() {
        var myflights = this.state.flights;
        const listItems = myflights.map((d) => <li key={d.destination}>{this.state.cities[myflights.indexOf(d)]} {d.price} {this.state.events[myflights.indexOf(d)]}</li>);
        console.log('p')
        // debugger;
        return (
            

            <div>
                <Button id="calculate" onClick={(e) => {
                    axios.get('https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=4QuSOAAGOcr57jEbOh72mhUjwzOmF7dp&origin=' + (this.state.location) + '&duration=2')
                        .then(res => {
                            this.state.events = new Array(100).fill(' ')
                            // this.setState({json: res})
                            // console.log(res.data.results[0, 100]);
                            this.setState({ flights: res.data.results.slice(0, 100) })
                            console.log('flights: ');
                            console.log(this.state.flights);

                            axios.get('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json')
                                .then(res => {
                                    // var js = JSON.parse(res);
                                    var arr = this.state.flights;
                                    // console.log(res.data)
                                    for (var i = 1; i < arr.length - 1; i++) {
                                        // console.log(this.state.flights[i].destination);
                                        this.state.cities[i] = res.data.find(obj => obj.code === arr[i].destination);
                                        if (this.state.cities[i]) this.state.cities[i] = this.state.cities[i].city;
                                        // console.log(res.data.find(obj => obj.code == this.state.flights[i].destination));
                                    }
                                    delete arr[0];
                                    this.setState({
                                        flights: arr
                                    });
                                    console.log('flights: ');
                                    console.log(this.state.cities);







                                    // this.setState({json: res})
                                    // console.log(res.data);

                                    // this.setState({ posts });
                                });
                            // this.setState({ posts });
                        });




                }
                }>Search flight</Button>

                
                <Button id="search" onClick={(e) => {
                    //     for(var i = 1 ;i < 10; i++)  {
                    //     this.searchCity(i);
                    //     console.log(i);
                    //     setTimeout(5000);
                    //     // await wait(2000);
                    //     // do something with s and with fruitToLoad here
                    // }
                    for (let i = 1; i < 100; i++) {
                        setTimeout(()=>{
                            this.searchCity(i);
                            console.log(i);
                        }, i * 350);
                    }



                }






                }>Find Cross Links</Button>

                {listItems}

               

            </div>

        );

    };
}


export default FlightFinder;