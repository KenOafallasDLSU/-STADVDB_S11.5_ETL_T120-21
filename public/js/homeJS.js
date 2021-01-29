$(document).ready(() => {
  console.log("Michiko Gomi")

  $('#facts-button').on('click', () => {
    $.post('/facts', (data, status) => {
      console.log("Facts: " + status)
    })
  })

  $('#account-button').on('click', () => {
    $.post('/account', (data, status) => {
      console.log("Account: " + status)
    })
  })

  $('#type-button').on('click', () => {
    $.post('/type', (data, status) => {
      console.log("Type: " + status)
    })
  })

  $('#time-button').on('click', () => {
    $.post('/time', (data, status) => {
      console.log("Time: " + status)
    })
  })

  $('#recipient-button').on('click', () => {
    $.post('/recipient', (data, status) => {
      console.log("Recipient: " + status)
    })
  })
})