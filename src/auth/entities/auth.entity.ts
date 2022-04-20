import { Exclude } from 'class-transformer';
import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Auth extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public email!: string;

  @Exclude()
  @Column({ type: 'varchar' })
  public password!: string;
}
