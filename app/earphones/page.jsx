import React from "react";
import "../../styles/speaker.css"
import ProductCard from "../components/ProductCard";
import ThreeBrotherSpeaker from "../components/ThreeBrotherSpeaker";
import EnjoyMentMan from "../components/BestAudioMan";
import HeaderName from "../components/TagName";


export default function Speaker(){
    return(
        <section id="speaker">
            <HeaderName title="EARPHONES"/>
            <div className="cardwrapper">
                <ProductCard
                    newproduct="NEW PRODUCT"
                    title="YX1 WIRELESS EARPHONES"
                    description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
                    image="earchip.png"
                    buttonText="See Product"
                    isImageFirst={true}
                    productLink="/product/yx1-wireless"
                />
                
            </div>
            <ThreeBrotherSpeaker /> 
            <EnjoyMentMan />
        </section>
    )
}