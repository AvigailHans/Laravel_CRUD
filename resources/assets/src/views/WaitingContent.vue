<template>
  <div>
    <waiting-content-card
      v-for="organization in waiting_content"
      :key="organization.id"
      :organization="organization"
      v-on:refresh="getContent"
    />
    <div v-if="waiting_content.length == 0">No content is waiting to approve</div>
  </div>
</template>
<script>
import WaitingContentCard from "../components/WaitingContentCard";
export default {
  components: {
    WaitingContentCard,
  },
  data() {
    return {
      waiting_content: [],
    };
  },
  mounted() {
    this.getContent();
  },
  methods: {
    getContent() {
      let self = this;
      axios.get("/api/organizations/waiting_content").then(function (response) {
        self.waiting_content = response.data;
      });
    },
  },
};
</script>