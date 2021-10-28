(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Campaigns.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/Campaigns.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Campaign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Campaign */ "./resources/assets/src/components/Campaign.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Campaign: _components_Campaign__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      projectPath: [{
        text: "Campaigns",
        to: "/campaigns"
      }],
      campaigns: [],
      loadLink: null
    };
  },
  mounted: function mounted() {
    this.getCampaigns();
  },
  methods: {
    addCampaign: function addCampaign() {
      this.campaigns.unshift({
        id: "new",
        "new": true,
        sources: [{}]
      });
    },
    getCampaigns: function getCampaigns() {
      var self = this;
      var url = "";

      if (!self.loadLink) {
        url = "/api/campaigns";
      } else {
        url = self.loadLink;
      }

      axios.get(url).then(function (response) {
        self.campaigns = self.campaigns.concat(response.data.data);
        self.loadLink = response.data.next_page_url;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Campaigns.vue?vue&type=template&id=61b69463&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/Campaigns.vue?vue&type=template&id=61b69463& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "h4",
      { staticClass: "py-3 mb-4" },
      [
        _c(
          "button",
          {
            staticClass: "btn btn-success float-right",
            on: { click: _vm.addCampaign }
          },
          [
            _c("i", {
              staticClass: "ion ion-ios-add-circle-outline",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v("\n      New\n    ")
          ]
        ),
        _vm._v(" "),
        _c("b-breadcrumb", {
          staticClass: "font-weight-bold m-0",
          attrs: { items: _vm.projectPath }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _vm._l(_vm.campaigns, function(campaign) {
            return _c("campaign", {
              key: campaign.id,
              staticClass: "card border-secondary mb-4",
              attrs: { campaign: campaign }
            })
          }),
          _vm._v(" "),
          _vm.loadLink
            ? _c(
                "div",
                {
                  staticClass: "btn btn-pill btn-success",
                  on: { click: _vm.getCampaigns }
                },
                [_vm._v("\n        Load More\n      ")]
              )
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/views/Campaigns.vue":
/*!**************************************************!*\
  !*** ./resources/assets/src/views/Campaigns.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Campaigns_vue_vue_type_template_id_61b69463___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Campaigns.vue?vue&type=template&id=61b69463& */ "./resources/assets/src/views/Campaigns.vue?vue&type=template&id=61b69463&");
/* harmony import */ var _Campaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Campaigns.vue?vue&type=script&lang=js& */ "./resources/assets/src/views/Campaigns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Campaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Campaigns_vue_vue_type_template_id_61b69463___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Campaigns_vue_vue_type_template_id_61b69463___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/views/Campaigns.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/views/Campaigns.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/src/views/Campaigns.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Campaigns.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Campaigns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/views/Campaigns.vue?vue&type=template&id=61b69463&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/src/views/Campaigns.vue?vue&type=template&id=61b69463& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaigns_vue_vue_type_template_id_61b69463___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Campaigns.vue?vue&type=template&id=61b69463& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Campaigns.vue?vue&type=template&id=61b69463&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaigns_vue_vue_type_template_id_61b69463___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaigns_vue_vue_type_template_id_61b69463___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);