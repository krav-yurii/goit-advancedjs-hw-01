const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  }
});

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Веедіть дані');
    return;
  }

  console.log('Форма відправлена:', formData);

  formData.email = '';
  formData.message = '';

  form.reset();
  localStorage.removeItem('feedback-form-state');
});