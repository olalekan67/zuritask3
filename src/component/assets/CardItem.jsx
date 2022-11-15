import React from 'react'
import { FaStar } from 'react-icons/fa'

function CardItem({nftCard}) {
    const{image, name, distance, available, price} = nftCard
  return (
    <div className='d-flex flex-row mx-auto'>
        <div className='py-3 px-3 cards '>
            <div>
                <img src={image} alt="" className='img-fluid h-100 w-100 mb-2'/>
            </div>
            <div className='card-item'>
                <div>
                    <p>{name}</p>
                    <p>{distance}</p>
                </div>
                <div className='ms-auto'>
                    <p>{price}</p>
                    <p>{available}</p>
                </div>
            </div>
            <div className='d-flex gap-1 stars-div'>
                <FaStar className='stars' />
                <FaStar className='stars' />
                <FaStar className='stars' />
                <FaStar className='stars' />
                <FaStar className='stars' />
            </div>
        </div>
    </div>
    
  )
}

export default CardItem