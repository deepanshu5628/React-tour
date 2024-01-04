import "./Cardsection.css"
import Card from "./Card";
function Cardsection ({data ,fxnn1}){
    function fxn2(id){
        fxnn1(id);
    }
    return (
        <div className="Cardsection">
            {data.map((tourcard)=>{
                return <Card key={tourcard.id} data={tourcard} fxnn2={fxn2}/>
            })}
        </div>
    )
}

export default Cardsection;