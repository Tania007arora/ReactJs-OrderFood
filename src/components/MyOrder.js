import "../myorder.css";
import CheckoutButton from "./CheckoutButton";
import OrderItem from "./OrderItems";

export default function MyOrder(props) {

    function updateCartItems(foodItemNo){
        //setting value false in allitems json
        let findItemIndex=(element)=>element.foodIndex===foodItemNo;
        let indexFoundItems=props.allItems.findIndex(findItemIndex);
        console.log(indexFoundItems);
        let stateItems=props.allItems.slice();
        let updateElement={...stateItems[indexFoundItems]};
        if(updateElement.inCart===true){
            updateElement.inCart=false;}
        console.log(updateElement)
        stateItems[indexFoundItems]=updateElement;
        props.updateFoodItems(stateItems);
            //removving element from cart
        console.log(props.cartItems)
        const newItem = [...props.cartItems].slice();
        let indexFound=newItem.findIndex(findItemIndex);
        newItem.splice(indexFound, 1);
        console.log(newItem)
        props.updateCart(newItem)  
        console.log(props.cartItems)
        
    }
    let summOfAmount=0.00;
    if(props.cartItems){summOfAmount=(props.cartItems.reduce((ans,element)=>ans+element.rate,0.00))}else{summOfAmount=0.00}
    return (
        <>
            <h3 className="HeadingOrder">My Order</h3>
            <div className="ordersList my-5">
                {props.cartItems.map((element) => {  
                    return <div key={element.foodIndex}>
                        <OrderItem cancelItem={updateCartItems}foodIndexPass={element.foodIndex} foodItemNamepass={element.foodItemName} portionSizepass={element.portionSize} ratingpass={element.rating} ratepass={element.rate} imagePathpass={element.imagePath} inCartpass={element.inCart} />
                    </div>
                })}

            </div>
            <div className="container1">  
                <span>Total</span>
                <span className="total">${summOfAmount.toFixed(2)}</span>
            </div>
            <hr></hr>
            <CheckoutButton cartItemspass={props.cartItems} functionality={props.function}/>
        </>
    )
}