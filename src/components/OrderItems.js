import "../orderitem.css"
export default function OrderItem(props) {
    let index=props.foodIndexPass;
    
    return (
        <>
            <div className="row orderBox my-2">
                <div className="container-fluid">
                    <span className="col-lg-2 ">
                        <img src={props.imagePathpass} alt="not found" className="imageOrder"></img>
                    </span>
                    <span className="col-lg-3">
                        <span className="foodName mx-3">{props.foodItemNamepass}</span>
                    </span>
                    <span className="col-lg-3 mx-1">1</span>
                    <span className="col-lg-3 priceOrder mx-4">${props.ratepass}</span>
                    <span className="col-lg-1">
                        <span aria-hidden="true" onClick={()=>props.cancelItem(index)} className="justify-content-end" id="cancel">&times;</span>
                    </span>
                </div>

            </div>
        </>
    )
}