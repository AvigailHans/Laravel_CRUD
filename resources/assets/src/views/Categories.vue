<template>
  <div>
    <h4 class="py-3 mb-4">
      <router-link to="/categories/new" class="btn btn-success float-right">
        <i aria-hidden="true" class="ion ion-ios-add-circle-outline"></i>
        New
      </router-link>
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="card">
      <div class="card-body">
        <v-server-table
          :columns="[
            'name',
            'organizations_count',
            'icon',
            'organization.name',
          ]"
          :options="options"
          url="/api/categories"
        >
          <template slot="name" slot-scope="props">
            <router-link :to="'/categories/' + props.row.id">{{
              props.row.name
            }}</router-link>
          </template>
          <template slot="icon" slot-scope="props">
            <i :class="'fad fa-' + props.row.icon" />
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
      projectPath: [{ text: "Categories", to: "/categories" }],
      options: {
        skin: "table b-table table-hover",
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