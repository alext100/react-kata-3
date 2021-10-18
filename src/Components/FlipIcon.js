import { useState } from "react";

const FlipIcon = ({ icon1, icon2 }) => {
    const [iconToShow, setIconToShow] = useState(icon1);
    const actionOnClick = () => {
        setIconToShow(iconToShow === icon1 ? icon2 : icon1);
    }

    return <i className={`fas ${iconToShow}`} onClick={actionOnClick}></i>
}
export default FlipIcon;