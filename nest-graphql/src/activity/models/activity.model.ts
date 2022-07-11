import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({
    description: '图标'
})
export class Icon {
    @Field()
    type: string;

    @Field()
    bg_color: string;

    @Field()
    border_color: string;

    @Field()
    font_color: string;

    @Field()
    text: string;

    @Field()
    source: string;
}

@ObjectType({
    description: '商品'
})
export class Offer {
    @Field(type => ID)
    nid: string;

    @Field()
    title: string;

    @Field()
    pict_url: string;

    @Field(type => [Icon])
    icons?: Icon[];
}