class LoginPage {
    constructor() {
      this.usernameInput = '#email';
      this.passwordInput = '#password';
      this.submitButton = '#submit';
      this.errorMessage = '#error';
    }
  
    visit() {
      cy.visit('/');
    }

    errorMessage() {
        cy.get('#error');
      }
  
    fillForm() {
      const username = 'luzsquarzon@gmail.com'
      const password = 'South97/'
      cy.get(this.usernameInput).clear().type(username);
      cy.get(this.passwordInput).clear().type(password);
      return this;
    }
  
    submitForm() {
      cy.get(this.submitButton).click();
    }

     // Enviar el formulario sin completar ningún campo
  submitEmptyForm() {
    cy.get(this.submitButton).click();
  }

  //Enviarpara verificar el mensaje de error correcto
  verifyErrorMessage(expectedErrorMessage) {
    cy.get(this.errorMessage).should('be.visible').and('contain', expectedErrorMessage);
  }
  }
  
  export default LoginPage;
  