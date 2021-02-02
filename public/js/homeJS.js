$(document).ready(() => {
  console.log("JS connected to page")
  
  $('#facts-button').on('click', async () => {
    console.log("Facts ETLing...")
    let data = await $.post('/facts')
    alert("Facts: " + data)
  })

  $('#account-button').on('click', async () => {
    console.log("Account ETLing...")
    let status = await $.post('/account')
    alert("Account: " + status)
  })

  $('#type-button').on('click', () => {
    $.post('/type', (data, status) => {
      alert("Type: Success")
    })
  })

  $('#time-button').on('click', () => {
    $.post('/time', (data, status) => {
      alert("Time: Success!")
    })
  })

  $('#recipient-button').on('click', () => {
    $.post('/recipient', (data, status) => {
      alert("Type: Success")
    })
  })
})