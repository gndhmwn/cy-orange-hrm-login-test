import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';
dotenv.config();


export default defineConfig({
e2e: {
baseUrl: process.env.ORANGEHRM_BASE_URL || 'https://opensource-demo.orangehrmlive.com',
setupNodeEvents(on, config) {
// Sinkronkan var .env ke Cypress env bila diperlukan
config.env.HEADED = process.env.HEADED === 'true';
config.video = process.env.VIDEO === 'true';
return config;
}
},
viewportWidth: 1280,
viewportHeight: 800
});