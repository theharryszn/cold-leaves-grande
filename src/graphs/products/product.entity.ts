import { Directive, Field, ObjectType } from "type-graphql";
import { BaseEntity, Entity } from "typeorm";

@Entity()
@Directive(`@key(fields: "upc")`)
@ObjectType()
export default class Product extends BaseEntity {
  @Field()
  upc: string;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  weight: number;
}