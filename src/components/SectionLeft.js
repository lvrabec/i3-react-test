import React from 'react';
import ImgGalery2 from './ImgGalery2';
import img1 from '../util/epruveta.svg';
import img2 from '../util/Hand_shake.svg';
import img3 from '../util/Megaphone.svg';
import '../styles/sectionleft.css'

const SectionLeft = () => {
    
    return (
        <div className='section_left'>
            <div className='section_left_container'>
            <h4 className='title_section_left'>
            OUR COMMITMENT TO #BECRUELTYFREE 
            </h4>
            <p className='paragraph'>
            We are calling for an end to all animal testing of cosmetic products globally, and we’re proud to partner with Humane Society International’s #BeCrueltyFree Campaign to advance that vision.
            </p>
            <p className='paragraph'>
            Our support of #BeCrueltyFree is another step in our long-term commitment to make animal testing obsolete. Our journey began over 40 years ago through ongoing research, investment and partnerships to develop and promote the use of alternatives to animal testing. These efforts have contributed to the greater good, enabling us and others to develop products that have not been tested on animals. Our contributions include:         
            </p>
            <ImgGalery2  img1={img1} img2={img2} img3={img3}/>
        </div>
        </div>
    );
}

export default SectionLeft;
