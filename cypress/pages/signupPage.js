class SignUpPage {
  visit() {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser');
  }

  fillSignUpForm(name, lastname, email, password) {
    cy.get('#firstName').type(name);
    cy.get('#lastName').type(lastname);
    cy.get('#email').type(email);
    cy.get('#password').type(password);
  }
//elements sign up pages

  submitSignUpForm() {
    cy.get('form').submit();
  }

  getErrorMessage() {
    return cy.get('#error');
  }
  getTitle() {
    return cy.get('h1');
  }

  getNameInput() {
    return cy.get('#firstName');
  }
  getlastNameInput() {
    return cy.get('#lastName');
  }
  getEmailInput() {
    return cy.get('#email');
  }

  getPasswordInput() {
    return cy.get('#password');
  }

  getSubmitButton() {
    return cy.get('#submit');
  }
}

export default SignUpPage;
