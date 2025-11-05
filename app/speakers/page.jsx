import React from "react";
import "../../styles/speaker.css"
import ProductCard from "../components/ProductCard";
import ThreeBrotherSpeaker from "../components/ThreeBrotherSpeaker";
import EnjoyMentMan from "../components/BestAudioMan";
import HeaderName from "../components/TagName";


export default function Speaker(){
    return(
        <section id="speaker">
            <HeaderName title="SPEAKERS"/>
            <div className="cardwrapper">
                <ProductCard
                    newproduct="NEW PRODUCT"
                    title="ZX9 SPEAKER"
                    description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
                    image="hometheater.png"
                    buttonText="See Product"
                    isImageFirst={true}
                    productLink="/product/zx9-speaker"
                />
                <ProductCard
                    title="ZX7 SPEAKER"
                    description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
                    image="standardspeaker.png"
                    buttonText="See Product"
                    productLink="/product/zx7-speaker"
                />
            </div>
            <ThreeBrotherSpeaker /> 
            <EnjoyMentMan />
        </section>
    )
}