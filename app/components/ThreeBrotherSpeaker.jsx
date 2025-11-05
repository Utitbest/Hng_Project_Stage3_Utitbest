import React from "react"
import Image from "next/image"
import Link from "next/link"
export default function ThreeBrotherSpeaker(){
    return(
        <div className="threeSpeekers">
          <div>
              <div>
                <span>
                  <Image src="/gblheadset.png" alt="gblheadset" width={100} height={100}/>
                </span>
                <div>
                  <h3>HEADPHONES</h3>
                  <div>
                    <Link href="/product/xx99-mark-i">
                      SHOP 
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.707153 0.707092L5.70715 5.70709L0.707153 10.7071" stroke="#D87D4A" strokeWidth="2"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <span>
                  <Image src="/hometheater.png" alt="hometheater" width={100} height={100}/>
                </span>
                <div>
                  <h3>SPEAKERS</h3>
                  <div>
                    <Link href="/product/zx9-speaker">
                      SHOP 
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.707153 0.707092L5.70715 5.70709L0.707153 10.7071" stroke="#D87D4A" strokeWidth="2"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <span>
                  <Image src="/earchip.png" alt="earchip" width={100} height={100}/>
                </span>
                <div>
                  <h3>EARPHONES</h3>
                  <div>
                    <Link href="/product/yx1-wireless">
                      SHOP 
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.707153 0.707092L5.70715 5.70709L0.707153 10.7071" stroke="#D87D4A" strokeWidth="2"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
          </div>
      </div>
    )
}