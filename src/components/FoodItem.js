import "../foodItem.css";
export default function FoodItem(props){
    let index=props.foodIndexPass;
    
    return(
        <div className="foodBox my-3">
            <div className="container1">
                <div>
                <span className="position-absolute my-2 mx-1  badge rounded-pill bg-dark rating">{props.ratingpass}
                <span className="fa fa-star checked "></span></span>
                </div>
                <div className="heartTag my-1 mx-1"  onClick={()=>{props.functionAddToCart(index);console.log(props.inCartpass)}}><i  id="heart"  className={` circleTag fa fa-heart ${props.inCartpass? "heartSelect":""}`}></i></div>
           </div>
           <div className="d-flex justify-content-center">
                    <img src={props.imagePathpass} alt="not found" className="image col-md-6"></img> 
           </div>
           <div className="container">
               <span className="foodName">{props.foodItemNamepass}</span>
               <span className="position-absolute my-1 mx-1 badge rounded-pill bg-light portion">{props.portionSizepass}g</span>
           </div>
           <div className="container">
               <span className="price">${props.ratepass}</span>
           </div>
        </div>
    );
}