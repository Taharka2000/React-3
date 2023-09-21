import React from "react";
function Player({ image, nom, team, nationality, jerseyNumber, age }) {
    return (
        <>
            <div class=" ">
                <div class="mx-3 mt-6 w-# flex flex-col rounded bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                    <img
                        class="rounded-t-lg h-[350px] w-[250px] ml-[22%] "
                        src={image}
                        alt="Player" />
                    <div class=" bg-zinc-400 rounded ">
                        <h2
                            class=" text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                           Name: {nom}
                        </h2>
                        <h2 class=" text-base font-bold ">
                            Nationality:{nationality}
                        </h2>
                        <h2>
                            Team:{team}
                        </h2>
                        <h2>
                            JerseyNumber:{jerseyNumber}
                        </h2>
                        <h2>
                            Age:{age}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Player;