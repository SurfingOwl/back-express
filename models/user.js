import { DataTypes, Model } from "sequelize"

import db from '../db.js'

export default class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        sequelize: db,
        modelName: 'Users',
        tableName: 'users',
    },
)