import { createContext } from "react";
import img1 from '../assets/images/metaBnb1.png'
import img2 from '../assets/images/metaBnb2.png'
import img3 from '../assets/images/metaBnb3.png'
import img4 from '../assets/images/metaBnb4.png'
import img5 from '../assets/images/metaBnb5.png'
import img6 from '../assets/images/metaBnb6.png'
import img7 from '../assets/images/metaBnb7.png'
import img8 from '../assets/images/metaBnb8.png'
import img9 from '../assets/images/metaBnb9.png'
import img10 from '../assets/images/metaBnb10.png'
import img11 from '../assets/images/metaBnb11.png'
import img12 from '../assets/images/metaBnb12.png'
import img13 from '../assets/images/metaBnb13.png'
import img14 from '../assets/images/metaBnb14.png'
import img15 from '../assets/images/metaBnb15.png'
import img16 from '../assets/images/metaBnb16.png'

const cardContext = createContext()

export const CardProvider = ({children}) => {
    const nftCards = [
        {id:1, image: img1, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:2, image: img2, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:3, image: img3, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:4, image: img4, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:5, image: img5, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:6, image: img6, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:7, image: img7, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:8, image: img8, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:9, image: img9, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:10, image: img10, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:11, image: img11, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:12, image: img12, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:13, image: img13, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:14, image: img14, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:15, image: img15, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
        {id:16, image: img16, name: 'Desert King', distance: '2345km away', available: 'available for 2weeks stay', price: '1MBT per night'},
    ]


    return <cardContext.Provider value={{
        nftCards,
    }}>
        {children}
    </cardContext.Provider>
}

export default cardContext