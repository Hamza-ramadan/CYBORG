import React from './Card.css';
// import {FaStar} from 'react-icons/fa'
// import { FaStar } from "react-icons/fa";
const Card = (props) => {
    return (
        <div className="boxn">
                        <div className="cardd">
                            <img src={props.photo} alt="" />
                            <div className="card-title">
                                <h4>{props.title}<br/><span>Sandbox</span></h4>
                                <ul>
                                    <li> <i className="fa-solid fa-star star11"> </i> 4.8</li>
                                    <li><i  className="fa fa-download dawn11"> </i> 2.3M</li>
                                </ul>
                            </div>
                        </div>
                    </div>
    )
}

export default Card;