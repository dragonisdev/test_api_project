import React, { useRef } from 'react'


//import utils

import { fetchHeroes } from '../utils/utils';

export default function Searchbar({setter}) {
        let input = useRef("")

        const handClick = async (e) => {
          e.preventDefaukt()
          let value = input.current.value 
          if (value === "") return
          
          try {
            let heroes = await fetchHeroes(value)
            setter(heroes) 
          } catch(err) {
            return console.error(err)
          }
        };

    return (
    <form>
        <input type="text" placeholder="Search Name..." ref={input}/>
        <button onClick={handClick}>Search</button>
    </form>
  )
}
