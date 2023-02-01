import React, {useState} from 'react'
import destinationContext from './destinationContext'

const Destination = (props)=> {
   const search = {
      "key": "domain",
      "s1":""
   }

    const [destination, setDestination] = useState(search);

     return(
        <destinationContext.Provider value={{destination, setDestination}}>{props.children}</destinationContext.Provider>
     )
}

export default Destination;