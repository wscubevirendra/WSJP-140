import { useState } from "react"
function Card() {
    const [toggle, setToggle] = useState(true);

    function Handler() {
        setToggle(!toggle)
    }



    return (
        <div className={`p-4 ${toggle ? "bg-black text-white" : 'bg-white text-black'}    flex text-5xl justify-center  shadow`}>

            <button onClick={Handler} >{toggle ? "ON" : "OFF"}</button>


        </div>
    )
}

export default Card