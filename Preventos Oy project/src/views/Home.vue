<template>
  <div class="home">
    <chart-control/>
  </div>
</template>

<script>
import ChartControl from "@/components/chart/ChartControl.vue";
export default {
  name: "home",
  components: { ChartControl },
  data() {
    return {
      loginStatus: false
    };
  },
  methods: {}
};
</script>

 <style scoped>
.home {
  align-items: center;
}
</style>
