Flow of the project: 

App.jsx:
- It simply imports and RegistrationForm and return the same component(export)

RegistrationForm.jsx: Its purpose is to return the form as a component and also handle the validations of the form and displaying them accordingly
- Defined the variables that need to be taken as the input. Used the useState hook to manage the variables state
- Using useState() created issues variable whose purpose is to store the if any validation didn't match like if username is empty or password strength or password matching
- The component is a form, containing the input fields of name, password, confirmPassword.
- The value in it stored will be the variable we defined before and onChange we update it each time using set method
- On submission, we call the handleSubmit method which will check if the entered values reach the criteria and display them accordingly by invoking different functions.