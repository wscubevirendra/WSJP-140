import Card from "./Card";

function App() {
  return (
    <div className="w-7xl p-4 grid grid-cols-4 gap-4">
      <Card name="Mahesh" age="23" color="bg-red-300 " />
      <Card name="Rohit" age="24" color="bg-green-300" />
      <Card name="Mayank" age="34" color="bg-yellow-300" />
      <Card name="Happy" age="09" color="bg-pink-300" />
      <Card name="Vihaan" age="10" color="bg-sky-300" />
      <Card name="Akshay" age="29" color="bg-teal-300" />
      <Card name="Pooja" age="15" color="bg-red-300" />
      <Card age="25" />

    </div>
  )
}

export default App;