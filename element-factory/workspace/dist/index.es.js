import { openBlock, createElementBlock, createElementVNode, renderSlot, createTextVNode, toDisplayString, Fragment, renderList, normalizeStyle, createBlock, withCtx, createVNode } from "vue";
var card_vue_vue_type_style_index_0_scope_true_lang = "";
const _hoisted_1$3 = {
  class: "card-item",
  role: "listitem"
};
const _hoisted_2$2 = ["href"];
const _hoisted_3 = { class: "img-wrapper" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("image slot");
const _hoisted_5 = { class: "info-wrapper" };
const _hoisted_6 = { class: "title" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode("title slot");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("under title slot");
const _hoisted_9 = { class: "price-wrapper" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode("price slot");
const _sfc_main$4 = {
  __name: "card",
  props: {
    link: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createElementVNode("a", {
          href: props.link,
          target: "_blank",
          class: "item-link"
        }, [
          createElementVNode("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "image", {}, () => [
              _hoisted_4
            ])
          ]),
          createElementVNode("div", _hoisted_5, [
            createElementVNode("div", _hoisted_6, [
              renderSlot(_ctx.$slots, "title", {}, () => [
                _hoisted_7
              ])
            ]),
            createElementVNode("div", null, [
              renderSlot(_ctx.$slots, "under-title", {}, () => [
                _hoisted_8
              ])
            ])
          ]),
          createElementVNode("div", _hoisted_9, [
            renderSlot(_ctx.$slots, "price", {}, () => [
              _hoisted_10
            ])
          ])
        ], 8, _hoisted_2$2)
      ]);
    };
  }
};
var rectPic_vue_vue_type_style_index_0_scoped_15225c77_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$2 = { class: "img-container" };
const _hoisted_2$1 = ["src"];
const _sfc_main$3 = {
  __name: "rect-pic",
  props: {
    value: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createElementVNode("img", {
          src: props.value
        }, null, 8, _hoisted_2$1)
      ]);
    };
  }
};
var RectPic = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-15225c77"]]);
var title_vue_vue_type_style_index_0_scoped_c9d794a6_lang = "";
const _sfc_main$2 = {
  __name: "title",
  props: {
    msg: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("p", null, toDisplayString(props.msg), 1);
    };
  }
};
var Title = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c9d794a6"]]);
var tags_vue_vue_type_style_index_0_scoped_af5c5eb3_lang = "";
const _hoisted_1$1 = { class: "tag-list" };
const _sfc_main$1 = {
  __name: "tags",
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.tags, (item) => {
          return openBlock(), createElementBlock("div", {
            class: "tag-item",
            key: item,
            style: normalizeStyle({ color: item.font_color, borderColor: item.border_color, background: item.bg_color })
          }, toDisplayString(item.text), 5);
        }), 128))
      ]);
    };
  }
};
var Tags = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-af5c5eb3"]]);
var price_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "price-value" };
const _hoisted_2 = /* @__PURE__ */ createElementVNode("em", null, "\xA5", -1);
const _sfc_main = {
  __name: "price",
  props: {
    value: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1, [
        _hoisted_2,
        createTextVNode(toDisplayString(props.value), 1)
      ]);
    };
  }
};
const __default__ = {
  data: (el) => {
    console.log("data === ", el.$attrs);
    return el.$attrs;
  }
};
var app = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$4, { link: _ctx.click_url }, {
        image: withCtx(() => [
          createVNode(RectPic, { value: _ctx.pict_url }, null, 8, ["value"])
        ]),
        title: withCtx(() => [
          createVNode(Title, { msg: _ctx.title }, null, 8, ["msg"])
        ]),
        "under-title": withCtx(() => [
          createVNode(Tags, { tags: _ctx.icons }, null, 8, ["tags"])
        ]),
        price: withCtx(() => [
          createVNode(_sfc_main, { value: _ctx.real_wap_price }, null, 8, ["value"])
        ]),
        _: 1
      }, 8, ["link"]);
    };
  }
});
export { app as default };
