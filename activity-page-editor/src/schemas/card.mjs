export default { type: 'Element', name: 'Card', props: { ":link": "click_url" }, children: [
    {
      type: 'Template',
      name: 'image',
      children: [
        {
          type: 'Element',
          name: 'RectPic',
          props: { ":value": "pict_url" }
        },
      ]
    },
    {
      type: 'Template',
      name: 'title',
      children: [
        {
          type: 'Element',
          name: 'Title',
          props: {
            ":msg": "title"
          }
        }
      ]
    },
    {
      type: 'Template',
      name: 'under-title',
      children: [
        {
          type: 'Element',
          name: 'Tags',
          props: {
            ":tags": "icons"
          }
        }
      ]
    },
    {
      type: 'Template',
      name: 'price',
      children: [
        {
          type: 'Element',
          name: 'Price',
          props: {
            ":value": "real_wap_price"
          }
        }
      ]
    }
  ] }