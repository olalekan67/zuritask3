import React from 'react'
import CardItem from './CardItem'

function Card({nftCards}) {
  return (
    <div className='card'>
        {
            nftCards.map((nftCard) => (
                <CardItem nftCard= {nftCard} key={nftCard.id} />
            ))
        }
    </div>
  )
}

export default Card