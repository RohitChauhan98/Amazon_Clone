import React from 'react'
import './Card.css'

export function Cards(props) {
    return (
        <div className='card'>
            <h5 style={{marginBottom: '20px'}}>{props.title}</h5>
            <div className="grid-container">

                <div>
                    <img src={props.img1} alt="can't load" />
                    <p>{props.name1}</p>
                </div>
                <div>
                    <img src={props.img2} alt="can't load" />
                    <p>{props.name2}</p>
                </div>
                <div>
                    <img src={props.img3} alt="can't load" />
                    <p>{props.name3}</p>
                </div>
                <div>
                    <img src={props.img4} alt="can't load" />
                    <p>{props.name4}</p>
                </div>




            </div>
        </div>
    )
}

export default Cards;