import React, { useEffect, useState } from 'react';
import Json_comm from '../util/Brands/LocalJsonFiles/commitment.json';
import '../styles/imggalery.css';


const ImgGalery2 = (props) => {


    useEffect(()=>{
        const elements = document.getElementsByClassName('main_div_for_list')
        const handleScroll = ()=>{
            Array.from(elements).forEach((each_element)=>{
                const elementPosition = each_element.getBoundingClientRect();
               
                if (elementPosition.top < window.innerHeight /1.255 ){
                    each_element.classList.add('animation_list');
                }
            });
        };
        window.addEventListener('scroll',handleScroll);
        handleScroll();

        return()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[]);




    const img_card_data= [
        {
            img_src:props.img1,
            commitment_text:Json_comm.commitment[0].text
        },
        {
            img_src:props.img2,
            commitment_text:Json_comm.commitment[1].text
        },
        {
            img_src:props.img3,
            commitment_text:Json_comm.commitment[2].text
        }
    ]

    return (
        
            <div className='main_div_for_list hidden'>
               {img_card_data.map((card,index)=>{
                return(
                    <div key={index} className='list_item_galery'>
                    <div className='img_box'>
                        <img src={card.img_src} alt="Image" className='img_galery2'></img>
                    </div>
                    <p className='list_paragraph' >{card.commitment_text}</p>
                </div>)

               })}
                
        </div>            
        
    );
}

export default ImgGalery2;
