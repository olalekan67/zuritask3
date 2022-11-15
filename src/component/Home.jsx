import React from 'react'
import { useContext } from 'react'
import hero1 from './assets/images/hero1.png'
import hero2 from './assets/images/hero2.png'
import hero3 from './assets/images/hero3.png'
import hero4 from './assets/images/hero4.png'
import Card from './assets/Card'
import cardContext from './context/CardContext'
import footerall from './assets/images/footerall.png'
import metamask from './assets/images/metamask.png'
import openSea from './assets/images/opensea.png'
import tokenLogo from './assets/images/token12.png'



function Home() {
   const {nftCards} = useContext(cardContext)
   const card =  nftCards.filter((nftCard) => nftCard.id <= 8)
    
  return (
    <>
    <div className='container mt-5 d-flex flex-column flex-md-row gap-5 mb-3'>
        <div className='col-md-6 col-lg-5'>
            <h2 className='mb-4 mt-md-5 col-10 col-md-12 mx-auto mx-md-0'>Rent a <span className='hero-span'>Place</span> away from <span className='hero-span'>Home</span> in the <span className='hero-span'>Metaverse</span></h2>
            <p className='mb-5'>
            we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
            </p>

            <form>
                <input type="text" className='w-75 py-1 px-2 search-inp' placeholder='Search for location'/>
                <button className='btn search-btn purple-btn col-lg-3 mb-3'>Search</button>
            </form>
        </div>
        <div className='d-flex flex-row gap-2 col-md-5 ms-lg-auto'>
            <div className='d-flex flex-column gap-2 pt-5 mt-5'>
                <img src={hero1} alt="" className='img-fluid '/>
                <img src={hero2} alt="" className='img-fluid '/>
            </div>
            <div className='d-flex flex-column gap-2'>
                <img src={hero3} alt="" className='img-fluid'/>
                <img src={hero4} alt="" className='img-fluid'/>
            </div>
        </div>
    </div>
    <div className='nfts-head mb-4'>
        <div className='container d-flex justify-content-between text-white'>
            <h6 className='logos'><img src={tokenLogo} alt="" className='img-fluid h-50'/> MBToken</h6>
            <h6 className=' logos d-flex'><img src={metamask} alt="" className='img-fluid h-50'/><span className='mt-1 meta'>METAMASK</span> </h6>
            <h6 className='logos'><img src={openSea} alt="" className='img-fluid h-50'/> OpenSea</h6>
        </div>
    </div>
    <div className='container '>
        <h4 className='text-center mb-3'>Inspiration for your next adventure</h4>
        <Card nftCards={card.reverse()} />
    </div>
    <div className='mt-5 last-div'>
        <div className='container py-3 py-md-5 d-flex flex-column flex-md-row gap-lg-5'>
            <div className='text-white col-md-6 col-lg-4 text-div'>
                <h3 className='mb-2 mb-md-5'>Metabnb NFTs</h3>
                <p className='mb-2 mb-md-5'>
                     Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <button className="btn" id='learn-moreBtn'>Learn More</button>
            </div>
            <div className='outer-div d-flex col-12 col-md-6 ms-auto'>
                <img src={footerall} alt="" className='img-fluid'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home