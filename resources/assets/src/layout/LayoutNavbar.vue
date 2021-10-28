 <template>
  <b-navbar
    toggleable="lg"
    :variant="getLayoutNavbarBg()"
    class="layout-navbar align-items-lg-center container-p-x"
  >
    <!-- Brand -->
    <b-navbar-brand to="/">
      <img style="height: 26px" src="../images/logo.svg" />
    </b-navbar-brand>

    <!-- Sidenav toggle -->
    <b-navbar-nav
      class="align-items-lg-center mr-auto mr-lg-4"
      v-if="sidenavToggle"
    >
      <a
        class="nav-item nav-link px-0 ml-2 ml-lg-0"
        href="javascript:void(0)"
        @click="toggleSidenav"
      >
        <i class="ion ion-md-menu text-large align-middle" />
      </a>
    </b-navbar-nav>

    <!-- Navbar toggle -->
    <b-navbar-toggle target="app-layout-navbar"></b-navbar-toggle>

    <b-collapse is-nav id="app-layout-navbar">
      <b-navbar-nav class="align-items-lg-center"> </b-navbar-nav>
    </b-collapse>
    <b-navbar-nav class="align-items-lg-center">
      <label class="nav-item navbar-text navbar-search-box p-0 active">
        <i
          class="ion ion-ios-search navbar-icon align-middle"
          @click.prevent="toggleSearch"
        ></i>
        <b-modal hide-footer size="xl" scrollable ref="my-modal">
          <ais-instant-search
            :search-client="searchClient"
            index-name="organizations"
            @keyup.down.native="down"
            @keyup.up.native="up"
            @keyup.right.native="right"
            @keyup.left.native="left"
            @keydown.enter.native="select"
          >
            <div class="search-panel">
              <div class="search-panel__results">
                <ais-search-box
                  placeholder="Search here…"
                  @input.native="resetDir"
                  ref="searchBox"
                  class="searchbox"
                  :autofocus="true"
                  show-loading-indicator
                />
                <ais-configure :hitsPerPage="7" />

                <div class="row">
                  <div class="col">
                    <div class="column-1 mt-3">
                      <div class="card">
                        <div class="card-header">Organizations</div>
                        <ais-state-results ais-state-results>
                          <template
                            slot-scope="{ state: { query }, results: { hits } }"
                          >
                            <p class="card-body" v-if="!hits.length">
                              No results for <q>{{ query }}</q>
                            </p>
                            <ais-hits
                              :class-names="{
                                'ais-Hits-list': 'list-group list-group-flush',
                                'ais-Hits-item': 'list-group-item',
                              }"
                              v-if="query"
                            >
                              <template slot="item" slot-scope="{ item }">
                                <router-link
                                  :to="'/organizations/' + item.id"
                                  @click.native="toggleSearch"
                                >
                                  <ais-highlight :hit="item" attribute="name" />
                                  <!-- <ais-highlight
                                      :hit="item"
                                      attribute="city"
                                    /> -->
                                </router-link>
                              </template>
                            </ais-hits>
                          </template>
                        </ais-state-results>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="column-2 mt-3">
                      <div class="card">
                        <div class="card-header">Donors</div>
                        <ais-index
                          :search-client="searchClient"
                          index-name="donors"
                        >
                          <ais-state-results ais-state-results>
                            <template
                              slot-scope="{
                                state: { query },
                                results: { hits },
                              }"
                            >
                              <p class="card-body" v-if="!hits.length">
                                No results for <q>{{ query }}</q>
                              </p>
                              <ais-hits
                                :class-names="{
                                  'ais-Hits-list':
                                    'list-group list-group-flush',
                                  'ais-Hits-item': 'list-group-item',
                                }"
                                v-if="query"
                              >
                                <template slot="item" slot-scope="{ item }">
                                  <router-link
                                    :to="'/donors/' + item.id"
                                    @click.native="toggleSearch"
                                  >
                                    <ais-highlight
                                      :hit="item"
                                      attribute="f_name"
                                    />
                                    <ais-highlight
                                      :hit="item"
                                      attribute="l_name"
                                    />
                                  </router-link>
                                </template>
                              </ais-hits>
                            </template>
                          </ais-state-results>
                        </ais-index>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="column-2 mt-3">
                      <div class="card">
                        <div class="card-header">Campaigns</div>
                        <ais-index
                          :search-client="searchClient"
                          index-name="campaigns"
                        >
                          <ais-state-results ais-state-results>
                            <template
                              slot-scope="{
                                state: { query },
                                results: { hits },
                              }"
                            >
                              <p class="card-body" v-if="!hits.length">
                                No results for <q>{{ query }}</q>
                              </p>
                              <ais-hits
                                :class-names="{
                                  'ais-Hits-list':
                                    'list-group list-group-flush',
                                  'ais-Hits-item': 'list-group-item',
                                }"
                                v-if="query"
                              >
                                <template slot="item" slot-scope="{ item }">
                                  <router-link
                                    :to="'/Campaigns/' + item.id"
                                    @click.native="toggleSearch"
                                  >
                                    <ais-highlight
                                      :hit="item"
                                      attribute="name"
                                    />
                                    <ais-highlight
                                      :hit="item"
                                      attribute="organization"
                                    />
                                  </router-link>
                                </template>
                              </ais-hits>
                            </template>
                          </ais-state-results>
                        </ais-index>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ais-instant-search>
        </b-modal>
      </label>
      <div
        class="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-3"
      >
        |
      </div>
      <router-link class="nav-item nav-link px-0 mr-4 ml-lg-0" :to="'profile'"
        ><i class="text-large align-middle ion ion-ios-contact mr-2" />{{
          $store.state.user.name + " " + $store.state.user.l_name
        }}</router-link
      >
      <a class="nav-item nav-link px-0 ml-2 ml-lg-0" href="/logout">
        <i class="ion ion-ios-log-out text-large align-middle text-danger" />
      </a>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";

