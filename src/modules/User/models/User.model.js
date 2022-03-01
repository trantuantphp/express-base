import { Model, DataTypes } from 'sequelize';
import db_sql from 'database/my_sql.db';
import { validate_model } from 'helpers/validate';

class UserModel extends Model {}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                ...validate_model.isEmail,
            },
        },
        added_timestamp: DataTypes.INTEGER.UNSIGNED,
        modified_timestamp: DataTypes.INTEGER.UNSIGNED,
    },
    {
        sequelize: db_sql,
        modelName: 'users',
        timestamps: false,
        tableName: 'users',
    },
);

export default UserModel;
