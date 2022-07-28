import { openBlock, createElementBlock, createElementVNode, renderSlot, createTextVNode, toDisplayString, Fragment, renderList, createBlock, withCtx, createVNode } from "vue";
var card_vue_vue_type_style_index_0_scope_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
const _hoisted_1$1 = {
  class: "card-item",
  role: "listitem"
};
const _hoisted_2 = {
  href: "javascript:void(0);",
  target: "_blank",
  class: "item-link"
};
const _hoisted_3 = { class: "img-wrapper" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("image slot");
const _hoisted_5 = { class: "info-wrapper" };
const _hoisted_6 = { class: "title" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode("title slot");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("under title slot");
const _hoisted_9 = { class: "price-wrapper" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode("price slot");
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("a", _hoisted_2, [
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
    ])
  ]);
}
var Card = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
var title_vue_vue_type_style_index_0_scoped_c9d794a6_lang = "";
const _sfc_main$1 = {
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
var Title = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c9d794a6"]]);
var tags_vue_vue_type_style_index_0_scoped_2d1bbb86_lang = "";
const _hoisted_1 = { class: "tag-list" };
const _sfc_main = {
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.tags, (item) => {
          return openBlock(), createElementBlock("div", {
            class: "tag-item",
            key: item
          }, toDisplayString(item), 1);
        }), 128))
      ]);
    };
  }
};
var Tags = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2d1bbb86"]]);
var app = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Card, null, {
        title: withCtx(() => [
          createVNode(Title, { msg: "\u7F6E\u7269\u67B6\u4E0D\u9508\u94A2\u8272\u50A8\u7269\u67B6\u53A8\u623F\u4E94\u5C42\u843D\u5730\u53EF\u8C03\u8282\u6536\u7EB3\u67B6\u8D27\u67B6\u9633\u53F0\u591A\u5C42\u67B6\u5B50" })
        ]),
        "under-title": withCtx(() => [
          createVNode(Tags, { tags: ["123", "321"] })
        ]),
        _: 1
      });
    };
  }
};
export { app as default };
