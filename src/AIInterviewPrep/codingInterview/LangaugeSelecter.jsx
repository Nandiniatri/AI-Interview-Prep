import { LANGUAGE_VERSION } from "../../contants";
import "./CodingINterview.css";

const LanguageSelecter = ({ onSelect, language }) => {
    const languages = Object.entries(LANGUAGE_VERSION);

    return (
        <>
            <select value={language} onChange={(e) => onSelect(e.target.value)}
                className="language-select"
            >
                {languages.map(([name, version]) => (
                    <option key={name} value={name}>
                        {name} ({version})
                    </option>
                ))}
            </select>
        </>
    )
}

export default LanguageSelecter;