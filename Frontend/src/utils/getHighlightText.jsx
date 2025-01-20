
import React from 'react'

const getHighlightText = (text, highlight) => {

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    
    return parts.map((part, i) =>
      regex.test(part) ? <span key={i} className="font-bold">{part}</span> : part
    );
}

export default getHighlightText