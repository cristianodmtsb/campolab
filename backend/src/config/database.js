require("dotenv").config();

module.exports = {
  dialect: "postgres",
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
  },
};
