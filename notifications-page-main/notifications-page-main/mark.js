const all_mark = document.querySelector("header > a");
const not_marked = document.querySelectorAll(".not-marked");
const not_marked_num = document.querySelector(".not-marked-num");
let num = not_marked_num.innerText;

for (let el of not_marked) {
    el.onclick = (e) => {
        if (e.currentTarget.classList.contains("not-marked")) {
            e.currentTarget.classList.remove("not-marked");
            num--;
            not_marked_num.innerText = num;
        }
    };
}

all_mark.onclick = (e) => {
    for (let el of not_marked) {
        el.classList.remove("not-marked");
    }
    num = 0;
    not_marked_num.innerText = num;
};
