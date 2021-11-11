import { Directive, Field, ObjectType } from "type-graphql";
import { BaseEntity, Entity, PrimaryColumn } from "typeorm";

@Entity()
@Directive(`@key(fields: "upc")`)
@ObjectType()
export default class Product extends BaseEntity {

  @PrimaryColumn()
  @Field()
  upc: string;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  weight: number;
}