(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Donation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/Donation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_json_pretty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-json-pretty */ "./node_modules/vue-json-pretty/lib/vue-json-pretty.js");
/* harmony import */ var vue_json_pretty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_json_pretty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_json_pretty_lib_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-json-pretty/lib/styles.css */ "./node_modules/vue-json-pretty/lib/styles.css");
/* harmony import */ var vue_json_pretty_lib_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_json_pretty_lib_styles_css__WEBPACK_IMPORTED_MODULE_1__);
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
    VueJsonPretty: vue_json_pretty__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      projectPath: [{
        text: "Donations",
        to: "/donations"
      }, {
        text: "",
        active: true
      }],
      donation: false
    };
  },
  mounted: function mounted() {
    this.getDonation();
  },
  watch: {
    $route: function $route() {
      this.getDonation();
    }
  },
  methods: {
    getDonation: function getDonation() {
      var self = this;
      axios.get("/api/donations/" + this.$route.params.id).then(function (data) {
        self.donation = data.data;
        self.projectPath[1].text = self.donation.donor.full_name + " | " + self.donation.currency.symbol + self.donation.amount;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Donation.vue?vue&type=style&index=0&id=89fdcb7c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/Donation.vue?vue&type=style&index=0&id=89fdcb7c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntable th[data-v-89fdcb7c] {\r\n  font-weight: bold !important;\r\n  width: 200px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Donation.vue?vue&type=style&index=1&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/Donation.vue?vue&type=style&index=1&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vjs-tree {\r\n  font-size: 12px !important;\n}\n.vjs-tree {\r\n  overflow: auto;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Donation.vue?vue&type=style&index=0&id=89fdcb7c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/Donation.vue?vue&type=style&index=0&id=89fdcb7c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Donation.vue?vue&type=style&index=0&id=89fdcb7c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Donation.vue?vue&type=style&index=0&id=89fdcb7c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Donation.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/Donation.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Donation.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Donation.vue?vue&type=style&index=1&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Donation.vue?vue&type=template&id=89fdcb7c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/views/Donation.vue?vue&type=template&id=89fdcb7c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      "h5",
      { staticClass: "py-3 mb-4" },
      [
        _c("b-breadcrumb", {
          staticClass: "font-weight-bold m-0",
          attrs: { items: _vm.projectPath }
        })
      ],
      1
    ),
    _vm._v(" "),
    _vm.donation
      ? _c("div", { staticClass: "card mb-3" }, [
          _c("div", { staticClass: "row no-gutters row-bordered" }, [
            _c("div", { staticClass: "d-flex col-md align-items-center" }, [
              _c("div", { staticClass: "card-body d-block text-body" }, [
                _c("div", { staticClass: "text-muted small line-height-1" }, [
                  _vm._v("Amount")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "text-xlarge" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm.donation.currency.symbol + _vm.donation.amount
                      ) +
                      "\n          "
                  )
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "small" }, [
                  _vm.donation.refund_of
                    ? _c(
                        "div",
                        {
                          staticClass: "badge badge-pill badge-default badge-sm"
                        },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: "/donations/" + _vm.donation.refund_of.id
                              }
                            },
                            [
                              _c("i", { staticClass: "ion ion-ios-undo" }),
                              _vm._v(" Refund")
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.donation.refunds && _vm.donation.refunds.length > 0
                    ? _c(
                        "div",
                        {
                          staticClass: "badge badge-pill badge-default badge-sm"
                        },
                        [
                          _c("i", { staticClass: "ion ion-ios-undo" }),
                          _vm._v(" Refunded\n            ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.donation.captured == 0
                    ? _c(
                        "div",
                        {
                          staticClass: "badge badge-pill badge-default badge-sm"
                        },
                        [
                          _c("i", { staticClass: "ion ion-ios-time" }),
                          _vm._v(" Uncaptured\n            ")
                        ]
                      )
                    : _c(
                        "div",
                        {
                          staticClass: "badge badge-pill badge-success badge-sm"
                        },
                        [
                          _c("i", {
                            staticClass: "ion ion-ios-checkmark-circle-outline"
                          }),
                          _vm._v(" Captured\n            ")
                        ]
                      )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex col-md align-items-center" }, [
              _c("div", { staticClass: "card-body d-block text-body" }, [
                _c("div", { staticClass: "text-muted small line-height-1" }, [
                  _vm._v("Donor")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-xlarge" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/donors/" + _vm.donation.donor.id } },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.donation.donor.full_name) +
                            "\n            "
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex col-md align-items-center" }, [
              _c("div", { staticClass: "card-body d-block text-body" }, [
                _c("div", { staticClass: "text-muted small line-height-1" }, [
                  _vm._v("Date")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-xlarge" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm._f("moment")(
                          _vm.donation.created_at,
                          "MMM Do YY, h:mm:ss a"
                        )
                      ) +
                      "\n          "
                  )
                ])
              ])
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }, [
        _vm.donation
          ? _c("div", { staticClass: "card" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("table", { staticClass: "table m-0" }, [
                _c("tbody", [
                  _c("tr", [
                    _c("th", [_vm._v("Amount:")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.donation.amount))])
                  ]),
                  _vm._v(" "),
                  _vm.donation.currency
                    ? _c("tr", [
                        _c("th", [_vm._v("Currency")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.donation.currency.currency))
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Date:")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            _vm._f("moment")(
                              _vm.donation.created_at,
                              "MMM Do YY, h:mm:ss a"
                            )
                          ) +
                          "\n              "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Note:")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.donation.notes))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Organization:")]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _vm.donation.organization
                          ? _c(
                              "router-link",
                              {
                                attrs: {
                                  to:
                                    "/organizations/" +
                                    _vm.donation.organization.id
                                }
                              },
                              [_vm._v(_vm._s(_vm.donation.organization.name))]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Gateway:")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.donation.gateway) +
                          "\n              "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Account:")]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _vm.donation.stripe_account
                          ? [_vm._v(_vm._s(_vm.donation.stripe_account.name))]
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.donation && _vm.donation.fees && _vm.donation.fees.length
          ? _c("div", { staticClass: "card mt-3" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("table", { staticClass: "table m-0" }, [
                _c(
                  "tbody",
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._l(_vm.donation.fees, function(fee) {
                      return _c("tr", { key: fee.id }, [
                        _c("td", [_vm._v(_vm._s(fee.amount))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(fee.currency))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(fee.note))])
                      ])
                    })
                  ],
                  2
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.donation && _vm.donation.refund_of
          ? _c("div", { staticClass: "card mt-3" }, [
              _c("div", { staticClass: "card-header px-2" }, [
                _c(
                  "h5",
                  { staticClass: "mb-0" },
                  [
                    _vm._v("\n            Original Donation\n            "),
                    _c(
                      "router-link",
                      {
                        staticClass: "float-right",
                        attrs: { to: "/donations/" + _vm.donation.refund_of.id }
                      },
                      [
                        _c("i", {
                          staticClass: "ion ion-ios-eye",
                          attrs: { "aria-hidden": "true" }
                        })
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "table m-0" }, [
                _c("tbody", [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v(_vm._s(_vm.donation.refund_of.amount))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.donation.refund_of.currency.currency))
                    ])
                  ])
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.donation.refunds && _vm.donation.refunds.length > 0
          ? _c("div", { staticClass: "card mt-3" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("table", { staticClass: "table m-0" }, [
                _c(
                  "tbody",
                  [
                    _vm._m(5),
                    _vm._v(" "),
                    _vm._l(_vm.donation.refunds, function(refund) {
                      return _c("tr", { key: refund.id }, [
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "float-right",
                                attrs: { to: "/donations/" + refund.id }
                              },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(refund.amount) +
                                    "\n                "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(refund.currency.currency))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                " +
                              _vm._s(
                                _vm._f("moment")(
                                  refund.created_at,
                                  "MMM Do YY, h:mm:ss a"
                                )
                              ) +
                              "\n              "
                          )
                        ])
                      ])
                    })
                  ],
                  2
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.donation
          ? _c("div", { staticClass: "card mt-3" }, [
              _vm._m(6),
              _vm._v(" "),
              _c("table", { staticClass: "table user-view-table m-0" }, [
                _c("tbody", [
                  _c("tr", [
                    _c("th", [_vm._v("Name:")]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          { attrs: { to: "/donors/" + _vm.donation.donor.id } },
                          [_vm._v(_vm._s(_vm.donation.donor.full_name))]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("E-mail:")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.donation.donor.email))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Country:")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm.donation.donor.country
                        ? _c("span", [
                            _vm._v(_vm._s(_vm.donation.donor.country.name))
                          ])
                        : _vm._e()
                    ])
                  ])
                ])
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _vm.donation
          ? _c("div", { staticClass: "card" }, [
              _c("hr", { staticClass: "border-light m-0" }),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _c("table", { staticClass: "table user-view-table m-0" }, [
                _c("tbody", [
                  _c("tr", [
                    _c("th", [_vm._v("ID")]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _vm.donation.gateway == "Stripe"
                          ? _c(
                              "a",
                              {
                                attrs: {
                                  target: "_blank",
                                  href:
                                    "https://dashboard.stripe.com/payments/" +
                                    _vm.donation.transaction_id
                                }
                              },
                              [_vm._v(_vm._s(_vm.donation.transaction_id))]
                            )
                          : _vm.donation.gateway == "PayPal"
                          ? _c(
                              "a",
                              {
                                attrs: {
                                  target: "_blank",
                                  href:
                                    "https://www.paypal.com/activity/payment/" +
                                    _vm.donation.transaction_id
                                }
                              },
                              [_vm._v(_vm._s(_vm.donation.transaction_id))]
                            )
                          : [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.donation.transaction_id) +
                                  "\n                "
                              )
                            ]
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Status")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.donation.status))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Type")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.donation.transaction_type))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Uploaded")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.donation.uploaded))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Platform")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.donation.platform))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Organization Code")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.donation.code))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("Organization Country")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.donation.country))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", [_vm._v("raw")]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c("vue-json-pretty", {
                          staticStyle: { height: "400px" },
                          attrs: {
                            data: JSON.parse(_vm.donation.raw),
                            highlightMouseoverNode: true,
                            showLength: true,
                            virtual: true,
                            virtualLines: 10,
                            deep: 1
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              ])
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header px-2" }, [
      _c("h5", { staticClass: "mb-0" }, [_vm._v("Donation Details")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header px-2" }, [
      _c("h5", { staticClass: "mb-0" }, [_vm._v("Donation Fee")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Amount")]),
      _vm._v(" "),
      _c("th", [_vm._v("Currency")]),
      _vm._v(" "),
      _c("th", [_vm._v("Application")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Amount")]),
      _vm._v(" "),
      _c("th", [_vm._v("Currency")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header px-2" }, [
      _c("h5", { staticClass: "mb-0" }, [_vm._v("Refunds")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Amount")]),
      _vm._v(" "),
      _c("th", [_vm._v("Currency")]),
      _vm._v(" "),
      _c("th", [_vm._v("Date")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header px-2" }, [
      _c("h5", { staticClass: "mb-0" }, [_vm._v("Donor")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header px-2" }, [
      _c("h5", { staticClass: "mb-0" }, [_vm._v("Advanced Details")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/views/Donation.vue":
/*!*************************************************!*\
  !*** ./resources/assets/src/views/Donation.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Donation_vue_vue_type_template_id_89fdcb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Donation.vue?vue&type=template&id=89fdcb7c&scoped=true& */ "./resources/assets/src/views/Donation.vue?vue&type=template&id=89fdcb7c&scoped=true&");
/* harmony import */ var _Donation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Donation.vue?vue&type=script&lang=js& */ "./resources/assets/src/views/Donation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Donation_vue_vue_type_style_index_0_id_89fdcb7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Donation.vue?vue&type=style&index=0&id=89fdcb7c&scoped=true&lang=css& */ "./resources/assets/src/views/Donation.vue?vue&type=style&index=0&id=89fdcb7c&scoped=true&lang=css&");
/* harmony import */ var _Donation_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Donation.vue?vue&type=style&index=1&lang=css& */ "./resources/assets/src/views/Donation.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Donation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Donation_vue_vue_type_template_id_89fdcb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Donation_vue_vue_type_template_id_89fdcb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "89fdcb7c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/views/Donation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/views/Donation.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/assets/src/views/Donation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Donation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Donation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/views/Donation.vue?vue&type=style&index=0&id=89fdcb7c&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/src/views/Donation.vue?vue&type=style&index=0&id=89fdcb7c&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_style_index_0_id_89fdcb7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Donation.vue?vue&type=style&index=0&id=89fdcb7c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Donation.vue?vue&type=style&index=0&id=89fdcb7c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_style_index_0_id_89fdcb7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_style_index_0_id_89fdcb7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_style_index_0_id_89fdcb7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_style_index_0_id_89fdcb7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/src/views/Donation.vue?vue&type=style&index=1&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/src/views/Donation.vue?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Donation.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Donation.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/src/views/Donation.vue?vue&type=template&id=89fdcb7c&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/src/views/Donation.vue?vue&type=template&id=89fdcb7c&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_template_id_89fdcb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Donation.vue?vue&type=template&id=89fdcb7c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/views/Donation.vue?vue&type=template&id=89fdcb7c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_template_id_89fdcb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Donation_vue_vue_type_template_id_89fdcb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);