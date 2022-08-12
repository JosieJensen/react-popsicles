import React from "react";

const Contactform = () => {
    return(
        <section id="forms">
        <h2>Contact Us</h2>
        <div>&nbsp;</div>
        <form action="" method="POST">

            <label for="name">Name:</label>
            <br/><input type="text" id="idname" name="name"/>
            <div>&nbsp;</div>
      
            <label for="hear">How did you hear about us?</label>
            <br/><select id="idplaces" name="places">
                <option value="Popsicle Monthly">Popsicle Monthly</option>
                <option value="Ice Cream Trucks">Ice Cream Trucks</option>
                <option value="Neightbor Kid">Neighbor Kid</option>
                <option value="Monster Under Bed">The Monster Under My Bed</option>
              </select>
            <div>&nbsp;</div>
      
            <label for="favorite">What color is your favorite popsicle?</label>
            <br/><input type="color" id="idcolor" name="color"/>
            <div>&nbsp;</div>
      
            <label for="body">Please let us know any comments you have:</label>
            <br/><div>&nbsp;</div>
            <textarea id="body" name="body" rows="10" cols="60"></textarea>

            <br/><input id="submitbutton" type="submit"/>
      
          </form>
        </section>
    );
}

export default Contactform;