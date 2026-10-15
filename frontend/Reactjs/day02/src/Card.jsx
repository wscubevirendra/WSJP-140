function Card({ name = "Dummy", age = "0", color = "bg-yellow-200" }) {

    return (
        <div className={`shadow p-4 ${color}  space-y-4 rounded-sm`}>
            <h3>Name:{name}</h3>
            <h4>Age:{age}</h4>
            <h4>For Vote:{age >= 18 ? "Eligible" : "Not Eligible"}</h4>
            <button></button>
        </div>
    )
}

export default Card