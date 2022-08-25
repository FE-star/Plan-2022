import card from './card.mjs'

export default {
    type: 'Element',
    name: 'List',
    props: {
        layout: '2'
    },
    children: [
        {
            type: 'Template',
            name: 'default',
            value: '{click_url, pict_url, title, icons, real_wap_price, month_sale}',
            children: [
                {
                    type: 'Tpl',
                    name: 'card',
                    props: {
                        ":click_url": "click_url",
                        ":pict_url": "pict_url",
                        ":title": "title",
                        ":icons": "icons",
                        ":real_wap_price": "real_wap_price",
                        ":month_sale": "month_sale"
                    },
                    children: [card]
                }
            ]
        } 
    ]
}