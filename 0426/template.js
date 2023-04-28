const form = document.querySelector('#follow-form')

form.addEventListener('submit', function(event){
  event.preventDefault()
  const userId= event.target.dataset.userId
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken')
  axios({
    method: 'post',
    url: '/accounts/userpk/follow/',
  })
})