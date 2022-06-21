const path = require('path');

export const config = {
    port: 3000,
    uploadsDir: "uploads",
    appSecretKey: "SAdfasdcafasf23$@#$@#$534RT#$%T$%#R@Dr43",
    database: {
        username: 'root',
        password: 'root',
        storage: path.join(__dirname, '..', 'databaseGallery.sqlite'),
        host: 'localhost',
        dialect: 'sqlite',
        logging: console.log
    }
}