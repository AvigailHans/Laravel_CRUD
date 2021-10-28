(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Users.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/Users.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
        text: "Users",
        to: "/users"
      }],
      options: {
        skin: "table b-table table-hover",
        filterable: true,
        alwaysShowPerPageSelect: false,
        perPageValues: [],
        perPage: 30,
        headings: {
          edit: "",
          "organization.name": "Organization"
        }
      }
    };
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Users.vue?vue&type=template&id=5ad34af0&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/Users.vue?vue&type=template&id=5ad34af0& ***!
  \***********************************************************************************************************************************************************************************************************/
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
          "router-link",
          {
            staticClass: "btn btn-success float-right",
            attrs: { to: "/users/new" }
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
          _c("v-server-table", {
            attrs: {
              columns: ["name", "organization.name", "type", "edit"],
              options: _vm.options,
              url: "/api/users"
            },
            scopedSlots: _vm._u([
              {
                key: "name",
                fn: function(props) {
                  return [
                    _c(
                      "router-link",
                      { attrs: { to: "/users/" + props.row.id } },
                      [
                        _vm._v(
                          _vm._s(props.row.name) +
                            " " +
                            _vm._s(props.row.l_name)
                        )
                      ]
                    )
                  ]
                }
              },
              {
                key: "organization.name",
                fn: function(props) {
                  return [
                    props.row.organization
                      ? _c(
                          "router-link",
                          {
                            attrs: {
                              to: "/organizations/" + props.row.organization.id
                            }
                          },
                          [_vm._v(_vm._s(props.row.organization.name))]
                        )
                      : _vm._e()
                  ]
                }
              },
              {
                key: "type",
                fn: function(props) {
                  return [
                    props.row.level == 100 ? [_vm._v("Manager")] : _vm._e(),
                    _vm._v(" "),
                    props.row.level == 80 ? [_vm._v("Boardman")] : _vm._e(),
                    _vm._v(" "),
                    props.row.level == 50
                      ? [_vm._v("Organization Manager")]
                      : _vm._e()
                  ]
                }
              },
              {
                key: "edit",
                fn: function(props) {
                  return [
                    _c(
                      "router-link",
                      { attrs: { to: "/users/" + props.row.id } },
                      [_c("i", { staticClass: "fad fa-pencil" })]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/views/Users.vue":
/*!**********************************************!*\
  !*** ./resources/assets/src/views/Users.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_5ad34af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=5ad34af0& */ "./resources/assets/src/views/Users.vue?vue&type=template&id=5ad34af0&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/assets/src/views/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_5ad34af0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_5ad34af0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/views/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/views/Users.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/assets/src/views/Users.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/views/Users.vue?vue&type=template&id=5ad34af0&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/src/views/Users.vue?vue&type=template&id=5ad34af0& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_5ad34af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=5ad34af0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Users.vue?vue&type=template&id=5ad34af0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_5ad34af0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_5ad34af0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);