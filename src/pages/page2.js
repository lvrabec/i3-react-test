import React from 'react';
import SectionLeft from '../components/SectionLeft';
import SectionRight from '../components/SectionRight';
import animal_photo from '../util/Be_cruelty_free.webp';
import '../styles/page2.css';


const Page2 = () => {
    return (
        <div className='page2'>
           <SectionLeft/>
           <SectionRight animal_photo={animal_photo}/>
        </div>
    );
}

export default Page2;
