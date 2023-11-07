import React, { useEffect, useState } from 'react';
import { get_data } from '../util/get_data';
import JsonInfo from '../util/Brands/LocalJsonFiles/info.json';
import '../styles/imggalery.css';




const ImgGalery = (props) => {

    const[data,setData]= useState(null);
    const[error,setError]=useState(null);

    const img_card_data= [
        {
            img_src:props.img1,
            data:data?.title || "Loading data",
            brand_desc:JsonInfo.brands[0].brand_desc,
            link_to:JsonInfo.brands[0].link
            
        },
        {
            img_src:props.img2,
            data:data?.title ||"Loading data",
            brand_desc:JsonInfo.brands[1].brand_desc,
            link_to:JsonInfo.brands[1].link
        },
        {
            img_src:props.img3,
            data:data?.title ||"Loading data",
            brand_desc:JsonInfo.brands[2].brand_desc,
            link_to:JsonInfo.brands[2].link
        },
        {
            img_src:props.img4,
            data:data?.title ||"Loading data",
            brand_desc:JsonInfo.brands[3].brand_desc,
            link_to:JsonInfo.brands[3].link
        },
        {
            img_src:props.img5,
            data:data?.title ||"Loading data",
            brand_desc:JsonInfo.brands[4].brand_desc,
            link_to:JsonInfo.brands[4].link
        },
        {
            img_src:props.img6,
            data:data?.title ||"Loading data",
            brand_desc:JsonInfo.brands[5].brand_desc,
            link_to:JsonInfo.brands[5].link
        },
        {
            img_src:props.img7,
            data:data?.title ||"Loading data",
            brand_desc:JsonInfo.brands[6].brand_desc,
            link_to:JsonInfo.brands[6].link
        },
    ]

   
    const random_nr= Math.floor(Math.random()*100)+1;
    const fetch_url_data='https://jsonplaceholder.typicode.com/todos/'+random_nr;
   

    useEffect(()=>{
        get_data(fetch_url_data,setData,setError)
       
    },[]);

  
    
    return (
        <div className='galery_main'>
            {img_card_data.map((card, index) => {
                return (
                   
                    <div  key={index} className='galery_card'>
                        <div className='image_container'>
                            <img src={card.img_src} alt="Image"></img>
                        </div>
                        <p>{card.brand_desc}</p>
                        <p>{card.data}</p>
                    </div>
                 
                );
            })}
        </div>
    );
}

export default ImgGalery;
