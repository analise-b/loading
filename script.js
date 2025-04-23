const wrapper = document.getElementById("wrapper");
const original = document.getElementById("original");
const overlay = document.getElementById("overlay");
const sliderBar = document.getElementById("sliderBar");

const napoleon = document.getElementById("napoleon");
const napoleonThug = document.getElementById("napoleonThug");
const napoleonSlideBar = document.getElementById("napoleonSlideBar");

const medusa = document.getElementById("medusa");
const medusaOverlay = document.getElementById("medusaOverlay");
const medusaSlideBar = document.getElementById("medusaSlideBar");

const fruit = document.getElementById("fruit");
const fruitOverlay = document.getElementById("fruitOverlay");
const fruitSlideBar = document.getElementById("fruitSlideBar");

const caesar = document.getElementById("caesar");
const caesarOverlay = document.getElementById("caesarOverlay");
const caesarSlideBar = document.getElementById("caesarSlideBar");

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

let isDragging = false;
let isDragging2 = false;

sliderBar.addEventListener("mousedown", () => {
    isDragging = true;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const rect = wrapper.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;

    // Clamp the value
    offsetX = Math.max(0, Math.min(offsetX, rect.width));

    // Calculate opacity ratio (0 to 1)
    const ratio = offsetX / rect.width;

    // Apply opacity values
    overlay.style.opacity = ratio;
    original.style.opacity = 1 - ratio;

    // Move slider bar visually
    sliderBar.style.left = `${offsetX}px`;
});

napoleonSlideBar.addEventListener("mousedown", () => {
    isDragging2 = true;
});

document.addEventListener("mouseup", () => {
    isDragging2 = false;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging2) return;

    const rect = wrapper.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;

    // Clamp the value
    offsetX = Math.max(0, Math.min(offsetX, rect.width));

    // Calculate opacity ratio (0 to 1)
    const ratio = offsetX / rect.width;

    // Apply opacity values
    napoleonThug.style.opacity = ratio;
    napoleon.style.opacity = 1 - ratio;

    // Move slider bar visually
    napoleonSlideBar.style.left = `${offsetX}px`;
});

medusaSlideBar.addEventListener("mousedown", () => {
    isDragging3 = true;
});

document.addEventListener("mouseup", () => {
    isDragging3 = false;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging3) return;

    const rect = wrapper.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;

    // Clamp the value
    offsetX = Math.max(0, Math.min(offsetX, rect.width));

    // Calculate opacity ratio (0 to 1)
    const ratio = offsetX / rect.width;

    // Apply opacity values
    medusaOverlay.style.opacity = ratio;
    medusa.style.opacity = 1 - ratio;

    // Move slider bar visually
    medusaSlideBar.style.left = `${offsetX}px`;
});

fruitSlideBar.addEventListener("mousedown", () => {
    isDragging4 = true;
});

document.addEventListener("mouseup", () => {
    isDragging4 = false;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging4) return;

    const rect = wrapper.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;

    // Clamp the value
    offsetX = Math.max(0, Math.min(offsetX, rect.width));

    // Calculate opacity ratio (0 to 1)
    const ratio = offsetX / rect.width;

    // Apply opacity values
    fruitOverlay.style.opacity = ratio;
    fruit.style.opacity = 1 - ratio;

    // Move slider bar visually
    fruitSlideBar.style.left = `${offsetX}px`;
});

caesarSlideBar.addEventListener("mousedown", () => {
    isDragging5 = true;
});

document.addEventListener("mouseup", () => {
    isDragging5 = false;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging5) return;

    const rect = wrapper.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;

    // Clamp the value
    offsetX = Math.max(0, Math.min(offsetX, rect.width));

    // Calculate opacity ratio (0 to 1)
    const ratio = offsetX / rect.width;

    // Apply opacity values
    caesarOverlay.style.opacity = ratio;
    caesar.style.opacity = 1 - ratio;

    // Move slider bar visually
    caesarSlideBar.style.left = `${offsetX}px`;
});