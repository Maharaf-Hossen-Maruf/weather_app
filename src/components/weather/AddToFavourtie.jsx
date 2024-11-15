import { useContext, useEffect, useState } from "react";
import red_Heart from "../../assets/heart-red.svg";
import heart from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

export default function AddToFavourtie() {
  const { addToFavourites, removeFromFavouites, favroites } =
    useContext(FavouriteContext);
  const {weather} = useContext(WeatherContext)
  const {latitude,longitude,location} = weather
  const [isFavourite, toogleFavourite] = useState(false);

  function handleFavrouite() {
    const found =  favroites.find((fav)=>fav.location === location)
    if(!found){
      addToFavourites(latitude,longitude,location)
    }else{
      removeFromFavouites(location)
    }
    toogleFavourite(!isFavourite);
  }
  useEffect(()=>{
    const found =  favroites.find((fav)=>fav.location === location)
    toogleFavourite(found)
  },[])
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavrouite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? red_Heart : heart} alt="" />
        </button>
      </div>
    </div>
  );
}
