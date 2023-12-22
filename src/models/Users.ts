import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/pg";

export interface UserInstance extends Model {
  id: number;
  name: string;
  surname: string;
  username: string;
  avatarurl: string;
  socialurl: string;
}

export const User = sequelize.define<UserInstance>(
  "User",
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.TEXT,
    },
    surname: {
      type: DataTypes.TEXT,
    },
    username: {
      type: DataTypes.TEXT,
    },
    xp: {
      type: DataTypes.INTEGER,
    },
    avatarurl: {
      type: DataTypes.TEXT,
    },
    socialurl: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);