class LoginPage {
    elements = {
        usernameInput: () => cy.get('input[name="username"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        loginButton: () => cy.get('button[type="submit"]'),
        forgotPasswordLink: () => cy.contains('Forgot your password?'),
        dashboardHeader: () => cy.contains('Dashboard'),
        errorMessage: () => cy.get('.oxd-alert-content-text'),
        requiredFieldMessage: () => cy.get('.oxd-input-field-error-message')
    }

    visit() {
        cy.visit('/web/index.php/auth/login')
    }

    typeUsername(username) {
        this.elements.usernameInput().clear().type(username)
    }

    typePassword(password) {
        this.elements.passwordInput().clear().type(password)
    }

    clickLogin() {
        this.elements.loginButton().click()
    }

    clickForgotPassword() {
        this.elements.forgotPasswordLink().click()
    }

    login(username, password) {
        this.typeUsername(username)
        this.typePassword(password)
        this.clickLogin()
    }

    verifyDashboardVisible() {
        this.elements.dashboardHeader().should('be.visible')
    }

    verifyErrorMessage(expectedMessage) {
        this.elements.errorMessage().should('contain', expectedMessage)
    }

    verifyRequiredFieldMessage(field) {
        if (field === 'username') {
            this.elements.requiredFieldMessage().first().should('contain', 'Required')
        } else if (field === 'password') {
            this.elements.requiredFieldMessage().last().should('contain', 'Required')
        } else if (field === 'both') {
            this.elements.requiredFieldMessage().should('have.length', 2)
            this.elements.requiredFieldMessage().each(($el) => {
                expect($el).to.contain('Required')
            })
        }
    }

    verifyForgotPasswordPage() {
        cy.url().should('include', '/auth/requestPasswordResetCode')
    }

    verifyLoginPage() {
        cy.url().should('include', '/auth/login')
    }
}

export default LoginPage