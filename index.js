const changeBoxColor = (box) => {
    /** 
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/className
     * The name className is used for this property instead of class 
     * because of conflicts with the "class" keyword in many languages which are used to manipulate the DOM.
     */
    if (box.className === 'box blueviolet-box'){
        box.className = 'box yellow-box';
    } else {
        box.className = 'box blueviolet-box';
    }
}
const changeTextColor = (textArray) => {
    textArray.forEach( textElement => {
        if (textElement.className === 'changeText blueviolet-text'){
            textElement.className = 'changeText yellow-text';
        } else {
            textElement.className = 'changeText blueviolet-text';
        }
    })
}

const changeColor = () => {
    /**
     * There may only be 1 element with any given ID on a page, so this is very specific and will return 1 element
     */
    const box = document.getElementById("changeColor");
    changeBoxColor(box);

    /**
     * Many elements on a page can share a class, this will return all of those elements. 
     * It will always return an HTMLCollection, even if there is only 1.
     */
    const textElements = document.getElementsByClassName("changeText");
    
    /**
     * HTMLCollections may look like an array, but they are not. 
     * We are converting it into an array here so that we can run an array method on it (forEach)
     */
    const arrayOfTextElements = Array.from(textElements);
    
    changeTextColor(arrayOfTextElements);
}

