import React, {useState} from 'react'
import destinationContext from './destinationContext'

const Destination = (props)=> {

    const [destination, setDestination] = useState("");

     return(
        <destinationContext.Provider value={{destination, setDestination}}>{props.children}</destinationContext.Provider>
     )
}

export default Destination;