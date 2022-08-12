import React from "react";
import rainpop from './popsicle-rainbow.jpg';

const DYK = () => {
    return(
        <section id="DYK">
            <img id="Rainbow Popsicles" src={rainpop} alt="Rainbow Popsicles"/>
            <div>
                <h2>Did you know?</h2>
                <ul>
                    <li>The earliest known popsicles date as far back as 1872. Back then, a popsicle was called a <i>Hokey-Pokey.</i></li>
                    <li>Popsicles are also known as freezer pops, ice lollies, and ice pops.</li>
                    <li>The world's largest popsicle was made in 1997 and was 21ft tall.</li>
                    <li>Popsicles have become so popular that a popular arts and crafts item is called a popsicle stick.</li>
                </ul>
            </div>
        </section>
    );
}

export default DYK;