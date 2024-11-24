document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password-input");
    const submitButton = document.getElementById("submit-button");
    const feedback = document.getElementById("feedback");
    const hiddenText = document.getElementById("hidden-text");

    const correctPassword = hiddenText.textContent.trim(); // Obtém a senha escondida

    submitButton.addEventListener("click", () => {
        const enteredPassword = passwordInput.value;

        if (enteredPassword === correctPassword) {
            feedback.style.color = "#55ff55";
            feedback.textContent = "Senha correta! Redirecionando...";
            setTimeout(() => {
                window.location.href = "https://www.youtube.com/watch?v=gYlBpqK97kw"; // Substitua pelo site desejado
            }, 2000);
        } else {
            feedback.style.color = "#ff5555";
            feedback.textContent = "Senha incorreta! Tente novamente.";
        }
    });
});
