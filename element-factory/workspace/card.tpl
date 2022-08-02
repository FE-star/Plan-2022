<Card :link="click_url">
    <template #image>
        <RectPic :value="pict_url" />
        <!-- <CirclePic :value="pict_url" /> -->
    </template>
    <template #title>
        <Title :msg="title" />
    </template>
    <template #under-title>
        <Tags :tags="icons" />
    </template>
    <template #price>
        <Price :value="real_wap_price" />
        <!-- <DeletePrice :value="real_wap_price" /> -->
        <!-- <MonthSell :value="month_sale" /> -->
    </template>
</Card>