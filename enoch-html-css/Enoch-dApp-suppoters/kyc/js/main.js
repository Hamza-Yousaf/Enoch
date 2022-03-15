
/*
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
*/
        const selectedAdd = document.querySelector(".address-info-select");
        const optionsContainerAdd = document.querySelector(".address-options-container");

        const optionsListAdd = document.querySelectorAll(".address-option");

        selectedadd.addEventListener("click", () => {
            optionsContainerAdd.classList.toggle("active");
        });

        optionsListAdd.forEach(o => {
            o.addEventListener("click", () => {
                selectedadd.innerHTML = o.querySelector(".address-info-label").innerHTML;
                optionsContainerAdd.classList.remove("active");
            });
        });
