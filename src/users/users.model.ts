import { Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  id: number;
  email: string;
  password: string;
  banned: boolean;
  banReason: string;
}
