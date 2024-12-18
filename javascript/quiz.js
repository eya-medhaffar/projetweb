function validateQuiz() {
    const answers = {
        q1: "a", q2: "a", q3: "c", q4: "a", q5: "b", q6: "a", q7: "d", q8: "c", q9: "c", q10: "d",
        q11: "c", q12: "c", q13: "c", q14: "a", q15: "a"
    };
    
    let score = 0;
    for (let i = 1; i <= 15; i++) {
        const radios = document.getElementsByName(`q${i}`);
        let selectedValue = null;

        for (let radio of radios) {
            if (radio.checked) {
                selectedValue = radio.value;
                break;
            }
        }

        const correctAnswer = answers[`q${i}`];
        const labels = document.getElementsByName(`q${i}`);
        for (let label of labels) {
            const labelElement = label.nextElementSibling;  
            if (label.value === correctAnswer) {
                labelElement.classList.add("correct");
            } else {
                labelElement.classList.remove("correct");
            }
        }
        if (selectedValue === correctAnswer) {
            score++;
        } else if (selectedValue) {
            const incorrectRadio = [...radios].find(r => r.checked);
            if (incorrectRadio) {
                incorrectRadio.nextElementSibling.classList.add("incorrect");
            }
        }
    }
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Votre score est de ${score}/15`;
}