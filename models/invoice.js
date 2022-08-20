//Import database connection from config folder
const sequelize = require('../config/connection');

//import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

//import client.js  as client_id is foreign key
const client = require('./client');

//initialize Invoice model (table) by extending off Sequelize model class
class Invoice extends Model {}

//Invoice table declaration
Invoice.init(
    {
        invoice_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            
        },
        due_date: {
            type: DataTypes.DATE,
            allowNull: false,
              
        },
        memo: {
            type: DataTypes.STRING
        },
        id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'client',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'invoice',
    }
);

module.exports = Invoice;
