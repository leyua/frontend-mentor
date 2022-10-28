const view = document.querySelector(".view");
const charge = document.querySelector(".charge");

function countCharge(slider) {
    if (slider.value == 36) {
        charge.innerText = 36;
        view.innerText = "1M";
    } else if (slider.value >= 24) {
        charge.innerText = 24;
        view.innerText = "500K";
    } else if (slider.value >= 16) {
        charge.innerText = 16;
        view.innerText = "100K";
    } else if (slider.value >= 12) {
        charge.innerText = 12;
        view.innerText = "50K";
    } else if (slider.value >= 8) {
        charge.innerText = 8;
        view.innerText = "10K";
    }
}
