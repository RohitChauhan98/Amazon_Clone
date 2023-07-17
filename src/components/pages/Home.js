import React from 'react'
import Carousel from '../Carousel'
import Cards from '../Cards'
import './Home.css'
import { cardData, frontPageProducts } from '../CardData'
import Footer from '../Footer'
import ProductCard from '../ProductCard'





function Home() {

    return (
        <div className='home'>

            <Carousel />
            <div className='cardTray'>
                {cardData.map((card) => (
                    <Cards key={card.id} title={card.title} img1={card.img1} img2={card.img2} img3={card.img3} img4={card.img4}
                        name1={card.name1} name2={card.name2} name3={card.name3} name4={card.name4} />
                ))}
            </div>
            
            <div className='homeCards'>
                {frontPageProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        images={product.img}
                        name={product.productName}
                        ratings={product.rating}
                        star={product.star}
                        price={product.price}
                    />
                ))}
            </div>



            <Footer className='footer' />
        </div>
    )
}



export default Home