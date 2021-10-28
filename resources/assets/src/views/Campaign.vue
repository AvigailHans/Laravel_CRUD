<template>
  <div>
    <h4 class="py-3 mb-4">
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="card">
      <campaign :campaign="campaign" />
    </div>
  </div>
</template>
<script>
import Campaign from "../components/Campaign";
export default {
  components: { Campaign },
  data() {
    return {
      projectPath: [{ text: "Campaigns", to: "/campaigns" }],
      campaign: {},
    };
  },
  mounted() {
    this.getCampaign();
  },
  methods: {
    getCampaign() {
      if (this.$route.params.id == "new") {
        this.campaign = {
          sources: [{}],
          new: true,
        };
      } else {
        let self = this;
        axios
          .get("/api/campaigns/" + this.$route.params.id)
          .then(function (response) {
            self.campaign = response.data;
            self.projectPath.push({ text: response.data.name });
          });
      }
    },
  },
};
</script>