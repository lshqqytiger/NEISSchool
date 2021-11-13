import * as TypeORM from "typeorm";

@TypeORM.Entity({ name: "comment" })
export default class Comment implements DB.Sessionizable<DB.Comment> {
  @TypeORM.PrimaryColumn({ name: "id", type: "int" })
  public id!: number;

  @TypeORM.Column({ name: "writer", type: "text" })
  public writer!: string;

  @TypeORM.Column({ name: "target", type: "text" })
  public target!: string;

  @TypeORM.Column({ name: "content", type: "text" })
  public content!: string;

  @TypeORM.Column({ name: "status", type: "json" })
  public status!: any;

  @TypeORM.Column({ name: "createdAt", type: "timestamp" })
  public createdAt!: Date;

  @TypeORM.Column({ name: "like", type: "int" })
  public like!: number;

  @TypeORM.Column({ name: "unlike", type: "int" })
  public unlike!: number;

  @TypeORM.Column({ name: "reported", type: "int" })
  public reported!: number;

  @TypeORM.Column({ name: "password", type: "text" })
  public password!: string;

  @TypeORM.Column({ name: "ip", type: "text" })
  public ip!: string;

  sessionize(): DB.Comment {
    return {
      id: this.id,
      writer: this.writer,
      target: this.target,
      content: this.content,
      status: this.status,
      createdAt: this.createdAt,
      like: this.like,
      unlike: this.unlike,
      reported: this.reported,
      password: this.password,
      ip: this.ip,
    };
  }
}
