<template>
  <div>
    <h4 class="py-3 mb-4">
      <router-link
        to="/stripe_accounts/new"
        class="btn btn-success float-right"
      >
        <i aria-hidden="true" class="ion ion-ios-add-circle-outline"></i>
        New
      </router-link>
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="card">
      <div class="card-body">
        <v-server-table
          :columns="[
            'upload_to_api',
            'name',
            'combix_platform_name',
            'country',
            'fee',
          ]"
          :options="options"
          url="/api/stripe_accounts"
        >
          <template slot="name" slot-scope="props">
            <router-link :to="'/stripe_accounts/' + props.row.id">{{
              props.row.name
            }}</router-link>
          </template>
          <template slot="upload_to_api" slot-scope="props">
            <i
              v-if="props.row.upload_to_api == 1"
              aria-hidden="true"
              class="text-success ion ion-ios-cloud-upload"
            ></i>
            <i
              v-else
              aria-hidden="true"
              class="text-danger ion ion-ios-close-circle-outline"
            ></i>
          </template>
        </v-server-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectPath: [{ text: "Stripe Accounts", to: "/stripe_accounts" }],
      options: {
        skin: "table b-table table-hover",
        filterable: false,
        alwaysShowPerPageSelect: false,
        perPageValues: [],
        perPage: 100,
        headings: { upload_to_api: "" },
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>