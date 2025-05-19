import  { Meny, Hero,Logga,Footer, Herobild, Herotext }  from "../../components/exempelsida-komponenter";   




export default function Exempelsida() {
    
    return (
        <>
            <Logga />
            <Meny />
            <Hero>
                <>
                    <Herotext />
                </>
            </Hero>
            <Footer >
                <div>hejsan</div>
                </Footer>
        </>
    );
}
