const Sequelize = require("sequelize");
const sequelize = new Sequelize("SampleDB", "sa", "1234", {
  host: "DESKTOP-IUEI3P0",
  dialect: "mssql",
  dialectOptions: {
    options: {
      validateBulkLoadParameters: true,
      encrypt: false,
    },
  },
});

sequelize
  .authenticate()
  .then((err) => {
    console.log("Connection successful", err);
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
  });

// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }
