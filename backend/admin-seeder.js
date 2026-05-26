const adminDetails = require("./models/Admin/details.model.js");
const adminCredential = require("./models/Admin/credential.model.js");
const connectToMongo = require("./Database/db.js");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const seedData = async () => {
    try {
        await connectToMongo();
        await new Promise((resolve) => setTimeout(resolve, 1500));

        await adminCredential.deleteMany({});
        await adminDetails.deleteMany({});

        const staticSalt = process.env.STATIC_SALT || "mySecretStaticSalt";
        const password = "admin123";
        const dynamicSalt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(
            dynamicSalt + password + staticSalt,
            10
        );

        await adminCredential.create({
            loginid: 123456,
            password: hashedPassword,
            dynamic_salt: dynamicSalt,
        });

        await adminDetails.create({
            employeeId: "123456",
            firstName: "Sundar",
            middleName: "R",
            lastName: "Pichai",
            email: "sundarpichar@gmail.com",
            phoneNumber: "1234567890",
            gender: "Male",
            type: "Admin",
            profile: "Faculty_Profile_123456.jpg",
        });

        console.log("Seeding completed successfully!");
        console.log("Admin login — ID: 123456, Password: admin123");
    } catch (error) {
        console.error("Error while seeding:", error);
    } finally {
        await mongoose.connection.close();
        process.exit();
    }
};

seedData();
