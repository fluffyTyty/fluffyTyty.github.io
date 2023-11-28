const swiper = new Swiper('.reviews-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const submitForm = document.querySelector('.feedback-form')
const nameField = document.getElementById('name')
const phoneField = document.getElementById('phone')
submitForm.addEventListener('submit', async function (e) {
  e.preventDefault()
  const message = `Заявка на звонок!%0AИмя: ${nameField.value}%0AТелефон: ${phoneField.value}`
  await fetch(`https://api.telegram.org/bot5752199085:AAGKGU0_k6DoLq49LzW99adpFlT8dWY9EoQ/sendMessage?chat_id=-1001624309287&text=${message}`, {
    method: 'POST',
    body: {
      chat_id: '-1001624309287',
      text: message
    }
  })
  nameField.value = ''
  phoneField.value = ''
})