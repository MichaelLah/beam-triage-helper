chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)    {
  console.log('fillformjs!')

  if(request.command == 'init'){

  }
  if(request.command == 'fillFamily'){
    console.log('fill LH family!')
    document.querySelector('div[name="had-baby"]').click()

    // TODO make this work
    const eventDateInput = document.querySelector('input[name="employee.eventDate"]')
    eventDateInput.click()
    eventDateInput.value = '2021-03-03'
    // eventDateInput.dispatchEvent(new Event("focus", { bubbles: true }));
    eventDateInput.dispatchEvent(new Event("change", { bubbles: true }));
    eventDateInput.dispatchEvent(new Event("blur", { bubbles: true }));


    const firstNameInput = document.querySelector('input[name="employee.firstName"]')
    setFormValue(firstNameInput, 'FirstName')

    const lastNameInput = document.querySelector('input[name="employee.lastName"]')
    setFormValue(lastNameInput, 'LastName')

    const jobTitleInput = document.querySelector('input[name="employee.jobTitle"]')
    setFormValue(jobTitleInput, 'Assistant to the regional manager')

    const genderInput = document.querySelector('input[name="employee.gender"]')
    setFormValue(genderInput, 'F')
    //
    const birthdayInput = document.querySelector('input[name="employee.dob"]')
    setFormValue(birthdayInput, '2000-05-05')
    //
    const ssnInput = document.querySelector('input[name="employee.obfuscatedSsn"]')
    setFormValue(ssnInput, '999999999')
    //
    const dohInput = document.querySelector('input[name="employee.dateOfHire"]')
    setFormValue(dohInput, '2021-03-03')


    const emailInput = document.querySelector('input[name="employee.email"]')
    const randomEmailNumber = Math.floor(Math.random() * 1000000) + 1;
    setFormValue(emailInput, `fake-email-${randomEmailNumber}@example.com`)


    const phoneInput = document.querySelector('input[name="employee.userAddress.phone"]')
    setFormValue(phoneInput, '5550000000')

    const line1Input = document.querySelector('input[name="employee.userAddress.address"]')
    setFormValue(line1Input, '123 Fake street')

    const cityInput = document.querySelector('input[name="employee.userAddress.city"]')
    setFormValue(cityInput, 'Columbus')

    const StateInput = document.querySelector('input[name="employee.userAddress.state"]')
    setFormValue(StateInput, 'OH')

    const zipcodeInput = document.querySelector('input[name="employee.userAddress.zip"]')
    setFormValue(zipcodeInput, '43215')

    // const dentalLabel = document.querySelectorAll('label.beam-radio-select').find(element => {
    //   element.text().find('dental')
    // })

    const radioSelects = Array.from(document.querySelectorAll('label.beam-radio-select'))

    const dentalLabel = radioSelects.find(element => {
      console.log(element.textContent)
      return element.textContent.includes('Dental - ')
    })
    dentalLabel.click()

    const visionLabel = radioSelects.find(element => {
      console.log(element.textContent)
      return element.textContent.includes('Vision - ')
    })
    visionLabel.click()
    // for (const element of document.querySelectorAll('label.beam-radio-select')) {
    //   if (element.textContent.includes("Dental - ")) {
    //     console.log(element.textContent)
    //   }
    // }


    sendResponse({result: "success"});
  }

});

const setFormValue = (input, value) => {
  input.click();
  input.value = value
  input.dispatchEvent(new Event("change", { bubbles: true }));
  input.dispatchEvent(new Event("blur", { bubbles: true }));
}