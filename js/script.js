// Global Variable
let empId          // Employee ID text box
let empoyeeId      // Employee ID text box
let empName        // Employee ID text box
let empExt         // Employee ID text box
let empEmail       // Employee ID text box
let empDep         // Employee ID text box
let calculate           // THE CALCULATE BUTTON
let output              // THE OUTPUT TAG

// Helper function to retunr DOM element
const $ = (id) => document.getElementById(id)

// Get the DOM elements
empId      = $('empId')
empoyeeId            = $('empoyeeId')
empName           = $('empName')
empExt           = $('empExt')
empEmail           = $('empEmail')
empDep           = $('empDep')
calculate       = $('calculate')
output          = $('output')


calculate.addEventListener('click', () => {
    console.log(`ID: ${empId.value}.`)
    console.log(`Name: ${empName.value}.`)
    console.log(`Extension: ${empExt.value}.`)
    console.log(`Email ${empEmail.value}.`)
    console.log(`Departent ${empDep.value}.`)
    output.innerHTML = `added employee `

})