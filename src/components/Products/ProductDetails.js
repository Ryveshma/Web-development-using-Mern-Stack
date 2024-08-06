import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import axios from "axios";

function ProductDetails() {
    let {id} = useParams();
    let [state, setState] = useState({
        id:null,
        title:null,
        description:null,
        price:null,
        category:null,
        image:"",
        rating:{rate:null,count:null},
    });

    useEffect(()=>{
        getproductData();
    },[]);

    const getproductData = () => {
        axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((productInfo)=>{
            setState(productInfo.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("Error while getting specific product data");
        });
    }
    return (
        <div className="productDContainer p-3">
            <div className="imageContainer">
                <img src={state.image} width={"100%"} height={"80%"} />
                </div>
            <div className="contentContainer">
                <dl>
                    <dt>Product Title</dt>
                    <dd>{state.title}</dd>
                    <dt>Price</dt>
                    <dd>{state.price}</dd>
                    <dt>Description</dt>
                    <dd>{state.description}</dd>
                    <dt>Category Name</dt>
                    <dd>{state.category}</dd>
                    <dt>Rating</dt>
                    <dd>{state.rating.rate}</dd>
                </dl>
                <button className="btn btn-outline-dark">Add to cart</button>
            </div> 
        </div>
    );  
} 
export default ProductDetails;