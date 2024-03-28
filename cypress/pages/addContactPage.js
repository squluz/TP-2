class AddContactPage {
  constructor() {
    this.firstNameInput = '#firstName';
    this.lastNameInput = '#lastName';
    this.birthInput= '#birthdate';
    this.emailInput = '#email';
    this.phoneInput = '#phone';
    this.streetInput = '#street1';
    this.cityInput = '#city';
    this.stateProvinceInput = '#stateProvince';
    this.postalCodeInput = '#postalCode';
    this.countryInput = '#country';
    this.submitButton = '#submit';
    this.addContactButton = '#add-contact';
  }

  visit() {
    cy.visit('/');
  }
  addContact() {
    cy.get(this.addContactButton).click();
  }

  fillForm(contact) {
    cy.get(this.firstNameInput).type(contact.firstName);
    cy.get(this.lastNameInput).type(contact.lastName);
    cy.get(this.birthInput).type(contact.birthDate);
    cy.get(this.emailInput).type(contact.email);
    cy.get(this.phoneInput).type(contact.phone);
    cy.get(this.streetInput).type(contact.street1);
    cy.get(this.cityInput).type(contact.city);
    cy.get(this.stateProvinceInput).type(contact.stateProvince);
    cy.get(this.postalCodeInput).type(contact.postalCode);
    cy.get(this.countryInput).type(contact.country);
    cy.get(this.submitButton).click();
    
  }
}

export default AddContactPage;
