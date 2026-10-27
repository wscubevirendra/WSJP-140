import { useState } from "react";
import List from "./List";
import ZomotoCard from "./ZomatoCard";

function App() {
  const [restaurants, setRestaurants] = useState([
    {
      thumbnail: "https://b.zmtcdn.com/data/pictures/4/101834/45104b3c2f6c9e72c80dc1ad579d4a23_featured_v2.jpg?output-format=webp",
      name: "Blackout Club & Terrace",
      rating: "4.3",
      time: "6:30pm"
    },
    {
      thumbnail: "https://b.zmtcdn.com/data/pictures/8/18922348/df0ada4a97481750302e3467476a5636_featured_v2.jpg?output-format=webp",
      name: "Retreat",
      rating: "3.5",
      time: "6:30pm"
    },
    {
      thumbnail: "https://b.zmtcdn.com/data/pictures/6/18748726/94aa8a55e92dd3cc815ce5de5c9127b6_featured_v2.jpg?output-format=webp",
      name: "The Night Jar",
      rating: "4.5",
      time: "6:30pm"
    },
    {
      thumbnail: "https://b.zmtcdn.com/data/pictures/6/18748726/94aa8a55e92dd3cc815ce5de5c9127b6_featured_v2.jpg?output-format=webp",
      name: "The Night Jar",
      rating: "4.5",
      time: "6:30pm"
    },
    {
      thumbnail: "https://b.zmtcdn.com/data/pictures/6/18748726/94aa8a55e92dd3cc815ce5de5c9127b6_featured_v2.jpg?output-format=webp",
      name: "The Night Jar",
      rating: "4.5",
      time: "6:30pm"
    }
  ]
  )

  return (
    <div className="w-7xl mx-auro p-4">
      <List />
      <div className="grid grid-cols-3 gap-4">
        {
          restaurants.map((data, index) => {
            return <ZomotoCard key={index} thumbnail={data.thumbnail} name={data.name} rating={data.rating} time={data.time} />
          })
        }

      </div>

    </div>
  )
}

export default App;