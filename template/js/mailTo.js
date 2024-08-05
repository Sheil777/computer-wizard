"use strict"

// Проверка, что документ загрузился
document.addEventListener('DOMContentLoaded', function () {
  const forms = document.getElementsByClassName('_formSend');

  for(let index = 0; index < forms.length; index++){
    let form = forms[index];
    form.addEventListener('submit', formSend);

    // Отправка формы
    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      /*
      let formData = new FormData(form);

      // Проверка на ошибки
      if (error === 0) {
        // form.classList.add('_sending');
        let formBlock = form.closest('._formWrap');
        formBlock.classList.add('_sending');

        let response = await fetch('./template/php/sendmail.php', {
          method: 'POST',
          body: formData, 
        })

        if(response.ok) {
          // Очистка формы
          form.reset();
          formBlock.classList.remove('_sending');
          alert('Данные отправлены!');

        } else {
          formBlock.classList.remove('_sending');
          alert('Ошибка');
        }

      } else {
        alert('Заполните обязательные поля');
      }

      */
    }
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