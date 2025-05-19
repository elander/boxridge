
export function Meny() {
    return (
        <div>
            <h1>Meny</h1>
        </div>
    );
}

export function Logga() {
    return (
        <div>
            <h1>Logga</h1>
        </div>
    );
}

export function Hero({children}: {children: React.ReactNode}) {
    return (
        <div>
            {children}
        </div>
    );
}
export function Footer({children}: {children: React.ReactNode}) {
    return (
        <div>
            {children}
        </div>
    );
}

export function Herobild() {
    return (
        <div>
            <h1>Bild</h1>
        </div>
    );
}

export function Herotext() {
    return (
        <div>
            <h1>Text</h1>
        </div>
    );
}