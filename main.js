const moneroButt = document.querySelector(".monero-butt");
const modal = document.querySelector(".modal-video");
const closeButt = document.querySelector(".close");
const frame = document.querySelector(".video-frame");

moneroButt.addEventListener("click", () => modal.style.display = "block");
closeButt.addEventListener("click", () =>  {
    modal.style.display = "none"
    frame.src = "https://www.youtube.com/embed/H33ggs7bh8M";
});