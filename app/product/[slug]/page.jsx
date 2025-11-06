"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import Link from "next/link";
import "../../../styles/productDetails.css";
import ThreeBrotherSpeaker from "../../components/ThreeBrotherSpeaker";
import EnjoyMentMan from "../../components/BestAudioMan";
import { useCart } from "@/app/context/CartContext";



export default function ProductPage() {
  const {addToCart, getQuantity} = useCart()
  const {slug}  = useParams();
  const product = useQuery(api.products.getBySlug, {slug});
  const [quantity, setQuantity] = useState(1)

  


  useEffect(()=>{
    if(product){
      const existingQuantity = getQuantity(product.slug)
      if(existingQuantity > 0){
        setQuantity(existingQuantity)
      }
    }
  }, [product, getQuantity])



  if (product === undefined) return <p>Loading product...</p>;
  if (!product) return <h1>Product not found</h1>;
  


  const Decrease =()=>{
    setQuantity((e) => (e > 1 ? e - 1 : 1))
  }
  const Increase = ()=>{
    setQuantity((e)=> e + 1)
  }
  
  const AddToCartContent = ()=>{
     addToCart({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      nickname: product.nickname,
      quantity,
    });
  }

  return (
    <div className="product-container">
      
      <div className="product-header">
        <div className="product-image-wrapper">
          <img
            src={`/${product.image}`}
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <div>
            <div>
                <button onClick={Decrease}>-</button>
                <p>{quantity}</p>
                <button onClick={Increase}>+</button>
            </div>
            <button onClick={AddToCartContent} className="btn">ADD TO CART</button>
          </div>
        </div>
      </div>

      <section className="product-features">
        <div className="features-text">
          <h2>FEATURES</h2>
          <p>{product.features}</p>
        </div>

        <div className="features-box">
          <h2>IN THE BOX</h2>
          <ul>
            {product.box.map((item, i) => (
              <li key={i}>
                <span className="qty">{item.split("x")[0]}x</span>{" "}
                {item.split("x")[1]}
              </li>
            ))}
          </ul>
        </div>
      </section>
      
        <section className="product-gallery">
        <div className="gallery-left">
            {product.gallery.slice(0, 2).map((img, i) => (
              <div key={i}>
                <img key={i} src={`/${img}`} alt={`Gallery ${i + 1}`} />
              </div>
            ))}
        </div>

        <div className="gallery-right">
            <img src={`/${product.gallery[2]}`} alt="Main product mockup" />
        </div>
        </section>


      <section className="related-products">
        <h2>YOU MAY ALSO LIKE</h2>
        <div className="related-grid">
          {product.related.map((r, i) => (
            <div key={i} className="related-item">
              <div><img key={i} src={`/${r.image}`} alt={r.name} /></div>
              <h3>{r.name}</h3>
              <Link href={`/product/${r.slug}`}>
                <button className="btn">SEE PRODUCT</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <ThreeBrotherSpeaker/>
      <EnjoyMentMan />
    </div>
  );
}

