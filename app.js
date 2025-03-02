let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let birthYear = parseInt(document.getElementById("birthYear").value);
    let genderMale = document.getElementById("male");
    let genderFem = document.getElementById("female");

    let date = new Date();
    let year = date.getFullYear();
    let age = year - birthYear;

    let img = document.getElementById("img");
    let txt = document.getElementById("txt");

    // Verifica se o ano de nascimento é válido
    if (birthYear > year || birthYear < 1920) {
        txt.innerText = "Ano inválido! Tente novamente.";
        img.src = ""; // Remove a imagem caso tenha sido carregada antes
        return; // Interrompe a execução do código
    }

    if (genderMale.checked) {
        console.log("Homem de", age, "anos");

        if (age < 10) {
            img.src = "MaleImg/kid.png";
            txt.innerText = "Criança de " + age + " anos.";
        } else if (age < 18) {
            img.src = "MaleImg/teen.png";
            txt.innerText = "Adolescente de " + age + " anos.";
        } else if (age < 50) {
            img.src = "MaleImg/adult.png";
            txt.innerText = "Adulto de " + age + " anos.";
        } else {
            img.src = "MaleImg/old.png";
            txt.innerText = "Adulto de " + age + " anos.";
        }

    } else if (genderFem.checked) {
        console.log("Mulher de", age, "anos");

        if (age < 10) {
            img.src = "MaleImg/kid.png";
            txt.innerText = "Criança de " + age + " anos.";
        } else if (age < 18) {
            img.src = "FemImg/teen.png";
            txt.innerText = "Adolescente de " + age + " anos.";
        } else if (age < 50) {
            img.src = "FemImg/adult.png";
            txt.innerText = "Adulta de " + age + " anos.";
        } else {
            img.src = "FemImg/old.png";
            txt.innerText = "Adulta de " + age + " anos.";
        }

    } else {
        txt.innerText = "Por favor, selecione um gênero.";
        img.src = ""; // Remove a imagem caso tenha sido carregada antes
    }
});