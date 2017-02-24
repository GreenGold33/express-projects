$('.delete').on('click', function(event) {
  event.preventDefault()
  const url = this.href
  const method = 'DELETE'
  $.ajax({ url, method })
    .done( msg => {
      alert(msg)
      // window.location = '/'
      $(this).closest('li').remove()
    })
})

$('.done').on('click', function(event) {
  event.preventDefault()
  const url = this.href
  const method = 'PUT'
  const data = "done=true&extra=this is an extra data"
  $.ajax({ url, method, data })
    .done( msg => {
      alert(msg)
      $(this).closest('li').remove()
    })
})

$('.edit-title').on('click', function(event) {
  $(this).closest("li").addClass("edit")
})

$('.pending input').on('keydown', function(event) {
  if (event.keyCode == 13) {
    const url = $(this).siblings("a").attr("href")
    const method = 'PUT'
    const newTitle = $(this).val()
    const data = 'title=' + newTitle
    $.ajax({ url, method, data })
      .done( msg => {
        $(this).siblings("span").text(newTitle)
        $(this).closest('li').removeClass("edit")
      })

  }

})