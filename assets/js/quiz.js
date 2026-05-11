function checkQuiz(btn) {
    const container = btn.closest('.quiz-item');
    const checkboxes = container.querySelectorAll('.quiz-check');
    const details = container.querySelector('.quiz-solution');
    
    checkboxes.forEach(cb => {
        const isCorrect = cb.getAttribute('data-correct') === 'true';
        const label = cb.closest('.option-label');
        
        // Сброс классов перед проверкой
        label.classList.remove('correct', 'incorrect', 'missed');

        if (cb.checked) {
            if (isCorrect) {
                label.classList.add('correct'); // Зеленый с галочкой
            } else {
                label.classList.add('incorrect'); // Красный
            }
        } else {
            if (isCorrect) {
                label.classList.add('missed'); // Зеленый без галочки
            }
        }
        cb.disabled = true; // Блокируем после ответа
    });

    btn.style.display = 'none';
    details.style.display = 'block';
    
    // Перерендер MathJax, если он используется внутри скрытых блоков
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}