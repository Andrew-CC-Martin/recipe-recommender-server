const { Sequelize, DataTypes } = require('sequelize')

const config = require('../config/config.json');
// const userModel = require('./user-backup')
const userModel = require('./user')
// import { userModel } from './user'
const { appConfig } = require('../../constants')

/**
 * In this module the sequelize ORM is instantiated, based on the configuration,
 * as well as the various models that have been defined. The module returns the
 * sequelize objects for each model.
 */

const env = process.env.NODE_ENV || appConfig.DEFAULT_ENVIRONMENT;
const { database, username, password, host } = config[env]

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: 'postgres'
})

sequelize.authenticate()
  .then(console.log('Connection to database has been established successfully'))
  .catch(error => console.log('Unable to connect to the database: ', error))

const User = userModel(sequelize, DataTypes)

// const muckAround = async () => {
//   // todo  - get rid of this sync operation once the schema's been sorted (it's destructive)
//   await sequelize.sync({ force: true })
//   console.log('database and tables created')
//   try {
//     await User.create({ name: 'bill', email: 'billemail' })
//   } catch(err) {
//     console.log('Failed to create user:', err.errors[0].message)
//   }
// }
// muckAround()

module.exports = {
  User
}

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// // Initialise instance of sequelize
// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// sequelize.authenticate()
//   .then(console.log('Connection to database has been established successfully'))
//   .catch(error => console.log('Unable to connect to the database: ', error))




// // For each model in this directory, add it to the database object
// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
