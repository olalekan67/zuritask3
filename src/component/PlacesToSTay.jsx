import React from 'react'
import { useContext } from 'react'
import Card from './assets/Card'
import cardContext from './context/CardContext'
import { BiSlider } from 'react-icons/bi'


function Nfts() {
  const nftLis = ["Restaurant", "Cottage", "Castle", "fastast City", "beach", "Carbins", "Off-grid", "Farm"]

  const{ nftCards } = useContext(cardContext)

  return (
    <div className='mt-5 container mb-5'>
        <div className='mb-5'>
          <ul className='nav gap-2 justify-content-between'>
            {
              nftLis.map((nftLi) => <li className='nav-item'>{nftLi}</li>)
            }
            <li className="nav-item"><button className="btn nft-pg-btn">Location<BiSlider className='ms-1'/></button></li>
          </ul>
        </div>
        <div>
            <Card nftCards={nftCards}/>
        </div>
    </div>
  )
}

export default Nfts