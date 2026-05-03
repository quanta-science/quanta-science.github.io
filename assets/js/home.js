document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".current-year").textContent = new Date().getFullYear();
});

function check_params() {
	const elem_second_butt = document.getElementById('second_butt');
    const checkedSubjects = document.querySelectorAll('.subject:checked');

	if (checkedSubjects.length === 0) {
		elem_second_butt.disabled = true;
	} else {
		elem_second_butt.disabled = false;
	}
}

function send_request() {
    let subjects = "";
    subjects = Array.from(
                document.querySelectorAll('.subject:checked')
            )
            .map(cb => cb.value)
            .join(", ");
            window.open("https://wa.me/77071011937?text=" + subjects + "%0A" 
            + document.querySelector('input[name="school_class"]:checked')?.value + "%0A" 
            + document.querySelector('input[name="purpose"]:checked')?.value + "%0A" 
            + document.querySelector('input[name="platform"]:checked')?.value + "%0A" 
            + document.getElementById('comments').value + "%0A" + "Нажмите отправить >>>");
        }

        document.addEventListener('DOMContentLoaded', function() {
            const calcBtn = document.getElementById('calc-btn');
            const retryBtn = document.getElementById('retry-btn');
            
            const questionsBlock = document.getElementById('quiz-questions');
            const finalBlock = document.getElementById('quiz-final');
            
            const probValText = document.getElementById('prob-val');
            const probMsgText = document.getElementById('prob-msg');
            const probBar = document.getElementById('prob-bar'); // Ссылка на прогресс-бар

            calcBtn.addEventListener('click', function() {
                const checks = document.querySelectorAll('.quiz-step');
                let score = 0;

                checks.forEach(check => {
                    if (check.checked) {
                        score += parseInt(check.getAttribute('data-weight'));
                    }
                });

                questionsBlock.style.display = 'none';
                finalBlock.style.display = 'block';

                // Обновляем прогресс-бар и текст
                probBar.value = score; 
                probValText.innerText = "Вероятность успеха: " + score + "%";
                
                if (score === 100) {
                    probMsgText.innerHTML = "<strong>Вы – идеальный партнер.</strong> У нас есть все шансы на прорыв. Записывайтесь на <a href='#request_form' title='Записаться на индивидуальные занятия по химии, физике и математике'>диагностический урок</a>.";
                } else if (score >= 70) {
                    probMsgText.innerHTML = "<strong>Хороший фундамент.</strong> Однако оставшиеся пробелы в среде будут замедлять прогресс. Мы обсудим это на первой <a href='#request_form' title='Записаться на индивидуальные занятия по химии, физике и математике'>встрече</a>.";
                } else if (score >= 40) {
                    probMsgText.innerHTML = "<strong>Рискованная зона.</strong> С такой организацией быта мы сможем работать максимум на 50% мощности. Вам придется решить: результат или привычки.";
                } else {
                    probMsgText.innerHTML = "<strong>Критический уровень.</strong> При такой нагрузке и отсутствии контроля среды наши занятия будут пустой тратой ваших денег. Наша методика вряд ли будет эффективна в вашей ситуации. Возможно, вам стоит поискать классического репетитора.";
                }
            });

            retryBtn.addEventListener('click', function() {
                finalBlock.style.display = 'none';
                questionsBlock.style.display = 'block';
                document.querySelectorAll('.quiz-step').forEach(c => c.checked = false);
                probBar.value = 0; // Сброс бара
            });
        });