import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

//  in the About section, add an <img /> element with the src attribute of {coverImage}. You can use the {} syntax in JSX to use JavaScript.
function About() {
    return (
        <section className="my-5">
        <h1 id="about">Who am I?</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      </section>
      );
    
}

export default About;

// React components must always return a single parent JSX element. However, this element may have many children elements.