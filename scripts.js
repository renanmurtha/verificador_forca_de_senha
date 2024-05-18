const passwordInput = document.querySelector("#passwordInput");
let text = document.getElementById("password-strength-text");

passwordInput.addEventListener("input", function () {
    const password = this.value;

    const strengthIndicator = document.querySelector(
        "#password-strength-indicator"
    );

    const strengthText = document.querySelector("#password-strength-text");

    const strengths = {
        0: "",
        1: "Muito Fraca",
        2: "Fraca",
        3: "Moderada",
        4: "Forte",
        5: "Muito Forte"
    };

    const color = {
        0: "transparent",
        1: "#5b2c6f ",
        2: "#e70b0b ",
        3: "#cc6510",
        4: "#9e9e06",
        5: "#28a745"
    };

    let score = 0;

    // Requisitos
    if (password.length >= 8) score++;
    if (password.match(/[a-z]/)) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^a-zA-Z0-9\s]/)) score++;

    //  Calculo da %, pq a largura vai ser em %
    const width = (score / 5) * 100;
    strengthIndicator.style.width = `${width}%`;

    strengthText.innerHTML = (strengths[score] == 0 ? strengths[score] : `Senha: ${strengths[score]}`);

    strengthIndicator.style.backgroundColor = `${color[score]}`;
    text.style.color = color[score];
});


$(function ($) {
    var $senha = $("#passwordInput");
    $("#display").on('mouseup mousedown', function (e) {
        if ($senha.attr('type') == 'password') {
            $senha.attr("type", "text");
        } else {
            $senha.attr('type', 'password');
        }
    });
});