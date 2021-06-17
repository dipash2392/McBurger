import React from 'react'
import "./input.css"
import FavoriteIcon from '@material-ui/icons/Favorite';

function InputBox() {
    return (
        <div>
            <input className="inputBox" type="text" placeholder="Search for dishes" />
            <span>
                <input type="checkbox" value="Veg" /><b>Veg Only</b>
            </span>
            <span class="material-icons">
                <FavoriteIcon />
                 <b>Favourite</b>
            </span>
  
        </div>
        
    )
}

export default InputBox
