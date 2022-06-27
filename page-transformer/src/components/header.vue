<script setup>
    import { onMounted } from 'vue'
    // 一般情况下 header 和 footer 都不会用框架去写，因为可能用在其他很多中场景
    function init() {
        const nav = document.getElementById('J_SiteNavBd')
        const multimenus = nav.querySelectorAll('.J_MultiMenu')
        for (let i = 0, l = multimenus.length; i < l; i++) {
            const menu = multimenus[i]
            menu.addEventListener('mouseover', () => {
                menu.querySelector('.site-nav-menu-list').style = 'display: block'
            }, false)
            menu.addEventListener('mouseout', () => {
                menu.querySelector('.site-nav-menu-list').style = ''
            })
        }
    }

    onMounted(() => {
        init()
    })
</script>

<template>
    <div class="site-nav site-nav-status-logout">
        <div class="site-nav-bd" id="J_SiteNavBd">
            <ul class="site-nav-bd-l" id="J_SiteNavBdL">
                <li class="site-nav-menu site-nav-switch site-nav-multi-menu J_MultiMenu " data-name="region">
                    <div class="site-nav-menu-hd"><span class="site-nav-region">中国大陆</span><span
                            class="site-nav-arrow"><span class="site-nav-icon"></span></span></div>
                    <div class="site-nav-menu-bd site-nav-menu-list">
                        <ul id="J_SiteNavRegionList" class="site-nav-region-list site-nav-menu-bd-panel menu-bd-panel"
                            role="listbox" aria-expanded="true">
                            <li class="site-nav-region-item J_RegionItem" role="option">全球</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">中国大陆</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">中国香港</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">中国台湾</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">中国澳门</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">韩国</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">马来西亚</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">澳大利亚</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">新加坡</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">新西兰</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">加拿大</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">日本</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">越南</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">泰国</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">菲律宾</li>
                            <li class="site-nav-region-item J_RegionItem" role="option">柬埔寨</li>
                        </ul>
                    </div>
                </li>
                <li class="site-nav-menu site-nav-login " id="J_SiteNavLogin" data-name="login" data-spm="754894437">
                    <div class="site-nav-menu-hd">
                        <div class="site-nav-sign"><a
                                href="//login.taobao.com/member/login.jhtml?f=top&amp;redirectURL=https%3A%2F%2Fwww.taobao.com%2F"
                                target="_top" class="h">亲，请登录</a><a
                                href="//reg.taobao.com/member/new_register.jhtml?from=tbtop&amp;ex_info=&amp;ex_sign="
                                target="_top">免费注册</a></div>
                        <div class="site-nav-user"></div>
                    </div>
                    <div class="site-nav-menu-bd" id="J_SiteNavLoginPanel"></div>
                </li>
                <li class="site-nav-menu site-nav-mobile" id="J_SiteNavMobile" data-name="mobile">
                    <div class="site-nav-menu-hd"><a
                            href="https://market.m.taobao.com/app/fdilab/download-page/main/index.html"
                            target="_top"><span>手机逛淘宝</span></a></div>
                </li>
                <li class="site-nav-menu site-nav-mobile" id="J_SiteNavMobile">
                    <div class="site-nav-menu-hd"><a href="javascript:void(0)" id="cniil_wza"
                            target="_self"><span>网页无障碍</span></a></div>
                </li>
            </ul>
            <ul class="site-nav-bd-r" id="J_SiteNavBdR">
                <li class="site-nav-menu site-nav-home" id="J_SiteNavHome" data-name="home">
                    <div class="site-nav-menu-hd"><a href="//www.taobao.com/" target="_top"><span>淘宝网首页</span></a></div>
                </li>
                <li class="site-nav-menu site-nav-mytaobao site-nav-multi-menu J_MultiMenu " id="J_SiteNavMytaobao"
                    data-name="mytaobao">
                    <div class="site-nav-menu-hd"><a href="//i.taobao.com/my_taobao.htm"
                            target="_top"><span>我的淘宝</span></a><span class="site-nav-arrow"><span
                                class="site-nav-icon"></span></span></div>
                    <div class="site-nav-menu-bd site-nav-menu-list">
                        <div class="site-nav-menu-bd-panel menu-bd-panel"><a
                                href="//trade.taobao.com/trade/itemlist/list_bought_items.htm" target="_top">已买到的宝贝</a><a
                                href="//www.taobao.com/markets/footmark/tbfoot" target="_top">我的足迹</a></div>
                    </div>
                </li>
                <li class="site-nav-menu site-nav-cart site-nav-menu-empty site-nav-multi-menu J_MultiMenu " id="J_MiniCart"
                    data-name="cart" data-spm="1997525049">
                    <div class="site-nav-menu-hd"><a
                            href="//cart.taobao.com/cart.htm?from=mini&amp;ad_id=&amp;am_id=&amp;cm_id=&amp;pm_id=1501036000a02c5c3739"
                            target="_top"><span
                                class="site-nav-icon site-nav-icon-highlight"></span><span>购物车</span><strong class="h"
                                id="J_MiniCartNum"></strong></a></div>
                    <div class="site-nav-menu-bd">
                        <div class="site-nav-menu-bd-panel menu-bd-panel"></div>
                    </div>
                </li>
                <li class="site-nav-menu site-nav-favor site-nav-multi-menu J_MultiMenu " id="J_SiteNavFavor"
                    data-name="favor" data-spm="1997525053">
                    <div class="site-nav-menu-hd"><a href="//shoucang.taobao.com/item_collect.htm" target="_top"><span
                                class="site-nav-icon"></span><span>收藏夹</span></a><span class="site-nav-arrow"><span
                                class="site-nav-icon"></span></span></div>
                    <div class="site-nav-menu-bd site-nav-menu-list">
                        <div class="site-nav-menu-bd-panel menu-bd-panel"><a href="//shoucang.taobao.com/item_collect.htm"
                                target="_top">收藏的宝贝</a><a href="//shoucang.taobao.com/shop_collect_list.htm"
                                target="_top">收藏的店铺</a></div>
                    </div>
                </li>
                <li class="site-nav-menu site-nav-catalog" id="J_SiteNavCatalog" data-name="catalog" data-spm="1997563209">
                    <div class="site-nav-menu-hd"><a href="//www.taobao.com/tbhome/page/market-list"
                            target="_top"><span>商品分类</span></a><a
                            href="//ishop.taobao.com/openshop/tb_open_shop_landing.htm" target="_top"><span>免费开店</span></a>
                    </div>
                </li>
                <li class="site-nav-pipe">|</li>
                <li class="site-nav-menu site-nav-seller site-nav-multi-menu J_MultiMenu " id="J_SiteNavSeller"
                    data-name="seller">
                    <div class="site-nav-menu-hd"><a href="//myseller.taobao.com/home.htm/QnworkbenchHome/"
                            target="_top"><span>千牛卖家中心</span></a><span class="site-nav-arrow"><span
                                class="site-nav-icon"></span></span></div>
                    <div class="site-nav-menu-bd site-nav-menu-list">
                        <div class="site-nav-menu-bd-panel menu-bd-panel"><a
                                href="//myseller.taobao.com/home.htm/QnworkbenchHome/" target="_top">开店入驻</a><a
                                href="//trade.taobao.com/trade/itemlist/list_sold_items.htm?toNew=true"
                                target="_top">已卖出的宝贝</a><a href="//sell.taobao.com/auction/goods/goods_on_sale.htm"
                                target="_top">出售中的宝贝</a><a href="//fuwu.taobao.com/?tracelog=tbdd"
                                target="_top">卖家服务市场</a><a href="//daxue.taobao.com/" target="_top">卖家培训中心</a><a
                                href="//healthcenter.taobao.com/home/health_home.htm" target="_top">体检中心</a><a
                                href="//qn.taobao.com/headline/news" target="_top">电商学习中心</a></div>
                    </div>
                </li>
                <li class="site-nav-menu site-nav-service site-nav-multi-menu J_MultiMenu " id="J_SiteNavService"
                    data-name="service">
                    <div class="site-nav-menu-hd"><a href="https://consumerservice.taobao.com"
                            target="_top"><span>联系客服</span></a><span class="site-nav-arrow"><span
                                class="site-nav-icon"></span></span></div>
                    <div class="site-nav-menu-bd site-nav-menu-list">
                        <div class="site-nav-menu-bd-panel menu-bd-panel"><a
                                href="https://consumerservice.taobao.com/online-help" target="_top">消费者客服</a><a
                                href="//helpcenter.taobao.com/index?from=high" target="_top">卖家客服</a><a
                                href="https://market.m.taobao.com/app/tbhome/feedback/index.html?from=https%3A%2F%2Fwww.taobao.com%2F"
                                target="_top">意见反馈</a><a href="https://market.m.taobao.com/app/im/chat/index.html"
                                target="_top">网页版旺旺</a></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.site-nav .site-nav-loading {
  background: url("//img.alicdn.com/tps/i3/T1b1m3XkVpXXXXXXXX-32-32.gif") no-repeat center;
}
@font-face {
  font-family: "global-iconfont";
  src: url("//at.alicdn.com/t/font_1404888168_2057645.eot");
  src: url("//at.alicdn.com/t/font_1404888168_2057645.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_1404888168_2057645.woff") format("woff"), url("//at.alicdn.com/t/font_1404888168_2057645.ttf") format("truetype"), url("//at.alicdn.com/t/font_1404888168_2057645.svg#uxiconfont") format("svg");
}
.site-nav .site-nav-icon {
  font-family: "global-iconfont";
  font-size: 12px;
  font-style: normal;
  margin-top: -3px\9;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscaleFont type;
  margin-right: 5px;
  _line-height: 33px;
  color: #9c9c9c;
}
.site-nav .site-nav-menu-hd a:hover .site-nav-icon {
  color: #f40;
}
.site-nav .site-nav-bd-r .site-nav-icon {
  width: 12px;
}
.site-nav .site-nav-icon-highlight {
  color: #f40;
}
.site-nav .site-nav-arrow {
  display: block;
  float: left;
  width: 12px;
  height: 6px;
  line-height: 6px;
  overflow: hidden;
  margin-top: 16px;
}
.site-nav .site-nav-arrow .site-nav-icon {
  display: block;
  margin-top: -4px;
  margin-right: 20px;
}
.site-nav {
  z-index: 10000;
  width: 100%;
  background-color: #f5f5f5;
  border-bottom: 1px solid #eee;
  *zoom: 1;
}
.site-nav:after {
  content: "";
  display: table;
  clear: both;
}
.site-nav textarea {
  display: none;
}
.site-nav .site-nav-bd {
  margin: 0 auto;
  width: 1190px;
  height: 35px;
  background: #f5f5f5;
  -webkit-backface-visibility: hidden;
  *zoom: 1;
}
.site-nav .site-nav-bd:after {
  content: "";
  display: table;
  clear: both;
}
.site-nav .site-nav-bd a {
  color: #3c3c3c;
}
.site-nav .site-nav-bd a:hover {
  color: #f40;
  text-decoration: none;
}
.site-nav .site-nav-bd .site-nav-pipe {
  padding: 0 5px;
  font-style: normal;
  color: #ddd;
}
.site-nav .site-nav-bd .site-nav-bd-l {
  float: left;
  visibility: hidden;
}
.site-nav .site-nav-bd .site-nav-bd-r {
  float: right;
}
.site-nav .site-nav-bd .site-nav-bd-r .site-nav-pipe {
  float: left;
  height: 35px;
  line-height: 35px;
}
.site-nav .site-nav-bd .h {
  color: #f22e00 !important;
}
.site-nav .site-nav-bd .site-nav-btn {
  display: inline-block;
  vertical-align: middle;
  *vertical-align: auto;
  *zoom: 1;
  *display: inline;
  padding: 0 10px;
  height: 25px;
  line-height: 25px;
  color: #fff;
  background: #f40;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}
.site-nav .site-nav-bd .site-nav-btn:hover {
  color: #fff;
  background: #f40;
}
.site-nav-status-logout .site-nav-bd .site-nav-bd-l,
.site-nav-status-login .site-nav-bd .site-nav-bd-l {
  visibility: visible;
}
.ie-updator-67 .browser-updator {
  display: none;
}
.tb-ie-updater-layer {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  filter: alpha(opacity=50);
  opacity: 0.5;
  z-index: 99999999;
}
.tb-ie-updater-box {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -292px;
  margin-top: -210px;
  width: 584px;
  height: 420px;
  background: url(//img.alicdn.com/tps/TB1pH4SLpXXXXXEXVXXXXXXXXXX-584-419.png) no-repeat;
  z-index: 100000000;
}
.tb-ie-updater-box a {
  position: absolute;
  text-decoration: none;
  color: #71a403;
  font-size: 14px;
  width: 130px;
  height: 32px;
  background-color: #FFF;
  text-align: center;
  line-height: 32px;
}
.tb-ie-updater-box a:hover {
  font-weight: bold;
}
.tb-ie-updater-google {
  left: 55px;
  top: 107px;
}
.tb-ie-updater-uc {
  top: 107px;
  left: 212px;
}
.site-nav .site-nav-menu {
  float: left;
}
.site-nav .site-nav-menu .site-nav-menu-hd {
  z-index: 10002;
  position: relative;
  padding: 0 6px;
  height: 35px;
  line-height: 35px;
  _display: inline;
  _zoom: 1;
}
.site-nav .site-nav-menu .site-nav-menu-hd a {
  float: left;
  margin-right: 7px;
  font-size: 12px;
  color: #6C6C6C;
}
.site-nav .site-nav-menu .site-nav-menu-hd a:hover {
  color: #FF4400;
}
.site-nav .site-nav-menu .site-nav-menu-hd a span {
  float: left;
  cursor: pointer;
}
.site-nav .site-nav-menu .site-nav-menu-bd {
  z-index: 10001;
  position: relative;
  display: none;
  margin-top: -1px;
}
.site-nav .site-nav-menu .site-nav-menu-bd .site-nav-menu-bd-panel {
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px;
  line-height: normal;
  border: 1px solid #EEEEEE;
  background: #FFF;
}
.site-nav .site-nav-menu .site-nav-menu-bd .site-nav-menu-iframe-shim {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  background: none;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
}
.site-nav .site-nav-menu .site-nav-menu-empty .site-nav-menu-hd i {
  display: none;
}
.site-nav .site-nav-menu .site-nav-menu-list .site-nav-menu-bd-panel {
  padding: 8px 0;
}
.site-nav .site-nav-menu .site-nav-menu-list .site-nav-menu-bd-panel a {
  display: block;
  padding: 0 5px;
  line-height: 28px;
  white-space: nowrap;
  color: #6C6C6C;
  font-size: 12px;
}
.site-nav .site-nav-menu .site-nav-menu-list .site-nav-menu-bd-panel a:hover {
  color: #6C6C6C;
  background: #F5F5F5;
}
.site-nav .site-nav-menu .site-nav-menu-list .site-nav-menu-bd-panel a span {
  margin-left: 5px;
}
.site-nav .site-nav-menu .site-nav-menu-list .site-nav-menu-bd-panel .site-nav-btn {
  margin: 5px 8px 0;
  color: #FFF;
  line-height: 25px;
}
.site-nav .site-nav-menu .site-nav-menu-list .site-nav-menu-bd-panel .site-nav-btn:hover {
  color: #FFF;
  background: #FF4400;
}
.site-nav .site-nav-menu-hover .site-nav-menu-hd {
  padding: 0 5px;
  border-width: 0 1px;
  border-style: solid;
  border-color: #EEEEEE;
  background: #FFF;
}
.site-nav .site-nav-menu-hover .site-nav-menu-bd {
  display: block;
}
.tb-global-pad-notice {
  width: 100%;
  height: 60px;
  overflow: hidden;
  position: relative;
}
.tb-global-pad-notice span {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  display: block;
  line-height: 40px;
  font-size: 28px;
  text-align: center;
  color: #fff;
  border-radius: 20px;
  -webkit-font-smoothing: antialiased;
}
.site-nav-at-mobile {
  border-bottom: none;
}
.site-nav-at-mobile .site-nav-bd {
  height: 40px;
}
.site-nav-at-mobile .site-nav-mobile,
.site-nav-at-mobile .site-nav-home,
.site-nav-at-mobile .site-nav-catalog,
.site-nav-at-mobile .site-nav-seller {
  display: none;
}
.site-nav-at-mobile .siete-nav-menu .site-nav-menu-hd {
  height: 40px;
  line-height: 40px;
}
.site-nav-at-mobile .siete-nav-menu i {
  position: relative;
  -moz-transition: none;
  -o-transition: none;
  -webkit-transition: none;
  transition: none;
  position: absolute;
  margin: 0;
  display: none;
  bottom: -1px;
  left: 40%;
  width: 12px;
  height: 6px;
}
.site-nav-at-mobile .siete-nav-menu i em,
.site-nav-at-mobile .siete-nav-menu i span {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-color: rgba(255, 255, 255, 0);
  border-color: transparent \0;
  *border-color: transparent;
  _border-color: tomato;
  _filter: chroma(color=tomato);
  border-style: solid;
  overflow: hidden;
  *zoom: 1;
  border-width: 0 5px 5px;
}
.site-nav-at-mobile .siete-nav-menu i em {
  top: -1px;
  border-bottom-color: #eee;
}
.site-nav-at-mobile .siete-nav-menu i span {
  border-bottom-color: #fff;
}
.site-nav-at-mobile .site-nav-menu-hover .site-nav-menu-hd i {
  display: block;
}
.site-nav-at-mobile .site-nav-menu-hover .site-nav-menu-bd {
  display: block;
}
.site-nav-at-mobile .site-nav-login img {
  cursor: pointer;
  margin: 2px 0;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  border: 2px solid #fff;
}
.site-nav-at-mobile .site-nav-bd-r .site-nav-pipe {
  display: none;
}
@media (max-width: 1219px) {
  .site-nav-at-mobile .site-nav-bd {
    width: 990px;
  }
  .site-nav-at-mobile .site-nav-sitemap .mod li {
    width: 33%;
  }
}
@media (max-width: 1009px) {
  .site-nav-at-mobile .site-nav-bd {
    width: 740px;
  }
  .site-nav-at-mobile .site-nav-guide,
  .site-nav-at-mobile .site-nav-seller {
    display: none;
  }
  .site-nav-at-mobile .site-nav-sitemap .site-nav-menu-bd-panel {
    width: 722px;
  }
  .site-nav-at-mobile .site-nav-sitemap .site-nav-menu-bd-panel .mod {
    width: 50%;
  }
  .site-nav-at-mobile .site-nav-sitemap .site-nav-menu-bd-panel .mod li {
    width: 20%;
  }
  .site-nav-at-mobile .site-nav-sitemap .site-nav-menu-bd-panel .mod-b .mod-wrap {
    border-right: none;
  }
  .site-nav-at-mobile .site-nav-weekend {
    display: none;
  }
}
.tmsg_panel_apps,
.tmsg_panel_detail,
.tmsg_panel_history,
.tmsg_panel_setting {
  width: 288px;
  border-top: 0;
  position: absolute;
  background: #FFF;
  box-shadow: 1px 1px 2px #ddd;
  z-index: 10000000000;
}
.tmsg_panel_head {
  height: 37px;
  line-height: 37px;
  position: relative;
  text-align: center;
  border-bottom: 1px solid #EEE;
}
.tmsg_panel_foot {
  height: 32px;
  border-top: 1px solid #EEE;
  position: relative;
}

.site-nav .site-nav-switch .site-nav-region {
  float: left;
  margin-right: 7px;
}
.site-nav .site-nav-region-list {
  padding-top: 8px;
  max-height: 270px;
  overflow-y: scroll;
  border: 1px solid #f4f4f4;
}
.site-nav .site-nav-region-list .site-nav-region-item {
  width: 242px;
  height: 29px;
  line-height: 29px;
  padding-left: 8px;
  cursor: pointer;
}
.site-nav .site-nav-region-list .site-nav-region-item.active,
.site-nav .site-nav-region-list .site-nav-region-item:hover {
  background-color: #f4f4f4;
}


</style>