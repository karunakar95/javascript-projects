const hearts = document.querySelector(".hearts");

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100+ "vw";
    heart.style.animationDuration = Math.random()* 2 + 3 +"s";
    heart.innerHTML="💜";
    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(() => {
    createHeart();
}, 100);
