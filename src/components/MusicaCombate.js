import React from "react";
import combate from "../audio/"

export default function MusicaCombate(props){

    const audio = new audio(combate);
    audio.loop = true;
    audio.play();
}