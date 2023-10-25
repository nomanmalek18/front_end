
const input = document.querySelectorAll("input");
// console.log(">", input)
for (let index = 0; index < input.length; index++) {
    const element = input[index];


    element.addEventListener("blur", function updateValue(e) {
        // console.log(">", e.target.value)
        if (e.target.value) {



        } else {
            let Fspan = document.createElement("span");
            Fspan.textContent = "this field is required";
            e.currentTarget.parentNode.append(Fspan)

        }
    });
}

