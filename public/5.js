(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/WaitingContentCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/WaitingContentCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_code_diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-code-diff */ "./node_modules/vue-code-diff/dist/vue-code-diff.js");
/* harmony import */ var vue_code_diff__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_code_diff__WEBPACK_IMPORTED_MODULE_0__);
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
  props: {
    organization: {}
  },
  components: {
    CodeDiff: vue_code_diff__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      declineMode: false,
      declineReason: ''
    };
  },
  mounted: function mounted() {},
  methods: {
    approve: function approve() {
      var self = this;
      axios.get('/api/organizations/' + this.organization.id + '/approve').then(function (response) {
        self.$emit('refresh');
      });
    },
    submit: function submit() {
      var self = this;
      axios.post('/api/organizations/' + this.organization.id + '/decline', {
        decline_reason: this.declineReason
      }).then(function (response) {
        self.$emit('refresh');
      });
    },
    actualContent: function actualContent() {
      if (this.organization.actual_content && this.organization.actual_content.content != null) {
        return this.organization.actual_content.content;
      } else {
        return '';
      }
    },
    actualExcerpt: function actualExcerpt() {
      if (this.organization.actual_content && this.organization.actual_content.excerpt != null) {
        return this.organization.actual_content.excerpt;
      } else {
        return '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/WaitingContent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/WaitingContent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_WaitingContentCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/WaitingContentCard */ "./resources/assets/src/components/WaitingContentCard.vue");
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
    WaitingContentCard: _components_WaitingContentCard__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      waiting_content: []
    };
  },
  mounted: function mounted() {
    this.getContent();
  },
  methods: {
    getContent: function getContent() {
      var self = this;
      axios.get("/api/organizations/waiting_content").then(function (response) {
        self.waiting_content = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/WaitingContentCard.vue?vue&type=template&id=fcdaa2d4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/WaitingContentCard.vue?vue&type=template&id=fcdaa2d4& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "b-card",
        {
          staticClass: "mb-4",
          attrs: {
            header: _vm.organization.name,
            "header-tag": "h6",
            "no-body": ""
          }
        },
        [
          _c(
            "b-card-body",
            [
              _c("h5", [_vm._v("Excerpt")]),
              _vm._v(" "),
              _c("code-diff", {
                attrs: {
                  "old-string": _vm.actualExcerpt(),
                  "new-string": _vm.organization.waiting_content.excerpt,
                  context: 10
                }
              }),
              _vm._v(" "),
              _c("h5", { staticClass: "mt-5" }, [_vm._v("Content")]),
              _vm._v(" "),
              _c("code-diff", {
                attrs: {
                  "old-string": _vm.actualContent(),
                  "new-string": _vm.organization.waiting_content.content,
                  context: 10
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("b-card-footer", [
            _c(
              "div",
              { staticClass: "row justify-content-between no-gutters" },
              [
                !_vm.declineMode
                  ? _c(
                      "b-btn",
                      {
                        attrs: { variant: "danger" },
                        on: {
                          click: function($event) {
                            _vm.declineMode = true
                          }
                        }
                      },
                      [_vm._v("Decline")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.declineMode
                  ? _c("b-input", {
                      staticClass: "col no-gutters",
                      attrs: {
                        placeholder: "Fill in the reason of the rejection"
                      },
                      model: {
                        value: _vm.declineReason,
                        callback: function($$v) {
                          _vm.declineReason = $$v
                        },
                        expression: "declineReason"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.declineMode
                  ? _c(
                      "b-btn",
                      {
                        staticClass: "ml-2",
                        attrs: { variant: "info" },
                        on: {
                          click: function($event) {
                            _vm.declineMode = false
                          }
                        }
                      },
                      [_vm._v("Cancel")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.declineMode
                  ? _c(
                      "b-btn",
                      {
                        staticClass: "ml-2",
                        attrs: { variant: "danger" },
                        on: { click: _vm.submit }
                      },
                      [_vm._v("Submit")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.declineMode
                  ? _c(
                      "b-btn",
                      {
                        attrs: { variant: "success" },
                        on: { click: _vm.approve }
                      },
                      [_vm._v("Approve")]
                    )
                  : _vm._e()
              ],
              1
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/WaitingContent.vue?vue&type=template&id=c10c4dc8&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/WaitingContent.vue?vue&type=template&id=c10c4dc8& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm._l(_vm.waiting_content, function(organization) {
        return _c("waiting-content-card", {
          key: organization.id,
          attrs: { organization: organization },
          on: { refresh: _vm.getContent }
        })
      }),
      _vm._v(" "),
      _vm.waiting_content.length == 0
        ? _c("div", [_vm._v("No content is waiting to approve")])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/WaitingContentCard.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/src/components/WaitingContentCard.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WaitingContentCard_vue_vue_type_template_id_fcdaa2d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WaitingContentCard.vue?vue&type=template&id=fcdaa2d4& */ "./resources/assets/src/components/WaitingContentCard.vue?vue&type=template&id=fcdaa2d4&");
/* harmony import */ var _WaitingContentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaitingContentCard.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/WaitingContentCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WaitingContentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WaitingContentCard_vue_vue_type_template_id_fcdaa2d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WaitingContentCard_vue_vue_type_template_id_fcdaa2d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/WaitingContentCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/WaitingContentCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/src/components/WaitingContentCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingContentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WaitingContentCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/WaitingContentCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingContentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/WaitingContentCard.vue?vue&type=template&id=fcdaa2d4&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/src/components/WaitingContentCard.vue?vue&type=template&id=fcdaa2d4& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingContentCard_vue_vue_type_template_id_fcdaa2d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WaitingContentCard.vue?vue&type=template&id=fcdaa2d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/WaitingContentCard.vue?vue&type=template&id=fcdaa2d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingContentCard_vue_vue_type_template_id_fcdaa2d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingContentCard_vue_vue_type_template_id_fcdaa2d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/src/views/WaitingContent.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/src/views/WaitingContent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WaitingContent_vue_vue_type_template_id_c10c4dc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WaitingContent.vue?vue&type=template&id=c10c4dc8& */ "./resources/assets/src/views/WaitingContent.vue?vue&type=template&id=c10c4dc8&");
/* harmony import */ var _WaitingContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaitingContent.vue?vue&type=script&lang=js& */ "./resources/assets/src/views/WaitingContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WaitingContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WaitingContent_vue_vue_type_template_id_c10c4dc8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WaitingContent_vue_vue_type_template_id_c10c4dc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/views/WaitingContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/views/WaitingContent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/src/views/WaitingContent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WaitingContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/WaitingContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/views/WaitingContent.vue?vue&type=template&id=c10c4dc8&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/src/views/WaitingContent.vue?vue&type=template&id=c10c4dc8& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingContent_vue_vue_type_template_id_c10c4dc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WaitingContent.vue?vue&type=template&id=c10c4dc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/WaitingContent.vue?vue&type=template&id=c10c4dc8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingContent_vue_vue_type_template_id_c10c4dc8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaitingContent_vue_vue_type_template_id_c10c4dc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);