<template>
  <div>
    <h4 class="py-3 mb-4">
      <router-link to="/users/new" class="btn btn-success float-right">
        <i aria-hidden="true" class="ion ion-ios-add-circle-outline"></i>
        New
      </router-link>
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="card">
      <div class="card-body">
        <v-server-table
          :columns="['name', 'organization.name', 'type', 'edit']"
          :options="options"
          url="/api/users"
        >
          <template slot="name" slot-scope="props">
            <router-link :to="'/users/' + props.row.id"
              >{{ props.row.name }} {{ props.row.l_name }}</router-link
            >
          </template>
          <template slot="organization.name" slot-scope="props">
            <router-link
              v-if="props.row.organization"
              :to="'/organizations/' + props.row.organization.id"
              >{{ props.row.organization.name }}</router-link
            >
          </template>
          <template slot="type" slot-scope="props">
            <template v-if="props.row.level == 100">Manager</template>
            <template v-if="props.row.level == 80">Boardman</template>
            <template v-if="props.row.level == 50"
              >Organization Manager</template
            >
          </template>
          <template slot="edit" slot-scope="props">
            <router-link :to="'/users/' + props.row.id">
              <i class="fad fa-pencil" />
            </router-link>
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
      projectPath: [{ text: "Users", to: "/users" }],
      options: {
        skin: "table b-table table-hover",
        filterable: true,
        alwaysShowPerPageSelect: false,
        perPageValues: [],
        perPage: 30,
        headings: { edit: "", "organization.name": "Organization" },
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>