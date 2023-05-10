"use strict"

const elements = document.querySelectorAll('.hero__select');
elements.forEach(el => {
    const choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: '',
        position: 'bottom',
        shouldSort: false,
      })
})

const curDate = document.querySelector('input[name="date_single"]');
const datepicker = new Datepicker(curDate, {
    autohide: true,
    clearButton: true,
    language: 'ru',
    format: "dd/mm/yyyy",
    todayButton: true,
})

const form = document.querySelector('form');
const button = document.querySelector('button[type="submit"]');

button.addEventListener('click', (event) => {
  event.preventDefault(); // предотвращаем отправку формы

  const formData = new FormData(form); // получаем данные формы

  const json = JSON.stringify(Object.fromEntries(formData)); // преобразуем данные в JSON

  console.log(json); // выводим JSON в консоль
});