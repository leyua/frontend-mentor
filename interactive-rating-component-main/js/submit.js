let submit = document.querySelector(".submit");
let sections = document.querySelectorAll("section");
let scores = document.querySelectorAll(".score button");
let score;

submit.onclick = () => {
    for (let el of sections) {
        el.classList.toggle("hidden");
    }
    document.querySelector(".result > span").innerText = score;
};

for (let el of scores) {
    el.addEventListener("click", (e) => {
        for (el of scores) {
            el.classList.remove("checked");
        }
        e.currentTarget.classList.add("checked");
        score = e.currentTarget.innerText;
    });
}
