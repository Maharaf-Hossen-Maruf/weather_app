import { FavouriteContext } from "../context"
import { useLocalStorage } from "../hooks"

const FavourtieProvider = ({children}) => {
    const [favroites,setFavroites] =  useLocalStorage('favroites',[])

    const addToFavourites = (latitude,longitude,location) => {
        setFavroites(
            [...favroites,
            {latitude:latitude,longitude:longitude,location:location}
        ])
    }

    const removeFromFavouites = (location)=>{
        const restFavourites = favroites.filter(
            (fav) => fav.location !== location
        )
        setFavroites(restFavourites)
    }
    // console.log(<div><h2>rafee testing</h2></div>);
    
    return(
        <FavouriteContext.Provider value={{addToFavourites,removeFromFavouites,favroites}}>
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavourtieProvider