require("dotenv").config();

module.exports = {
  dialect: "postgres",
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
  },
};
