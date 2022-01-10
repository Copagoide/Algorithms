const pages = document.querySelectorAll(".page");
const translateAmount = 200;
let translate = 0;

slide = (direction) => {
    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}vw)`)
    );
}