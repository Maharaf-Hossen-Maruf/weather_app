import { FavouriteContext } from "../context"
import { useLocalStorage } from "../hooks"

const FavourtieProvider = ({Children}) => {
    const [favroites,setFavroites] =  useLocalStorage('favroites',[])

    const addToFavourites = (latitude,longitude,location) => {
        setFavroites(
            ...favroites,
            {latitude:latitude,longitude:longitude,location:location}
        )
    }

    const removeFromFavouites = (location)=>{
        const restFavourites = favroites.filter(
            (fav) => fav.location !== location
        )
        setFavroites(restFavourites)
    }

    return(
        <FavouriteContext.Provider value={{addToFavourites,removeFromFavouites,favroites}}>
            {Children}
        </FavouriteContext.Provider>
    )
}

export default FavourtieProvider