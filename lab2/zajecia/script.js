"use strict"
const adder = () => {
    console.log("jestem zmija");
    const numberA = document.getElementById("number-a").value;
    const numberB = document.querySelector("#number-b").value;

    console.log(numberA);
    console.log({numberB});

    const numA = Number(numberA);
    const numB = Number(numberB);


    if (isNaN(numA) || isNaN(numB)){
        $("#modal").show("slow");
        $("#modal").off("click").click(() => {
            $("#modal").hide("slow")
        })
        return;
    }
    const sum = numA + numB;
    console.log(`${numberA} + ${numberB} = ${sum}`);

    const listOfOperation = document.getElementById("operations-list");
    const p = document.createElement("p");
     
    p.innerHTML = `${numberA} + ${numberB} = ${sum}`;

    listOfOperation.append(p)

}