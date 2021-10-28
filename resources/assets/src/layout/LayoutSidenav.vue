<template>
  <sidenav
    :orientation="orientation"
    :class="curClasses"
    v-if="$store.state.user.level > 50"
  >
    <!-- Inner -->
    <div
      class="sidenav-inner"
      :class="{ 'py-1': orientation !== 'horizontal' }"
    >
      <sidenav-router-link icon="ion ion-ios-speedometer" to="/" :exact="true"
        >Dashboard</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-ios-business"
        to="/organizations"
        :exact="true"
        >Organizations</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-ios-people" to="/donors" :exact="true"
        >Donors</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-logo-usd" to="/donations" :exact="true"
        >Donations</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-ios-keypad"
        to="/categories"
        :exact="true"
        >Categories</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-ios-megaphone"
        to="/campaigns"
        :exact="true"
        >Campaigns</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-ios-appstore"
        to="/applications"
        :exact="true"
        >Applications</sidenav-router-link
      >
      <sidenav-router-link
        icon="fab fa-cc-stripe"
        to="/stripe_accounts"
        :exact="true"
        >Stripe Accounts</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-ios-hourglass"
        to="/waiting-content"
        :exact="true"
        >Waiting to approve
        <div
          class="pl-1 float-right"
          v-if="$store.state.data.content_waiting > 0"
        >
          <div class="badge badge-warning">
            {{ $store.state.data.content_waiting }}
          </div>
        </div>
      </sidenav-router-link>
      <sidenav-router-link
        icon="ion ion-ios-hourglass"
        to="/waiting-organization"
        :exact="true"
        >Waiting organizations
        <div
          class="pl-1 float-right"
          v-if="$store.state.data.organizations_waiting > 0"
        >
          <div class="badge badge-warning">
            {{ $store.state.data.organizations_waiting }}
          </div>
        </div>
      </sidenav-router-link>
      <sidenav-router-link
        icon="ion ion-ios-filing"
        to="/transaction_reports"
        :exact="true"
        >Transaction reports</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-ios-contacts" to="/users" :exact="true"
        >Users</sidenav-router-link
      >
    </div>
  </sidenav>
</template>

<script>
import {
  Sidenav,
  SidenavLink,
  SidenavRouterLink,
  SidenavMenu,
  SidenavHeader,
  SidenavBlock,
  SidenavDivider,
} from "@/vendor/libs/sidenav";

export default {
  name: "app-layout-sidenav",
  components: {
    Sidenav,
    SidenavLink,
    SidenavRouterLink,
    SidenavMenu,
    SidenavHeader,
    SidenavBlock,
    SidenavDivider,
  },

  props: {
    orientation: {
      type: String,
      default: "vertical",
    },
  },

  computed: {
    curClasses() {
      let bg = this.layoutSidenavBg;

      if (
        this.orientation === "horizontal" &&
        (bg.indexOf(" sidenav-dark") !== -1 ||
          bg.indexOf(" sidenav-light") !== -1)
      ) {
        bg = bg
          .replace(" sidenav-dark", "")
          .replace(" sidenav-light", "")
          .replace("-darker", "")
          .replace("-dark", "");
      }

      return (
        `bg-${bg} ` +
        (this.orientation !== "horizontal"
          ? "layout-sidenav"
          : "layout-sidenav-horizontal container-p-x flex-grow-0")
      );
    },
  },

  methods: {
    isMenuActive(url) {
      return this.$route.path.indexOf(url) === 0;
    },

    isMenuOpen(url) {
      return (
        this.$route.path.indexOf(url) === 0 && this.orientation !== "horizontal"
      );
    },

    toggleSidenav() {
      this.layoutHelpers.toggleCollapsed();
    },
  },
};
</script>
