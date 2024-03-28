import { faker } from '@faker-js/faker';
import LoginPage from '../../pages/loginPage';

describe('Login Functionality', () => {
  const loginPage = new LoginPage();
  const username = 'test_username'; 
  const password = 'test_password'; 

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    loginPage.fillForm(username, password);
    loginPage.submitForm();

    // verificar que el inicio de sesión fue exitoso

  });

  it('should display error message with invalid credentials', () => {
    const invalidUsername = faker.internet.username();
    const invalidPassword = faker.internet.password();

    loginPage.fillForm(invalidUsername, invalidPassword);
    loginPage.submitForm();

    // verificar que se muestre un mensaje de error adecuado
  });

  it('should display required field errors when submitting empty form', () => {
    loginPage.submitForm();

    // Verifica los mensajes de error
    loginPage.verifyErrorMessage('Incorrect username or password');
  });
});
