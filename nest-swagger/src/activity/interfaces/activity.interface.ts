import { ApiProperty } from '@nestjs/swagger';

export class Icon {
    @ApiProperty()
    type: string;

    @ApiProperty({
        description: 'icon背景颜色'
    })
    bg_color: string;

    @ApiProperty({
        description: 'icon边框颜色'
    })
    border_color: string;

    @ApiProperty({
        description: 'icon字体颜色'
    })
    font_color: string;

    @ApiProperty({
        description: 'icon文字信息'
    })
    text: string;

    @ApiProperty()
    source: string;
}

export class Offer {
    @ApiProperty({
        description: '商品id'
    })
    nid: string;

    @ApiProperty({
        description: '商品标题'
    })
    title: string;

    @ApiProperty({
        description: '商品图片地址'
    })
    pict_url: string;

    @ApiProperty({
        type: [Icon],
        description: 'icon',
        required: false
    })
    icons?: Icon[];
}

export class SericeError {
    @ApiProperty({
        description: '错误代码'
    })
    code: number
    @ApiProperty({
        description: '错误描述'
    })
    description: string;
}

export class Paginated<TData> {
    @ApiProperty({
        description: '总数量'
    })
    total: number;

    @ApiProperty()
    limit: number;
  
    @ApiProperty({
        description: '位移'
    })
    offset: number;
  
    results: TData[];

    @ApiProperty({
        description: '错误列表',
        type: [SericeError]
    })
    errors: SericeError[]

    constructor(data: TData[], offset: number = 0, limit: number = 10) {
        this.limit = limit;
        this.offset = offset;
        this.total = data.length;
        this.errors = []
        this.results = data.slice(this.offset, this.offset + limit)
    }
}