# Recipe Recommender

A app to help you find things to cook

## Initial setup

### Dependencies

- Node v12.16.1
- Npm v6.14.4

Run `npm i` in root directory to install dependencies

## Managing Database

### Creating database from scratch

- `$ npx sequelize db:create` to create the database
- `$ npx sequelize db:migrate` to create database tables and schema
- `$ npx sequelize db:seed` to populate database with seed data

### Delete database

- `$ npx sequelize db:drop`

### todos

- add command to clone prod db (heroku???)
- add command to restore clone dump
