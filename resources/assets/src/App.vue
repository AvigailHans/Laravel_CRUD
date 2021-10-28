<template>
  <div id="app">
    <router-view v-if="$store.state.user.level == 100" />
    <template v-else-if="$store.state.user.level == 80">
      <transaction-report />
    </template>
    <template v-else>
      <organization
        class="p-5"
        v-if="
          $store.state.user.organization &&
          $store.state.user.organization.status == 'Approved'
        "
      />
      <organization-apply v-else />
    </template>
  </div>
</template>

<style src="@/vendor/styles/bootstrap.scss" lang="scss"></style>
<style src="@/vendor/styles/appwork.scss" lang="scss"></style>
<style src="@/vendor/styles/theme-gradient.scss" lang="scss"></style>
<style src="@/vendor/styles/colors.scss" lang="scss"></style>
<style src="@/vendor/styles/uikit.scss" lang="scss"></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="@/vendor/libs/vue-multiselect/vue-multiselect.scss" lang="scss"></style>
<style src="./style.scss" lang="scss"></style>

<script>
import OrganizationApply from "../src/components/OrganizationApply";
import Organization from "../src/views/Organization";
import TransactionReport from "../src/views/TransactionReport";
export default {
  components: {
    OrganizationApply,
    Organization,
    TransactionReport,
  },
  name: "app",
  metaInfo: {
    title: "Ne'eman Foundation",
    titleTemplate: "%s - ",
  },
  updated() {
    setTimeout(() => document.body.classList.remove("app-loading"), 1);
  },
};
</script>