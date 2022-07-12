// 1)

const formInput = document.forms.main.nameInput;

formInput.addEventListener("focus", function() {
    console.log("Фокус");
    setTimeout(() => {
        formInput.blur();
        console.log("blur");
    }, 5000);
});


// 2)

const mainBlockForm = document.querySelector(".main");

mainBlockForm.addEventListener("focus", function(e) {
    mainBlockForm.classList.add("_focus");
});

mainBlockForm.addEventListener("blur", function(e) {
    mainBlockForm.classList.remove("_focus");
})


// 3)

const phone = {
    number: 1140337,
    code: 37529,
    model: "Samsung",
}

localStorage.setItem("phone", JSON.stringify(phone));

const firstName = "Ekaterina";
const secondName = "Yurkevich";

localStorage.setItem("name", firstName);
localStorage.setItem("Surname", secondName);

localStorage.removeItem("name");