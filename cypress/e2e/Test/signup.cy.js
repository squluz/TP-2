import SignUpPage from '../../pages/signupPage';

describe('SignUp', () => {
  const signUpPage = new SignUpPage();

  beforeEach(() => {
    signUpPage.visit();
  });
  it('should display correct page title', () => {
    signUpPage.getTitle().should('have.text', 'Add User');
  });

  it('should display name input field', () => {
    signUpPage.getNameInput().should('exist');
  });
  it('should display lastname input field', () => {
    signUpPage.getlastNameInput().should('exist');
  });

  it('should display email input field', () => {
    signUpPage.getEmailInput().should('exist');
  });

  it('should display password input field', () => {
    signUpPage.getPasswordInput().should('exist');
  });

  it('should display submit button', () => {
    signUpPage.getSubmitButton().should('exist');
  });

  it('should display error messages for missing fields', () => {
    signUpPage.submitSignUpForm();
    signUpPage.getErrorMessage().should('have.text', 'User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required., email: Email is invalid, password: Path `password` is required.');
  });

  it('should display error message for invalid email format', () => {
    signUpPage.fillSignUpForm('2luz', 'squ12', 'invalidemail', 'password123');
    signUpPage.submitSignUpForm();
    signUpPage.getErrorMessage().should('have.text', 'User validation failed: email: Email is invalid');
  });

  it('should sign up successfully with valid inputs', () => {
    const name = 'Luz';
    const lastname = 'Squarzon'
    const email = 'luzsqu@example.com';
    const password = 'password123';

    signUpPage.fillSignUpForm(name, lastname, email, password);
    signUpPage.submitSignUpForm();
});
    // // Create a csv - add new contact !deprecado cambiar 
    // it('should create contacts from CSV file', () => {
    //   cy.fixture('contact.csv').then(contacts => {
    //     contacts.forEach(contact => {
    //       signUpPage.fillSignUpForm(contact.firstName, contact.lastName, contact.email, contact.password);
    //       signUpPage.submitSignUpForm();
          
          
        
      });
    


  // Agregar más casos de prueba  diferentes escenarios de registro
