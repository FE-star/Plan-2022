<List layout="2">
    <!-- 注入到 default，并拿到slot里面的click_url, pict_url, title, icons, real_wap_price -->
    <template #default="{click_url, pict_url, title, icons, real_wap_price}">
        <Tpl_card 
            :click_url="click_url"
            :pict_url="pict_url"
            :title="title"
            :icons="icons"
            :real_wap_price="real_wap_price"
        ></Tpl_card>
    </template>
</List>