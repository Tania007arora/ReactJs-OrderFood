import { useHistory } from "react-router-dom";
export default function CheckoutButton(props){

    let history=useHistory();
    function checkout(){
    history.push("/checkout");
    }
    return(
        <div className="d-flex justify-content-center"> 
            <button disabled={props.cartItemspass.length===0?true:false} type="button" className="btn btn-success" onClick={checkout}>{props.functionality}</button>
        </div>
    )
}