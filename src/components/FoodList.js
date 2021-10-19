import { useState } from "react";
import "../foodList.css";
import FoodItem from "./FoodItem";
export default function FoodList(props){
    function addToCartClick(foodItemNo){  //when heart is clicked call a function to change state of that fooditem's variable
                                                    //getting input of food index,using that we change state
        const findItemIndex=(element)=>element.foodIndex===foodItemNo;
        let indexFound=props.allItems.findIndex(findItemIndex);
        let stateItems=props.allItems.slice();
        let updateElement={...stateItems[indexFound]};
        if(updateElement.inCart){  //reomoving food
            updateElement.inCart=false;
        }else{
            console.log("inside add")  //adding food
            updateElement.inCart=true;
        }
        stateItems[indexFound]=updateElement;
        props.updateFoodItems(stateItems);
        if(updateElement.inCart){
            //add
            const newItem = [...props.cartItems, updateElement];
            props.updateCart(newItem);
            console.log(props.cartItems);
        }else{
            //remove from cartItems
            const newItem = [...props.cartItems];
            const findItemIndex=(element)=>element.foodIndex===foodItemNo;
            let indexFound=newItem.findIndex(findItemIndex);
            newItem.splice(indexFound, 1);
            props.updateCart(newItem)
        }
    }
    return(
        <>
        <h2 className="heading">Add Food Items in Your Cart</h2> 
        <div className="flexContainer my-5">
        {props.allItems.map((element)=>{  
        return <div key={element.foodIndex}>
        <FoodItem data={props.allItems} foodIndexPass={element.foodIndex} foodItemNamepass={element.foodItemName} portionSizepass={element.portionSize} ratingpass={element.rating} ratepass={element.rate} imagePathpass={element.imagePath} inCartpass={element.inCart} functionAddToCart={addToCartClick} />
      </div>})
      }
      </div>
        </>
    )
}