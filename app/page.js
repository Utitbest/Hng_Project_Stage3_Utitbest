import Image from "next/image";
import "../styles/Home.css"
import EnjoyMentMan from "./components/BestAudioMan";
import ThreeBrotherSpeaker from "./components/ThreeBrotherSpeaker";
import Link from "next/link";

export default function Home() {
  return (
    <section id="Home">
      <div id="HomePage">
        <div className="HeroContent">
          <div>
            <article>NEW PRODUCT</article>
            <h1>XX99 Mark II <br></br>Headphones</h1>
            <p>
              Experience natural, lifelike audio and exceptional build
              quality made for the passionate music enthusiast.
            </p>

            <div>
              <Link className="helo" href="/product/xx99-mark-ii">
                <button>See Product</button>
              </Link>
            </div>
          </div>
        </div>


        <div className="upmand">
          <img src="/HeroImg.png"  alt="Hero PIcture default" />
        </div>
      </div>
      
      <ThreeBrotherSpeaker />

      <div className="ZX9SPEAKER">
        <div className="ZX9SPEAKER_Secondparent">
          <div className="ZX9SPEAKER_heroImg">
              <div>
                <img src="hometheater.png" alt="ZX9SPEAKER_heroImg"/>
              </div>
          </div>

          <div className="ZX9SPEAKER_writeup">
            <h1>ZX9<br />SPEAKER</h1>
            <p>Upgrade to premium speakers that are <br />phenomenally built to deliver truly remarkable sound.</p>
            <div>
              <Link className="bg-black text-white p-2 cursor-pointer" href="/product/zx9-speaker">
                <button>See Product</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="YX1EARPHONES">
        <div className="YX1EARPHONES_lines">
          <div>
            <h1>ZX7 SPEAKER</h1>

            <div>
              <Link className="p-2 border-black border-2 cursor-pointer" href="/product/zx7-speaker">
                <button>See Product</button>
              </Link>
            </div>
          </div>
          {/* <img src="tablespeaker.png" alt="YX1EARPHONES_Imgage" /> */}
        </div>

        <div className="YX1EARPHONES_twobrothers">
          <div className="smartchargingpod">
            <img src="smartchargingpod.png" alt="smartchargingpod"/>
          </div>
          <div className="smartBrotherElement">
              <h1>YX1 EARPHONES</h1>
              <div>
                <Link className="p-2 border-black border-2 cursor-pointer" href="/product/yx1-wireless">
                  <button>See Product</button>
                </Link>
              </div>
          </div>
        </div>
      </div>
      <EnjoyMentMan/>
    </section>
  );
}
