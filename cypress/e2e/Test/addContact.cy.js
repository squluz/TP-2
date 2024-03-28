import AddContactPage from '../../pages/addContactPage';
import LoginPage from '../../pages/loginPage';

describe('Add Contact Functionality', () => {
  const addContactPage = new AddContactPage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    addContactPage.visit();
  });

  it('login', () => {
    loginPage.fillForm()
    loginPage.submitForm()

  })


  it('should add contacts from CSV file', () => {
    loginPage.fillForm()
    loginPage.submitForm()
     cy.task('parseCsv', { filePath: 'contacts.csv' }).then((contacts) => {
      contacts.forEach((contact) => {
        addContactPage.addContact();
        addContactPage.fillForm(contact);
        cy.wait (1000);
        
      })
 })
    




    // // Verificar que el contacto se haya agregado correctamente
    // cy.contains('Contact added successfully').should('be.visible');
  });


});



