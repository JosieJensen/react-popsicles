import React from "react";
import bluePop from '../images/blue-pop.png';

const Race = () => {
    return(
        <section id="Race">
            <img id="Blue Popsicle" src={bluePop} alt="Blue Popsicle"/>
                <h2>Popsicle Race</h2>
                <p>Don't forget to sign up for the race! Each attendee will receive their own box of popsicles when they 
                        reach the end.</p>
        </section>
    );
}

export default Race;