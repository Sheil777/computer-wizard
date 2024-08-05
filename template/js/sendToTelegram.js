const TOKEN = '';
const CHAT_ID = '';
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.addEventListener('DOMContentLoaded', function () {
    const forms = document.getElementsByClassName('_formSend');

    for(let index = 0; index < forms.length; index++){
        let form = forms[index];
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let error = formValidate(form);

            // Если ошибок нет
            if (error === 0) {
                let phone = this.phone.value.trim();
                let name = this.name.value.trim();
                let question = this.question.value.trim();

                let message = `<b>Заявка с сайта!</b>\n`;
                message += `<b>Номер телефона: </b> ${ phone }\n`;
                if(name != '') message += `<b>Имя: </b> ${ name }\n`
                message += `<b>Вопрос: </b> ${ question }`
    
                formBlock = form.closest('.promo-form');
                formBlock.classList.add('_sending');

                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message
                })
                .then((res) => { // Успешно
                    form.reset();                                       // Очистить форму
                    formBlock.classList.remove('_sending');             // Убрать блокировку
                    popupOpen(document.querySelector('#popup-sent'));   // Сообщение, что завяка отправлена
                })
                .catch((err) => { // Ошибка
                    formBlock.classList.remove('_sending');                  // Убрать блокировку
                    popupOpen(document.querySelector('#popup-sent-error'));  // Сообщение об ошибке
                })
            }
        });
    }

    // Проверка правильности заполнения формы
    function formValidate(form) {
        let error = 0;
        let formReq = form.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            // Проверка заполнено ли поле
            if (input.value.trim() === '') {
                formAddError(input);
                error++;
            }
        }

        return error;
    }

    // Повесить класс _error на форму и input
    function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
    }
  
    // Удалить класс _error на форму и input
    function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
    }
});