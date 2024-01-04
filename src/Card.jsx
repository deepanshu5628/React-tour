import { useState } from "react";
import "./Card.css";
function Card ({data,fxnn2}){
    let [readmore,setreadmore]=useState(false);
    let des=data.description;
    des= readmore ?des:`${des.substring(0,100)}`;

    function notintrestedhandler(id){
        fxnn2(id);
    }
    return (
        <div className="Card">
            <img  className="image" src={data.image} alt="img" />
            <p className="price">{data.price}</p>
            <h3 className="name"> <b>{data.name}</b></h3>
            <p className="description">
                {des} 
                <span onClick={()=>setreadmore(!readmore)}>{readmore ? <b>...See less</b> :<b>...Read more</b> }</span>

            </p>
            <button className="btn" onClick={()=>notintrestedhandler(data.id)}>Not Intrested </button>
        </div>
    )
}
export default Card;