import FoodList from "./components/FoodList";
import Menu from "./components/Menu";
import MyOrder from './components/MyOrder';
import { useState ,useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import"./App.css";
function App() {

  let [foodInCart,setFoodInCart]=useState([]);
  let [foodItems,setFoodItems]=useState([]);
    async function getfoodItems() {
        fetch('./Food.json')
            .then(function(res){
                return res.json()
            })
            .then(data => {
                // console.log(data)
                let parsedData = data.foodItems;
                setFoodItems(parsedData)
            })
            .catch(error => console.error(error))
    }
    useEffect(() => {
        getfoodItems();
    }, [])  //runs only once
    
  return (
    <Router>
    <div className="container-fluid">
      <div className="row">
        
        <Switch>
        <Route exact path="/">
          <div className="col-md-2 menuDiv " ><Menu/></div>
          <div className="col-md-7 my-5"><FoodList cartItems={foodInCart} updateCart={setFoodInCart} allItems={foodItems} updateFoodItems={setFoodItems}/></div>
          <div className="col-md-3 my-5"><MyOrder cartItems={foodInCart} updateCart={setFoodInCart} allItems={foodItems} updateFoodItems={setFoodItems} function='checkout'/></div>
        </Route>
        <Route exact path="/checkout">
          <div className="col-md-4"></div>
          <div className="col-md-4">
          <MyOrder cartItems={foodInCart} updateCart={setFoodInCart} allItems={foodItems} updateFoodItems={setFoodItems} function='Payment'/>
          </div>
          <div className="col-md-4"></div>
          </Route>
        </Switch>
        
    </div>
    </div>
    </Router>
  );
}

export default App;
