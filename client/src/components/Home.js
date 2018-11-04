import React from 'react';
import resume from '../Resume-9-16-2018.pdf'


const Home = () => {
    return (
        <div className="text-center">
            <h1>Home</h1>
            <br />
            <br />

            <p><strong>The Goal: </strong>The intention of this web app is to eventually be a source for people to go to learn about their bodies and to help them create a meal plan that works for them. I don't want to go into too many details as the ideas that I have may take me a while to implement, but I think in the long run it will be worth the wait.</p>
            <br />
            <p className="text-center"><strong>Hey! I'm Harrison Hayes</strong> and I am the creator of this web app. It is currently in early development as I am still getting comfortable with the functionality of ReactJS and the other technologies I have choosen to design this web app. This is a long term project that I have always had in mind and I hope one day it will be designed well enough to be of use to many people.</p>
            <br />
            <br />
            <br />
            <br />

            <a href="https://github.com/Harrison97"><strong>My Github</strong></a>
            <br />
            <a href = {resume} target = "_blank"><strong>My Resume</strong></a>
            <p><strong>Email:</strong> hehayes@uh.edu</p>



        </div>
    );
};

export default Home;