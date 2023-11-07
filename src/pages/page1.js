import React, { useEffect, useState } from 'react';
import ImgGalery from '../components/ImgGalery';
import ImgGaleryMobile from '../components/ImgGaleryMobile';
import img1 from '../util/Brands/Braun-logo.png';
import img2 from '../util/Brands/Logo-Gillette.jpg';
import img3 from '../util/Brands/old-spice-logo.png';
import img4 from '../util/Brands/pampers-logo.webp';
import img5 from '../util/Brands/head-and-shoulders-logo.jpg';
import img6 from '../util/Brands/logo Ariel.webp';
import img7 from '../util/Brands/tide-logo1.png';



const Page1 = () => {
const [windowSize , setwindowSize]= useState(window.innerWidth)


const handleWindowSize = ()=>{

    setwindowSize(window.innerWidth);
}

useEffect(()=>{
    window.addEventListener('resize',handleWindowSize);
    return() => {
        window.removeEventListener('resize',handleWindowSize);
    }
},[]);

    return (
        <div>

            {windowSize > 750 ? <ImgGalery img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} img6={img6} img7={img7}/>:<ImgGaleryMobile img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} img6={img6} img7={img7}/>  }
        </div>
    );
}

export default Page1;
