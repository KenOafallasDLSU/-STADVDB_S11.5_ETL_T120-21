$(document).ready(() => {
  console.log("JS connected to page")
  
  $('#facts-button').on('click', async () => {
    console.log("Facts ETLing...")
    let data = await $.post('/facts')
    console.log(data)
  })

  $('#account-button').on('click', async () => {
    console.log("Account ETLing...")
    let status = await $.post('/account')
    console.log(status)
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