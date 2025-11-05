"use client"
import React from "react";
import "../../styles/headphones.css"
import ProductCard from "../components/ProductCard";
import ThreeBrotherSpeaker from "../components/ThreeBrotherSpeaker";
import EnjoyMentMan from "../components/BestAudioMan";
import HeaderName from "../components/TagName";



export default function Headphone(){
    return(
        <>
            <section id="headphone">
                <HeaderName  title="HEADPHONES"/>
                <div className="cardwrapper">
                    <ProductCard
                        newproduct="NEW PRODUCT"
                        title="XX99 Mark II Headphones"
                        description="The pinnacle of pristine audio. Experience natural, lifelike sound and exceptional build quality."
                        image="blackgbl.png"
                        buttonText="See Product"
                        isImageFirst={true}
                        productLink="/product/xx99-mark-ii"
                    />
                    <ProductCard 
                        title="XX99 Mark I Headphones"
                        image="gblheadset.png"
                        description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
                        buttonText="See Product"
                        productLink="/product/xx99-mark-i"
                    />
                    <ProductCard 
                        title="XX59 Headphones"
                        description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
                        buttonText="see product"
                        image="whiteEarPop.png"
                        isImageFirst={true}
                        productLink="/product/XX59"
                    />
                </div> 
                <ThreeBrotherSpeaker /> 
                <EnjoyMentMan />
            </section>
        </>
    )
}