<template>
  <div class="layout-wrapper layout-1">
    <h1>That's My Server ;)</h1>
  </div>
</template>

<script>
import LayoutNavbar from "./LayoutNavbar";
import LayoutSidenav from "./LayoutSidenav";
import LayoutFooter from "./LayoutFooter";

export default {
  name: "app-layout-1",
  components: {
    "app-layout-navbar": LayoutNavbar,
    "app-layout-sidenav": LayoutSidenav,
    "app-layout-footer": LayoutFooter,
  },

  mounted() {
    this.layoutHelpers.init();
    this.layoutHelpers.update();
    this.layoutHelpers.setAutoUpdate(true);
  },

  beforeDestroy() {
    this.layoutHelpers.destroy();
  },

  methods: {
    closeSidenav() {
      this.layoutHelpers.setCollapsed(true);
    },
  },
};
</script>
