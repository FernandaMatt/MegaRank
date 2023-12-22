import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/pg";

export interface ParticipantInstance extends Model {
  id: string;
  name: string;
  surname: string;
  username: string;
  xp: number;
  avatarurl: string;
  socialurl: string;
}

export const Participant = sequelize.define<ParticipantInstance>(
  "Participant",
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    xp: {
      type: DataTypes.INTEGER,
    },
    avatarurl: {
      type: DataTypes.TEXT,
    },
    socialurl: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);
