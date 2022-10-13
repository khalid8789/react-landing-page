import React from 'react'
import "./Details.css"
import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

function Details() {
  return (
    <div className='wrapper'>
        <section className="grid"> 
           <h3>
           "We roast the richest, most flavourful coffees and cakes on earth, while striving to make the world a better place."
           </h3>

           <div className="grid-items">
            <div>
                <img src={image2} alt="" />
                <h4>Keeping Quality And Quatity</h4>
                <p>Fresh from the farm to your kitchen!</p>
            </div>
            <div>
                <img src={image1} alt="" />
                <h4>Best Coffee Recipes</h4>
                <p>If you love coffee,you will love this collection of our favourit recipes ever</p>
            </div>
            <div>
                <img src={image3} alt="" />
                <h4>Your Lover's Choice</h4>
                <p>Come And Enjoy With Your Family And Friends Today!</p>
            </div>
           </div>

        </section>
    </div>
  )
}

export default Details