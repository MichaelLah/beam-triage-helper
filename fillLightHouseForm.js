chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)    {
  console.log('fillformjs!')

  if(request.command == 'init'){

  }
  if(request.command == 'fillFamily'){
    console.log('fill LH family!')

    /*
      Qualifying Event
     */

    document.querySelector(`div[name="${randomEvent()}"]`).click()

    const eventDateInput = document.querySelector('input[name="employee.eventDate"]')
    setFormValue(eventDateInput, '2021-03-03')

    /*
      basic info
     */
    const firstNameInput = document.querySelector('input[name="employee.firstName"]')

    const randomFirstNameNum = Math.floor(Math.random() * 1000) + 1;
    setFormValue(firstNameInput, `FakeFirstName_${randomFirstNameNum}`)

    const randomLastNameNum = Math.floor(Math.random() * 1000) + 1;
    const lastNameInput = document.querySelector('input[name="employee.lastName"]')
    setFormValue(lastNameInput, `FakeLastName_${randomLastNameNum}`)

    const jobTitleInput = document.querySelector('input[name="employee.jobTitle"]')
    setFormValue(jobTitleInput, 'Assistant to the regional manager')

    const genderInput = document.querySelector('input[name="employee.gender"]')
    setFormValue(genderInput, 'F')

    const randomDOBDayNumber = Math.floor(Math.random() * (27 - 1 + 1)) + 1;
    const randomDOBMonthNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    const DOBDayString = String(randomDOBDayNumber).padStart(2,'0')
    const DOBMonthString = String(randomDOBMonthNumber).padStart(2,'0')
    const birthdayInput = document.querySelector('input[name="employee.dob"]')
    setFormValue(birthdayInput, `2000-${DOBMonthString}-${DOBDayString}`)

    const ssnInput = document.querySelector('input[name="employee.obfuscatedSsn"]')
    setFormValue(ssnInput, '999999999')

    const lastMonth = new Date().getMonth()
    const lastMonthString = String(lastMonth).padStart(2,'0')
    const dohInput = document.querySelector('input[name="employee.dateOfHire"]')
    setFormValue(dohInput, `2021-${lastMonthString}-01`)


    /*
      Contact info
     */
    const emailInput = document.querySelector('input[name="employee.email"]')
    const randomEmailNumber = Math.floor(Math.random() * 1000000) + 1;
    setFormValue(emailInput, `fake-email-${randomEmailNumber}@example.com`)

    const phoneInput = document.querySelector('input[name="employee.userAddress.phone"]')
    setFormValue(phoneInput, '5550000000')

    /*
      Address info
     */
    const line1Input = document.querySelector('input[name="employee.userAddress.address"]')
    setFormValue(line1Input, '123 Fake street')

    const cityInput = document.querySelector('input[name="employee.userAddress.city"]')
    setFormValue(cityInput, 'Columbus')

    const StateInput = document.querySelector('input[name="employee.userAddress.state"]')
    setFormValue(StateInput, 'OH')

    const zipcodeInput = document.querySelector('input[name="employee.userAddress.zip"]')
    setFormValue(zipcodeInput, '43215')

    const radioSelects = Array.from(document.querySelectorAll('label.beam-radio-select'))


    /*
      Plan selection
     */
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

    /*
      Clean up
     */
    sendResponse({result: "success"});
  }

});

const setFormValue = (input, value) => {
  input.click();
  input.value = value
  input.dispatchEvent(new Event("change", { bubbles: true }));
  input.dispatchEvent(new Event("blur", { bubbles: true }));
}

const randomEvent = () => {
  return EVENTS[Math.floor(Math.random()*EVENTS.length)];
}
const EVENTS = ['lost-coverage', 'got-married', 'had-baby', 'adopted-child', 'got-divorced', 'death']