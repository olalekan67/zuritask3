import React from 'react'
import footerLogo from './images/footer-logo.png'
import {ImFacebook} from 'react-icons/im'
import { FaInstagram, FaTwitter } from 'react-icons/fa'


function Footer() {

    const footerLis = [
        {
           title: "Community", list: ["NFT", "Tokens", "Landlords", "Discord"]
        },
        {
            title:"Places", list:["Castle", "Farms", "Beach", "Learn more"]
        },
        {
            title:"About us", list:["Road map", "Creators", "Career", "Contact us"]
        },
    ]
    const date = new Date();

  return (
    <div className='py-5 bg-dark'>
        <div className='container text-white d-flex flex-column flex-md-row'>
            <div className='ms-4 ms-md-0 col-12 col-md-3'>
                <h2 className='mb-5'><img src={footerLogo} alt="" className='img-fluid h-25 footer-logo'/><span>Metabnb</span></h2>
                <div className='d-flex gap-3 mb-2'>
                    <ImFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>
            {
                footerLis.map(({title, list}) => (
                        <ul className='col-12 col-md-3'>
                            <h6>{title}</h6>
                            {list.map((list) => <li className='nav-link'>{list}</li>)}
                        </ul>
                    
                ))
                
            }
        </div>
        <p className='container text-white text-center text-md-start'>&copy; {date.getFullYear()} Metabnb</p>
    </div>
  )
}

export default Footer