orangehrm-cypress/
├─ cypress/
│ ├─ e2e/
│ │ ├─ auth/
│ │ │ ├─ login.cy.ts
│ │ │ └─ forgot-password.cy.ts
│ │ └─ directory/
│ │ └─ directory.cy.ts
│ ├─ fixtures/
│ │ ├─ users.json
│ │ ├─ forgot.json
│ │ └─ directory.json
│ ├─ pages/
│ │ ├─ LoginPage.ts
│ │ ├─ ForgotPasswordPage.ts
│ │ └─ DirectoryPage.ts
│ └─ support/
│ ├─ commands.ts
│ └─ e2e.ts
├─ cypress.config.ts
├─ package.json
├─ .env # baseUrl & toggles
└─ README.md

# OrangeHRM Cypress – POM + Fixtures + .env


## Jalankan
pnpm i # atau npm i / yarn
yarn cy:open # atau npm run cy:open / pnpm cy:open


## Konsep
- **.env** hanya untuk konfigurasi runtime (baseUrl, toggles).
- **Semua nilai input field** (username, password, search terms) berada di **fixtures**.
- **POM** memusatkan selector & aksi halaman.
- **(P)/(N)** pada judul test case.


## Catatan Stabilitas
- Data demo OrangeHRM bisa berubah; sesuaikan nilai pada `fixtures/*` bila perlu.
- Selector memakai teks/atribut yang umum pada versi terbaru.

- Install
    $ npm install cypress --save-dev
- Run
    $ npx cypress open
    $ npx cypress run
    $ npx cypress open --spec [file_nem].spec.cy
