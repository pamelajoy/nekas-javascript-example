const changeBoxColor = (box) => {
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
    const box = document.getElementById("changeColor");
    changeBoxColor(box);

    const textElements = document.getElementsByClassName("changeText");
    const arrayOfTextElements = Array.from(textElements);
    changeTextColor(arrayOfTextElements);
}

