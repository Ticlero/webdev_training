const bgBody = document.querySelector("body");
const IMG_NUMBER = 1;

const handleImageLoad = () =>{
    console.log("finished loading");
}

const paintImate = (imgNum) =>{
    const image = new Image();
    image.src = `./img/${imgNum}.jpg`;
    image.classList.add("bgImage");
    bgBody.appendChild(image);

    
}

const generateRandomNum = () =>{
    const number = (Math.floor(Math.random() * 7)) + 1;
    return number;
}
const bdInit = () =>{
    const randomNumber = generateRandomNum();
    paintImate(randomNumber);
}

bdInit()