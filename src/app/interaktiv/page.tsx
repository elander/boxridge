"use client"
import { useState } from "react";

type KnappProps = {
    handleClick: () => void;
    count: number;
};

export function Knapp(props: KnappProps) {
        
    return (
        <button onClick={props.handleClick}>Du har klickat {props.count} gånger på mig</button>
    );
}

export default function Interaktiv() {
    const [ count, setCount ] = useState( 0 );
    function handleClick(){
        setCount(count + 1);
    }
    return (
        <div>
            <Knapp handleClick={handleClick} count={ count } /><br />
            <Knapp handleClick={ handleClick } count={ count }/>
        </div>
    );
}