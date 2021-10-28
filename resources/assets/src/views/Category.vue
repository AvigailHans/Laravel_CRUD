<template>
  <div>
    <h4 class="py-3 mb-4">
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="card">
      <div class="card-body">
        <b-form-row>
          <b-form-group label="Category Name" class="col-md-6">
            <b-input v-model="category.name" />
          </b-form-group>
          <b-form-group label="Icon" class="col-md-6">
            <icon-picker :model.sync="category" :model-name="'icon'" />
          </b-form-group>
        </b-form-row>
        <ladda-btn
          :loading="processing"
          @click.native="saveCategory"
          data-style="expand-right"
          class="btn btn-success btn-lg float-right"
        >
          <i
            aria-hidden="true"
            class="ion ion-ios-checkmark-circle-outline"
          ></i>
          Save
        </ladda-btn>
      </div>
    </div>
    <div
      class="card mt-3"
      v-if="category.organizations && category.organizations.length"
    >
      <div class="card-header">
        Organizations in <b>{{ category.name }}</b>
      </div>
      <div class="card-body">
        <table class="table">
          <tr>
            <th>Name</th>
            <th>US Code</th>
            <th>CAN Code</th>
            <th>Status</th>
          </tr>
          <tr
            v-for="organization in category.organizations"
            :key="organization.id"
          >
            <td>
              <router-link :to="'/organizations/' + organization.id">
                {{ organization.name }}
              </router-link>
            </td>
            <td>{{ organization.us_code }}</td>
            <td>{{ organization.can_code }}</td>
            <td>{{ organization.status }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import IconPicker from "../components/IconPicker";
export default {
  components: {
    IconPicker,
  },
  data() {
    return {
      category: {},
      processing: false,
      projectPath: [
        { text: "Categories", to: "/categories" },
        { text: "", active: true },
      ],
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    saveCategory() {
      let self = this;
      self.processing = true;
      axios.post("/api/categories/" + this.category.id, this.category).then(
        function (response) {
          console.log(response.data);
          self.category = response.data;
          self.projectPath[1].text = response.data.name;
          self.$router.push({ path: "/categories/" + response.data.id });
          self.processing = false;
        },
        function (error) {
          self.processing = false;
        }
      );
    },
    getCategory() {
      let self = this;
      axios
        .get("/api/categories/" + this.$route.params.id)
        .then(function (response) {
          self.category = response.data;
          self.projectPath[1].text = self.category.name;
          self.processing = false;
        });
    },
  },
};
</script>