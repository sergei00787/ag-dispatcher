module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "postgresasd",
  DB: "asdmechel",
  SCHEMA: "asd",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// module.exports = {
//   HOST: "ec2-52-31-233-101.eu-west-1.compute.amazonaws.com",
//   USER: "gvgblbxzflxceu",
//   PASSWORD: "bc879f82b5218847f381623b3352e5caf16484f888cc4b56dfbcc0d1a7cd597d",
//   DB: "d4kai8h1p86uhu",
//   SCHEMA: "asd",
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };