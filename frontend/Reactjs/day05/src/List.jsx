import { useState } from "react";

function List() {
    const [city, setCity] = useState("Jaipur")
    const cities = [
        "Jaipur",
        "Delhi",
        "Mumbai",
        "Pune",
        "Bengaluru",
        "Hyderabad",
        "Chennai",

    ];
    return (
        <div className='w-7xl p-4 mx-auto '>
            <h2>Cities with food delivery</h2>
            <div className='grid grid-cols-4 gap-4'>
                {
                    cities.map((data, index) => {
                      
                        return (
                            <div onClick={()=>setCity(data)} className={`shadow p-4 rounded-2xl ${data==city ? "bg-yellow-500" : "bg-white"} bg-white border`}>
                                Order food online in {data}
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}


export default List

