<template>
  <div>
    <h4 class="py-3 mb-4">
      <router-link to="/applications/new" class="btn btn-success float-right">
        <i aria-hidden="true" class="ion ion-ios-add-circle-outline"></i>
        New
      </router-link>
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="card">
      <div class="card-body">
        <v-server-table
          :columns="['name']"
          :options="options"
          url="/api/applications"
        >
          <template slot="name" slot-scope="props">
            <router-link :to="'/applications/' + props.row.id">{{
              props.row.name
            }}</router-link>
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
      projectPath: [{ text: "Applications", to: "/applications" }],
      options: {
        filterable: false,
        alwaysShowPerPageSelect: false,
        perPageValues: [],
        perPage: 100,
        headings: {},
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>