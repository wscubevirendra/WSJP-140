
function ZomotoCard({thumbnail,name,time,rating}) {
    return (
        <div className=" shadow ">
            <img className="rounded-xl" src={thumbnail} alt="" />
            <div className="p-2">
                <div className="flex justify-between my-2">
                    <h3 className="font-medium">{name}</h3>
                    <button className="bg-green-500 px-6 rounded-2xl text-white font-bold">{rating}</button>
                </div>
                <p className="text-red-500">Opens at {time}</p>
            </div>

        </div>
    )
}


export default ZomotoCard