import {useState, useEffect} from "react";
import "./Products.css";
import Product from "./Product";
import axios from "axios";

function Products(){
    let [products, setProducts] = useState([]);

    useEffect(() => {
      getAllProducts();
    }, []);

    const getAllProducts = () => {
      axios.get("https://fakestoreapi.com/products").then(function(d){
        // console.log(d)
        setProducts(d.data)
      }).catch(function(){})
    }
    const getElectronicsData = () => {
      axios.get("https://fakestoreapi.com/products/category/electronics").then(function(d){
        // console.log(d)
        setProducts(d.data)
      }).catch(function(){})
    
    }
    const getJeweleryData = () => {
      axios.get("https://fakestoreapi.com/products/category/jewelery").then(function(d){
        // console.log(d)
        setProducts(d.data)
      }).catch(function(){})
    }
    const getMensCData = () => {
      axios.get("https://fakestoreapi.com/products/category/men's clothing").then(function(d){
        // console.log(d)
        setProducts(d.data)
      }).catch(function(){})
    }
    const getWomensCData = () => {
      axios.get("https://fakestoreapi.com/products/category/women's clothing").then(function(d){
        // console.log(d)
        setProducts(d.data)
      }).catch(function(){})
    }
    return(
        <div className="products">
           <div className="radioSection">
           <div className="form-check form-check-inline">
            <input onChange={getAllProducts}
            defaultChecked
            name="category"
            type="radio"
            className="form-check-input"
        />
        <label class="form-check-label">ALL</label>
      </div>
      <div className="form-check form-check-inline">
        <input 
        onChange={getElectronicsData} 
        name="category" 
        type="radio" 
        className="form-check-input" 
        />
        <label class="form-check-label">Electronics</label>
      </div>
      <div className="form-check form-check-inline">
        <input 
        onChange={getJeweleryData} 
        name="category" 
        type="radio" 
        className="form-check-input" 
        />
        <label class="form-check-label">Jewelery</label>
      </div>
      <div className="form-check form-check-inline">
        <input 
        onChange={getMensCData} 
        name="category" 
        type="radio" 
        className="form-check-input" 
        />
        <label class="form-check-label">MensClothing</label>
      </div>
      <div className="form-check form-check-inline">
        <input 
        onChange={getWomensCData} 
        name="category" 
        type="radio" 
        className="form-check-input" 
        />
        <label class="form-check-label">WomensClothing</label>
      </div>
            <div className="productsSection">
                {
                    products.map(function(element, index){
                     
                      return (<Product 
                                title={element.title} 
                                image={element.image} 
                                price={element.price} 
                                category={element.category} 
                                id={element.id} 
                                />);
                    })
                }
            </div>
           </div>
       </div>
    );
}
export default Products;
