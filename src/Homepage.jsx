import "./Homepage.css"
import { useState } from "react";
import Cardsection from "./Cardsection";
import tourdata from "./data.js"
function Homepage(){
    let [tour,settour]=useState(tourdata);

    function fxn1(id){
        let keyidd=id;
        let filteredarr=tour.filter((tourr)=>tourr.id !=id);
        settour([...filteredarr]);
    }
    if(tour.length===0){
        return (
            <div>
            <h3>Refersh to see more</h3>
            <button onClick={()=>settour(tourdata)}>Refresh</button>
            </div>
        )
    }
    return (
        <div className="Homepage">
            <div>
                 <h2 className="mainheading">Plan you trip</h2>
            </div>
                 <Cardsection data={tour} fxnn1={fxn1}/>
        </div>
    )
}

export default Homepage;