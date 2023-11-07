import React, { useEffect, useState } from 'react';
import { get_data } from '../util/get_data';
import '../styles/imggalerymobile.css';
import JsonInfo from '../util/Brands/LocalJsonFiles/info.json';



const ImgGaleryMobile = (props) => {

    const[data,setData]= useState(null);
    const[error,setError]=useState(null);

    const [count,setCount]=useState(0);
    const [currentImg,setCurrentImg]=useState();

    const handleClickPlus = ()=>{
        if (count < img_card_data.length -1)
            setCount(count+1);
           
    }
    const handleClickMinus= () =>{
        if (count>0)
            setCount(count-1)
           
    }
    const handleCurrentCount = (index) => {
        if (index !== count) {
            setCount(index);
        }
    };


    const img_card_data= [
        {
            img_src:props.img1,
            data:data?.title || "Loading data",
            brand_desc:JsonInfo.brands[0].brand_desc
            
        },
        {
            img_src:props.img2,
            data:data?.title ||"Loading data",
            brand_desc:JsonInfo.brands[1].brand_desc
        },
        {
            img_src:props.img3,
            data:data?.title ||"Loading data",
            brand_desc:JsonInfo.brands[2].brand_desc
        },
        {
            img_src:props.img4,
            data:data?.title ||"Loading data",
            brand_desc:JsonInfo.brands[3].brand_desc
        },
        {
            img_src:props.img5,
            data:data?.title ||"Loading data",
            brand_desc:JsonInfo.brands[4].brand_desc
        },
        {
            img_src:props.img6,
            data:data?.title ||"Loading data",
            brand_desc:JsonInfo.brands[5].brand_desc
        },
        {
            img_src:props.img7,
            data:data?.title ||"Loading data",
            brand_desc:JsonInfo.brands[6].brand_desc
        },
    ]


   
    const random_nr= Math.floor(Math.random()*100)+1;
    const fetch_url_data='https://jsonplaceholder.typicode.com/todos/'+random_nr;
   

    useEffect(()=>{
        get_data(fetch_url_data,setData,setError)
       
    },[]);

    useEffect(()=>{
        setCurrentImg(count % img_card_data.length)
    },[count,img_card_data.length])
  
    

    return (
        <div id="galery">
        <div className='galery_mobile_main'>
            <div className='galery_mobile_card'>     
                <img className='galery_mobile_img' src={img_card_data[currentImg]?.img_src}></img>
                          
                
                  
                <div className='button plus' onClick={handleClickMinus}>&#10094;</div>  
                <div className='dots'>              
                {img_card_data.map((item,index)=>{
                    return(<span key={index} className={`dot ${index === count ? 'active' : ''}`}  onClick={() => handleCurrentCount(index)}></span>)
                })}
                </div>          
                <div className='button minus' onClick={handleClickPlus}>&#10095;</div>

            </div>
            <p className='brand_desc'>{img_card_data[currentImg]?.brand_desc}</p> 

        </div>
        </div>
    );
}

export default ImgGaleryMobile;
