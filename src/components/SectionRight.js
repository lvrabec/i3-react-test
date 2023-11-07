import React from 'react';
import '../styles/sectionright.css'


const SectionRight = (props) => {


    return (
        <div className='section_right'>
            <img  className='img' src={props.animal_photo} width={600}></img>
            
        </div>
    );
}

export default SectionRight;
