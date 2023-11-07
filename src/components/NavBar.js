import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../util/P_G_Logo_RGB.svg';
import hero_brands from '../util/Brands/hero-product-icon.svg';
import hero_impact from '../util/Brands/Hero-heart-icon.svg';
import "../styles/navbar.css";
import { useState,useEffect } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import JsonData from '../util/Brands/LocalJsonFiles/info.json';

const NavBar = () => {
    const [windowSize,setWindowSize]=useState(window.innerWidth)
    const [activate_burrger_menu,setActivateBurgerMenu]=useState(false)
    const [subMenu_brands,setSubMenu_brands]=useState(null);
    const [subMenu_impact,SetSubMenu_impact]=useState(null);

    const handlesetActivateBurgerMenu=()=>{

        if (activate_burrger_menu == false){
            document.body.classList.add('no-scroll')
        }
        else{
            document.body.classList.remove('no-scroll')

        }

        setActivateBurgerMenu(!activate_burrger_menu)
        console.log(activate_burrger_menu)
                  
    }

    const close_menu=()=>{
      
            {document.getElementById('nav_bar_mobile_div').classList.add('close')};
            {setTimeout(()=>{
                document.getElementById('nav_bar_mobile_div').classList.remove('close');
                handlesetActivateBurgerMenu();
            },750)}

        
    }

    const handleSetSubMenu_brands=(state)=>{
        subMenu_brands ? setSubMenu_brands(null): setSubMenu_brands(state)

    }
    const handleSetSubMenu_impact=(state)=>{
        subMenu_impact ? SetSubMenu_impact(null): SetSubMenu_impact(state)

    }

    const list_of_brands = JsonData.brands;
    

    const append_to_brands = () =>{

        return(   
         <ul className="sub_list">
            <li><Link to='/' className='sub_list_item' onClick={close_menu}>All brands</Link></li>
           
                {list_of_brands.map((brand, index) => (
                    <li  className='sub_list_item' key={index}>
                

                        <Link to={brand.brand_url} target="_blank"     
                        

                        
                         onClick={() => 
                            {
                                
                                handleSetSubMenu_brands(null);
                                close_menu();
                            }
                        }
                         >{brand.brand_name} 

                        </Link>
                    </li>
                ))}
        </ul>)
            
        
    }

    const append_to_impact=()=>{
        return(
            <ul className='sub_list'>

                {<li><Link to='/page2' onClick={()=>{
                    {document.getElementById('nav_bar_mobile_div').classList.add('close')};
                    {setTimeout(()=>{
                        document.getElementById('nav_bar_mobile_div').classList.remove('close');
                        handlesetActivateBurgerMenu();
                    },750)}

                }} > #BeCrueltyFree</Link></li>}
                
                {<li><Link to='https://us.pg.com/community-impact/' target="_blank" onClick={()=>{close_menu()}}>Community impact</Link></li>}
            </ul>
        );
    }
 
    const handleWindowSize=()=>{
        setWindowSize(window.innerWidth)
    }

    const nav_bar_full_size_show = windowSize <=750 ? 'hiden':'navbar' 
    const mobile_header_show= windowSize<750 ? 'mobile_header':'hiden'

    useEffect(()=>{
        window.addEventListener('resize',handleWindowSize);
        return() => {
            window.removeEventListener('resize',handleWindowSize);
        }
    },[window.innerWidth]);
    
    
    return (
        <div>
                            {/* NAVBAR FULL  */}
            <div className={nav_bar_full_size_show}>
            <ul className='nav_bar_list'>
                <li className='list_item'><Link to='/' className='pagelink'>Our Brands</Link></li>    
                <li className='list_item'><Link to='/' className='pagelink'><img src={img1} className='logo'></img></Link></li>
                <li className='list_item'><Link to='page2'className='pagelink'>Our Commitment</Link></li>
            </ul>
            </div>
                            {/* HEADER ZA NAV BAR Mobile */}
            <div className={mobile_header_show}>
                <Link to='/' className='logo_link_small'>  <img src={img1} ></img></Link>
         
            </div>
                            {/* NAVBAR ZA mobile */}
            <div className={windowSize <=750 ? 'mobile_nav_bar':'hiden'}>
                {activate_burrger_menu == false?
                 <div className='burger_circle'>
                <FaBars size={20} id="burger_img" onClick={handlesetActivateBurgerMenu}/>
                </div> 
                
:
            
             <div id="nav_bar_mobile_div">
                    {()=>{
                        setTimeout(() => {
                            document.getElementById('nav_bar_mobile_div').classList.remove('open')
                        }, 750);
                    }}
                <div id="logo_div">
                 <img src={img1} className='logo'></img>
                 </div>
              
                <ul className='nav_bar_list_mobile'>
                    <li className='list_item_nav_mobile' id='brands_list_header' onClick={()=>{handleSetSubMenu_brands('Brands')}}>
                        <div className='mini_img_div'><img className='hero_img' src={hero_brands} ></img></div>

                        <p className='text'>Our Brands</p></li>

                        

                        {subMenu_brands ? append_to_brands():'' }
                    <li className='list_item_nav_mobile' onClick={()=>{handleSetSubMenu_impact('Impact')}}>
                    <div className='mini_img_div'><img className='hero_img' src={hero_impact} ></img></div>
                   
                   <p className='text'> Our Impact</p></li>
                      

                        {subMenu_impact ? append_to_impact():''}
                </ul>
                <div className='esc_circle'>
             {<FaTimes size={20} id="esc_icon" onClick={()=>{
                
                const close_mobile_div =document.getElementById('nav_bar_mobile_div')
                close_mobile_div.classList.remove('open');
                close_mobile_div.classList.add('close');
                
                setTimeout(() => {
                close_mobile_div.classList.remove('close')
                handleSetSubMenu_brands(null)
                handleSetSubMenu_impact(null)
                handlesetActivateBurgerMenu()
                    
                }, 750);


             }}></FaTimes>}
                </div>
                </div>}

            </div>
        </div>


        
    );
}

export default NavBar;




