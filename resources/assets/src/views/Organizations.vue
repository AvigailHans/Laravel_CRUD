<template>
  <div>
    <h4 class="py-3 mb-4">
      <router-link to="/organizations/new" class="btn btn-success float-right">
        <i aria-hidden="true" class="ion ion-ios-add-circle-outline"></i>
        New
      </router-link>
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="card card-body">
      <v-server-table
        :columns="['name', 'us_code', 'can_code', 'status']"
        :options="options"
        url="/api/organizations"
      >
        <template slot="name" slot-scope="props">
          <router-link :to="'/organizations/' + props.row.id">{{
            props.row.name
          }}</router-link>
        </template>
      </v-server-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectPath: [{ text: "Organizations", to: "/organizations" }],
      options: {
        skin: "table b-table table-hover",
        perPage: 50,
        headings: {
          us_code: "US Code",
          can_code: "Canada Code",
        },
        texts: this.$store.state.VueTable.texts,
        sortIcon: this.$store.state.VueTable.sortIcon,
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>