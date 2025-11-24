import "./header.scss";

import brazil from "../../assets/bandeiras/brazil.png"
import eua from "../../assets/bandeiras/eua.png"
import spanish from "../../assets/bandeiras/spanish.png"

/* const bits = "01000010 01110010 01111001 01100001 01101110";
const bitsSemEspacos = bits.replace(/\s+/g, "");
const listaDeBits = bitsSemEspacos.split("");

<div className="binarie">
    {listaDeBits.map((bit, index) => (
        <p key={index}>{bit}</p>
    ))}

</div> */

const Header = () => {
    return (
        <header>
            <h1>
                Portfolio
            </h1>
            <div className="languages-container">
                <h2>
                    Language:
                </h2>
                <div className="languages">
                    <img src={brazil} alt="English" />
                    <img src={eua} alt="Português" />
                    <img src={spanish} alt="Español" />
                </div>
            </div>
        </header>
    )
}

export default Header;