import { Component } from "vue-instantsearch";
import JQuery from "jquery";
let $ = JQuery;

export default {
  name: "app-layout-navbar",

  props: {
    sidenavToggle: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    algoliasearch,
  },
  data: function () {
    return {
      defaultModalSize: null,
      searchClient: algoliasearch(
        "JB7CZTL70W",
        "b3aa560a05799bcef3ff7fda529fe7f1"
      ),
      searchOpen: false,
      query: "",
      current: -1,
      selectedColumn: 0,
    };
  },
  mounted() {
    var self = this;
    window.addEventListener("keydown", function (event) {
      if (event.keyCode == 70 && event.ctrlKey) {
        self.toggleSearch();
      }
    });
  },
  methods: {
    toggleSidenav() {
      this.layoutHelpers.toggleCollapsed();
    },

    getLayoutNavbarBg() {
      return this.layoutNavbarBg;
    },
    toggleSearch() {
      this.searchOpen = !this.searchOpen;
      this.$refs["my-modal"].toggle("#toggle-btn");
      if (this.searchOpen) {
        setTimeout(() => {
          $("input.ais-SearchBox-input").focus();
        }, 300);
      }
    },
    resetDir() {
      this.current = -1;
      this.selectedColumn = 0;
    },
    resetQuery: function () {
      this.query = "";
      this.current = -1;
      this.selectedColumn = 0;
      this.searchOpen = false;
    },
    select() {
      var href = $(
        ".column-" + this.selectedColumn + " li:eq(" + this.current + ") > a"
      ).attr("href");
      if (typeof href === "undefined") return;
      this.resetQuery();
      this.$router.push(href);
    },
    getActive() {
      let length = $(".column-" + this.selectedColumn + " li").length;
      if (length - 1 < this.current) {
        this.current = length - 1;
      }
      let self =
        ".column-" + this.selectedColumn + " li:eq(" + this.current + ")";
      $("ol li").removeClass("ais-active");
      $(self).addClass("ais-active");
    },
    left() {
      if (this.selectedColumn == 3) {
        this.selectedColumn = 1;
      } else {
        this.selectedColumn++;
      }
      let length = $(".column-" + this.selectedColumn + " li").length;
      if (length == 0) {
        this.selectedColumn--;
        return;
      }
      this.getActive();
    },
    right() {
      if (this.selectedColumn == 1) {
        this.selectedColumn = 3;
      } else {
        this.selectedColumn--;
      }
      let length = $(".column-" + this.selectedColumn + " li").length;
      if (length == 0) {
        this.selectedColumn++;
        return;
      }
      this.getActive();
    },
    up() {
      if (this.current > 0) {
        this.current--;
        this.getActive();
      }
    },
    down() {
      if (this.selectedColumn == 0) {
        this.selectedColumn = 1;
      }
      this.current++;
      this.getActive();
    },
  },
};
</script>
<style>
.ais-Hits-list,
.ais-InfiniteHits-list,
.ais-InfiniteResults-list,
.ais-Results-list,
.ais-Hits-item,
.ais-InfiniteHits-item,
.ais-InfiniteResults-item,
.ais-Results-item {
  margin-left: 0 !important;
  margin-top: 0 !important;
}
.ais-active {
  background-color: #e5f3ff;
}
.ais-Hits-item,
.ais-InfiniteHits-item,
.ais-InfiniteResults-item,
.ais-Results-item {
  padding: 10px;
  box-shadow: none;
  width: 100% !important;
}
.ais-Highlight-highlighted,
.ais-Snippet-highlighted {
  background-color: #c5dff5;
  border-radius: 3px;
  padding: 0 3px;
}
</style>