chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)    {
  console.log('fillformjs!')

  if(request.command == 'init'){

  }

  if(request.command == 'singleDependent'){
    /*
      Basic info
     */

    const firstNameInput = document.querySelector('input[name="insured.firstName"]')
    const randomFirstNameNum = Math.floor(Math.random() * 1000) + 1;
    setFormValue(firstNameInput, `FakeFirstName_${randomFirstNameNum}`)

    const lastNameInput = document.querySelector('input[name="insured.lastName"]')
    const randomLastNameNum = Math.floor(Math.random() * 1000) + 1;
    setFormValue(lastNameInput, `FakeLastName_${randomLastNameNum}`)

    const relationshipInput = document.querySelector('input[name="certInsured.namedRole"]')
    setFormValue(relationshipInput, 'child')

    const genderInput = document.querySelector('input[name="insured.gender"]')
    setFormValue(genderInput, randomGender())


    const dobInput = document.querySelector('input[name="insured.dateOfBirth"]')
    setFormValue(dobInput, '2010-01-01')

    const ssnInput = document.querySelector('input[name="insured.obfuscatedSsn"]')
    // const ssn = Math.floor(Math.random() * 1000000000)
    setFormValue(ssnInput, generateSsn())

    // const eventInput = document.querySelector('input[name="insured.obfuscatedSsn"]')
    // setFormValue(ssnInput, '999999999')

    /*
      Life event
     */
    document.querySelector(`div[name="${randomEvent()}"]`).click()

    const eventDateInput = document.querySelector('input[name="certInsured.eventDate"]')
    setFormValue(eventDateInput, recentDate(15))

    const effectiveAtInput = document.querySelector('input[name="certInsured.effectiveAt"]')
    setFormValue(effectiveAtInput, recentDate(1))

  }
  if(request.command == 'fillFamily'){
    console.log('fill LH family!')

    /*
      Qualifying Event
     */

    document.querySelector(`div[name="${randomEvent()}"]`).click()

    const eventDateInput = document.querySelector('input[name="employee.eventDate"]')
    setFormValue(eventDateInput, recentDate(15))

    const effectiveDateInput = document.querySelector('input[name="employee.effectiveDate"]')
    setFormValue(effectiveDateInput, recentDate(1))

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
    // const ssn = Math.floor(Math.random() * 1000000000)
    setFormValue(ssnInput, generateSsn())

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
    if(radioSelects?.length > 0){
      const dentalLabel = radioSelects.find(element => {
        console.log(element.textContent)
        return element.textContent.includes('Dental - ')
      })
      if(dentalLabel){
        dentalLabel.click()
      }

      const visionLabel = radioSelects.find(element => {
        console.log(element.textContent)
        return element.textContent.includes('Vision - ')
      })
      if(visionLabel){
        visionLabel.click()
      }
    }






    /*
      Clean up
     */
    sendResponse({result: "success"});
  }

});

const setFormValue = (input, value) => {
  if(!input){
    return
  }
  input.click();
  input.value = value
  input.dispatchEvent(new Event("change", { bubbles: true }));
  input.dispatchEvent(new Event("blur", { bubbles: true }));
}

const randomEvent = () => {
  return EVENTS[Math.floor(Math.random()*EVENTS.length)];
}
const EVENTS = ['lost-coverage', 'got-married', 'had-baby', 'adopted-child', 'got-divorced', 'death']

const randomGender = () =>{
  return PRONOUNS[Math.floor(Math.random()*PRONOUNS.length)];
}
const PRONOUNS = ['F', 'M', 'U']

const generateSsn = () => {
  const ssn = Math.floor(Math.random() * 1000000000)
  return String(ssn).padEnd(9, '0')
}

const recentDate = (daysBack = 30) => {
  const oneDay=1000*60*60*24
  const daysInMs = oneDay * daysBack
  const newDateUnix = new Date() - daysInMs
  const newDateString = new Date(newDateUnix).toISOString().split('T')[0]

  return newDateString
}