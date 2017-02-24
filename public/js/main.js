$('.delete').on('click', function(event) {
  event.preventDefault()
  const url = this.href
  const method = 'DELETE'
  $.ajax({ url, method })
    .done( msg => {
      alert(msg)
      window.location = '/'
    })
})