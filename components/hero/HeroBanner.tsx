"use Client"

import Button from "../common/Button";

export default function HeroBanner(){
    return(
        <div className="flex flex-col text-white rounded-xs">
            <h1 className="text-9xl ">Earth’s Exhale</h1>
            <p className="text-2xl">"Earth Exhale" symbolizes the purity and vitality of the Earth's natural<br/> environment and its essential role in sustaining life.</p>
            <div className="flex m-2">
            <Button/>
            <button className="width-34 height-34 rounged-lg">icon</button>
            <p>Play demo</p>
            </div>       
        </div>
    )
}