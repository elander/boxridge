import  { Meny, Logga,Footer, Herotext }  from "../../components/exempelsida-komponenter";   
import { Hero } from "@/components/Hero";




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
