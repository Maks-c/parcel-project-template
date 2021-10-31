const formRef = document.querySelector('.feedback-form')
const LOCALSTORAGE_KEY = "feedback-form-state";

formRef.addEventListener('input', e =>{
  e.preventDefault()
  
  let formEmailValue = formRef.elements.email.value
  let formMessageValue = formRef.elements.message.value
  console.log(formMessageValue)
  console.log(formEmailValue)
})




