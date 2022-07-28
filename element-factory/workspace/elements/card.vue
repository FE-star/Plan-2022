<style scope>
.card-item {
  position: relative;
  float: left;
  width: 372px;
  height: 174px;
  margin: 0 0 18px 18px;
  overflow: hidden;
  color: #333;
  background-color: #f7f9fa;
  border: 1px solid #f7f9fa;
  -webkit-border-radius: 12px;
     -moz-border-radius: 12px;
          border-radius: 12px;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
.card-item.hide {
  display: none;
}
.card-item:hover {
  background-color: #fff;
  border-color: #ff915e;
  -webkit-box-shadow: 0 8px 12px 0 rgba(255, 80, 0, 0.06);
     -moz-box-shadow: 0 8px 12px 0 rgba(255, 80, 0, 0.06);
          box-shadow: 0 8px 12px 0 rgba(255, 80, 0, 0.06);
}
.card-item .item-link {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 11px;
}
.card-item .img-wrapper {
  position: absolute;
  width: 150px;
  height: 150px;
  overflow: hidden;
}
.card-item .info-wrapper {
    margin-left: 162px;
}
.card-item .info-wrapper .title {
  display: inline-block;
  max-height: 46px;
  margin: 6px 0 2px 0;
  overflow: hidden;
}
.card-item .price-wrapper {
  margin-left: 162px;
  position: absolute;
  bottom: 10px;
  width: 195px;
}
</style>

<script setup>
const props = defineProps({
  link: String
})
</script>

<template>
    <div class="card-item" role="listitem">
        <a :href="props.link"
            target="_blank" class="item-link">
            <div class="img-wrapper">
                <slot name="image">image slot</slot>
            </div>
            <div class="info-wrapper">
                <div class="title">
                    <slot name="title">title slot</slot>
                </div>
                <div>
                    <slot name="under-title">under title slot</slot>
                </div>
            </div>
            <div class="price-wrapper">
                <slot name="price">price slot</slot>
            </div>
        </a>
    </div>
</template>