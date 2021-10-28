(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/TransactionReports.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/TransactionReports.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      projectPath: [{
        text: "Transaction Reports",
        to: "/transaction_reports"
      }],
      options: {
        rowClassCallback: function rowClassCallback(row) {
          if (row.users == row.signers_count) {
            return "table-success";
          } else if (row.signers_count == 0) {
            return "table-danger";
          } else if (row.signers_count < row.users) {
            return "table-warning";
          }
        },
        skin: "table b-table table-hover",
        perPage: 50,
        headings: {},
        texts: this.$store.state.VueTable.texts,
        sortIcon: this.$store.state.VueTable.sortIcon
      }
    };
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/TransactionReports.vue?vue&type=template&id=9ff4f39e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/TransactionReports.vue?vue&type=template&id=9ff4f39e& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        "h4",
        { staticClass: "py-3 mb-4" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-success float-right",
              attrs: { to: "/transaction_reports/new" }
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
      _c("v-server-table", {
        attrs: {
          columns: [
            "name",
            "date",
            "count",
            "amount",
            "country",
            "signers_count"
          ],
          options: _vm.options,
          url: "/api/transaction_reports"
        },
        scopedSlots: _vm._u([
          {
            key: "name",
            fn: function(props) {
              return [
                _c(
                  "router-link",
                  { attrs: { to: "/transaction_reports/" + props.row.id } },
                  [_vm._v(_vm._s(props.row.name))]
                )
              ]
            }
          },
          {
            key: "signers_count",
            fn: function(props) {
              return [
                _vm._v(
                  "\n      " +
                    _vm._s(props.row.signers_count) +
                    " of " +
                    _vm._s(props.row.users) +
                    "\n    "
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/views/TransactionReports.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/src/views/TransactionReports.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransactionReports_vue_vue_type_template_id_9ff4f39e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionReports.vue?vue&type=template&id=9ff4f39e& */ "./resources/assets/src/views/TransactionReports.vue?vue&type=template&id=9ff4f39e&");
/* harmony import */ var _TransactionReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionReports.vue?vue&type=script&lang=js& */ "./resources/assets/src/views/TransactionReports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransactionReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionReports_vue_vue_type_template_id_9ff4f39e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TransactionReports_vue_vue_type_template_id_9ff4f39e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/views/TransactionReports.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/views/TransactionReports.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/src/views/TransactionReports.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionReports.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/TransactionReports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/views/TransactionReports.vue?vue&type=template&id=9ff4f39e&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/src/views/TransactionReports.vue?vue&type=template&id=9ff4f39e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionReports_vue_vue_type_template_id_9ff4f39e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionReports.vue?vue&type=template&id=9ff4f39e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/TransactionReports.vue?vue&type=template&id=9ff4f39e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionReports_vue_vue_type_template_id_9ff4f39e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionReports_vue_vue_type_template_id_9ff4f39e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);