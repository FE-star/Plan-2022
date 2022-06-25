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
  background-color: rgba(27, 23, 67, 0.03);
  -webkit-border-radius: 10px;
     -moz-border-radius: 10px;
          border-radius: 10px;
}
.card-item .img-wrapper img {
  display: block;
  width: 100%;
  height: 100%;
  -webkit-border-radius: 10px;
     -moz-border-radius: 10px;
          border-radius: 10px;
}
.card-item .info-wrapper {
  height: 116px;
  margin-left: 162px;
  overflow: hidden;
}
.card-item .info-wrapper .title {
  display: inline-block;
  max-height: 46px;
  margin: 6px 0 2px 0;
  overflow: hidden;
  color: #333;
  font-size: 16px;
  line-height: 23px;
}
.card-item .info-wrapper .title img {
  height: 16px;
  margin-top: 3px;
  margin-right: 6px;
  vertical-align: top;
}
.card-item .info-wrapper .title:hover {
  color: #ff5000;
}
.card-item .info-wrapper .tag-list {
  height: 20px;
  overflow: hidden;
}
.card-item .info-wrapper .tag-list .tag-item {
  display: inline-block;
  height: 20px;
  margin-right: 6px;
  padding: 0 4px;
  color: #ff5000;
  font-size: 12px;
  line-height: 18px;
  vertical-align: top;
  border: 1px solid #ff5000;
  -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
          border-radius: 3px;
}
.card-item .info-wrapper .tag-list .tag-item.graphic-tag {
  padding: 0;
  border: none;
}
.card-item .info-wrapper .tag-list .tag-item.graphic-tag span {
  display: inline-block;
  padding: 0 5px;
  line-height: 20px;
}
.card-item .info-wrapper .tag-list .tag-item.graphic-tag .left {
  -webkit-border-radius: 3px 0 0 3px;
     -moz-border-radius: 3px 0 0 3px;
          border-radius: 3px 0 0 3px;
}
.card-item .info-wrapper .tag-list .tag-item.graphic-tag .right {
  -webkit-border-radius: 0 3px 3px 0;
     -moz-border-radius: 0 3px 3px 0;
          border-radius: 0 3px 3px 0;
}
.card-item .info-wrapper .tag-list img {
  height: 20px;
  vertical-align: top;
}
.card-item .price-wrapper {
  margin-left: 162px;
  color: #ff5000;
}
.card-item .price-wrapper .price-value {
  display: inline-block;
  font-size: 22px;
  line-height: 22px;
}
.card-item .price-wrapper .price-value em {
  margin-right: 4px;
  font-size: 14px;
  font-family: "Microsoft Yahei";
  vertical-align: middle;
}
.card-item .price-wrapper .price-desc {
  margin-left: 2px;
  font-size: 12px;
  vertical-align: text-bottom;
}
.card-container .skeleton-i {
  float: left;
  height: 174px;
  margin-bottom: 18px;
  overflow: hidden;
  white-space: nowrap;
}
.card-container .skeleton-i .skeleton-img {
  float: left;
  width: 40%;
  height: 100%;
  background: #ededed;
}
.card-container .skeleton-i .skeleton-i-right {
  float: left;
  width: 56%;
  height: 100%;
  margin-top: 1.2%;
  margin-left: 3%;
  overflow: hidden;
}
.card-container .skeleton-i .skeleton-i-right .skeleton-text {
  width: 100%;
  height: 10%;
  margin-bottom: 7%;
  background: #ededed;
}
.card-container .skeleton-i .skeleton-i-right .skeleton-text.last {
  width: 45%;
  margin-top: 20%;
}
</style>

<script>


export default {
    props: {
        data: Object
    },
    computed: {
        url: function () {
            return `//item.taobao.com/item.htm?id=${this.data.nid}`
        }
    }
}
</script>

<template>
    <div class="card-item" role="listitem">
        <a :href="url"
            target="_blank" class="item-link">
            <div class="img-wrapper">
                <img v-src="data.pict_url"
                    aria-labelledby="rc-item-tl-0">
            </div>
            <div class="info-wrapper">
                <div class="title">
                    {{data.title}}</div>
                <div class="tag-list" v-if="data.icons">
                    <div v-for="item in data.icons" class="tag-item" :style="{color: item.font_color, borderColor: item.border_color, background: item.bg_color}">
                        {{ item.text }}
                    </div>
                </div>
            </div>
            <div class="price-wrapper">
                <span class="price-value"><em>¥</em>125</span>
            </div>
        </a>
    </div>
</template>