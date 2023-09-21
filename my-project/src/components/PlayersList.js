import React from "react";
import DataPlayer from "../Players";
import Player from "../Player";
const Score=()=>{
    return(
        <>
        <div className="grid-cols-1 sm:grid md:grid-cols-3  w-[70%] ml-[15%] h-[auto] place-content-center ">
        {
            DataPlayer.map((data)=>(
                <Player {...data} />
            ))
        }
        </div>
        </>
    )
}
export default Score;
