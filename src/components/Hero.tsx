"use client"
import { useState } from "react";
export function Hero( { children }: { children: React.ReactNode; } ) {
    const initialState = false;
    const [ state, setState ] = useState( initialState );
    
    return (
        <div>
            {children}
        </div>
    );
}
