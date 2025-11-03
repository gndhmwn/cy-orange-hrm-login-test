import LoginPage from '../../pages/LoginPage'

describe('Login Feature - OrangeHRM', () => {
    const loginPage = new LoginPage()
    let data;

    beforeEach(() => {
        loginPage.visit()
        cy.fixture('login.json').then((loginData) => data = loginData);
    })

    describe('Positive Test Cases', () => {
        it('TC-LOGIN-001: Login dengan username dan password yang valid', () => {
            loginPage.login(data.validUser.username, data.validUser.password)
            loginPage.verifyDashboardVisible()
        })

        it('TC-LOGIN-002: Login dengan username case-insensitive yang valid', () => {
            loginPage.login('admin', data.validUser.password)
            loginPage.verifyDashboardVisible()
        })

        it('TC-LOGIN-003: Klik Link "Forgot your password?"', () => {
            loginPage.clickForgotPassword()
            loginPage.verifyForgotPasswordPage()
        })
    })

    describe('Negative Test Cases', () => {
        it('TC-LOGIN-004: Login dengan username valid dan password invalid', () => {
            loginPage.login(
                data.invalidUsers.validUsernameInvalidPassword.username,
                data.invalidUsers.validUsernameInvalidPassword.password
            )
            loginPage.verifyErrorMessage('Invalid credentials')
        })

        it('TC-LOGIN-005: Login dengan username invalid dan password valid', () => {
            loginPage.login(
                data.invalidUsers.invalidUsernameValidPassword.username,
                data.invalidUsers.invalidUsernameValidPassword.password
            )
            loginPage.verifyErrorMessage('Invalid credentials')
        })

        it('TC-LOGIN-006: Login dengan username valid dan password kosong', () => {
            loginPage.typeUsername(data.emptyFields.usernameOnly.username)
            loginPage.clickLogin()
            loginPage.verifyRequiredFieldMessage('password')
        })

        it('TC-LOGIN-007: Login dengan username kosong dan password valid', () => {
            loginPage.typePassword(data.emptyFields.passwordOnly.password)
            loginPage.clickLogin()
            loginPage.verifyRequiredFieldMessage('username')
        })

        // it('TC-LOGIN-008: Login dengan username kosong dan password kosong', () => {
        //     loginPage.clickLogin()
        //     loginPage.verifyRequiredFieldMessage('both')
        // })
    })

    describe('Security Test Cases', () => {
        it('TC-LOGIN-008: Login dengan payload SQL injection pada username dan password valid', () => {
            loginPage.login(
                data.securityPayloads.sqlInjection.username,
                data.securityPayloads.sqlInjection.password
            )
            loginPage.verifyErrorMessage('Invalid credentials')
        })

        it('TC-LOGIN-009: Login dengan payload XSS pada username dan password valid', () => {
            loginPage.login(
                data.securityPayloads.xss.username,
                data.securityPayloads.xss.password
            )
            loginPage.verifyErrorMessage('Invalid credentials')
        })
    })
})