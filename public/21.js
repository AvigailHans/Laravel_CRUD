(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/User.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/User.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
  mounted: function mounted() {
    this.getUser();
  },
  watch: {
    $route: function $route() {
      this.getUser();
    }
  },
  data: function data() {
    return {
      projectPath: [{
        text: "Users",
        to: "/users"
      }, {
        text: "",
        active: true
      }],
      processing: false,
      user: {}
    };
  },
  methods: {
    getUser: function getUser() {
      var self = this;

      if (this.$route.params.id == "new") {
        self.projectPath[1].text = "New user";
        self.user = {};
        self.processing = false;
      } else {
        self.processing = true;
        axios.get("/api/users/" + this.$route.params.id).then(function (response) {
          if (response.data.id) {
            self.user = response.data;
            self.projectPath[1].text = response.data.name;
            self.$router.push({
              path: "/users/" + response.data.id
            });
            self.processing = false;
          }
        });
      }
    },
    save: function save() {
      var self = this;
      self.processing = true;
      axios.post("/api/users/" + this.$route.params.id, self.user).then(function (response) {
        self.user = response.data;
        self.projectPath[1].text = response.data.name;
        self.processing = false;
        self.$router.push({
          path: "/users/" + response.data.id
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/User.vue?vue&type=template&id=a853f40a&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/User.vue?vue&type=template&id=a853f40a& ***!
  \**********************************************************************************************************************************************************************************************************/
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
          _c(
            "b-form-row",
            [
              _c(
                "b-form-group",
                { staticClass: "col-md-6", attrs: { label: "User name" } },
                [
                  _c("b-input", {
                    model: {
                      value: _vm.user.name,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "name", $$v)
                      },
                      expression: "user.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                { staticClass: "col-md-6", attrs: { label: "User last name" } },
                [
                  _c("b-input", {
                    model: {
                      value: _vm.user.l_name,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "l_name", $$v)
                      },
                      expression: "user.l_name"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-row",
            [
              _c(
                "b-form-group",
                { staticClass: "col-md-6", attrs: { label: "Email" } },
                [
                  _c("b-input", {
                    model: {
                      value: _vm.user.email,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "email", $$v)
                      },
                      expression: "user.email"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                { staticClass: "col-md-6", attrs: { label: "Password" } },
                [
                  _c("b-input", {
                    model: {
                      value: _vm.user.password,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "password", $$v)
                      },
                      expression: "user.password"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-row",
            [
              _c(
                "b-form-group",
                { staticClass: "col-md-6", attrs: { label: "Level" } },
                [
                  _vm.$store.state.user.level > 80
                    ? _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.level,
                              expression: "user.level"
                            }
                          ],
                          staticClass: "custom-select",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.user,
                                "level",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "100" } }, [
                            _vm._v("Manager")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "80" } }, [
                            _vm._v("Boardman")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "50" } }, [
                            _vm._v("Organization Manager")
                          ])
                        ]
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _vm.$store.state.user.level > 80 && _vm.user.level == 80
                ? _c(
                    "b-form-group",
                    { staticClass: "col-md-6", attrs: { label: "Country" } },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.country,
                              expression: "user.country"
                            }
                          ],
                          staticClass: "custom-select",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.user,
                                "country",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "can" } }, [
                            _vm._v("Canada")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "us" } }, [
                            _vm._v("USA")
                          ])
                        ]
                      )
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("nav", { staticClass: "layout-footer footer bg-footer-theme" }, [
      _c(
        "div",
        { staticClass: "container-fluid container-p-x p-3" },
        [
          _c(
            "ladda-btn",
            {
              staticClass: "btn btn-success btn-lg float-right",
              attrs: { loading: _vm.processing, "data-style": "expand-right" },
              nativeOn: {
                click: function($event) {
                  return _vm.save($event)
                }
              }
            },
            [
              _c("i", {
                staticClass: "ion ion-ios-checkmark-circle-outline",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v("\n        Save\n      ")
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "clearfix" })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/views/User.vue":
/*!*********************************************!*\
  !*** ./resources/assets/src/views/User.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_a853f40a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=a853f40a& */ "./resources/assets/src/views/User.vue?vue&type=template&id=a853f40a&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/assets/src/views/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_a853f40a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_a853f40a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/views/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/views/User.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/assets/src/views/User.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/views/User.vue?vue&type=template&id=a853f40a&":
/*!****************************************************************************!*\
  !*** ./resources/assets/src/views/User.vue?vue&type=template&id=a853f40a& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_a853f40a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=a853f40a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/User.vue?vue&type=template&id=a853f40a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_a853f40a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_a853f40a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);