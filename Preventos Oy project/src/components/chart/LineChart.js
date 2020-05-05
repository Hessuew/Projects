import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: ["data", "options"],
  methods: {
    update() {
      this.$data._chart.update(); // Calls charts internal method to update.
    }
  },
  watch: {
    options: {
      handler() {
        this.renderChart(this.data, this.options);
      },
      deep: true
    },
    data: {
      handler() {
        this.renderChart(this.data, this.options);
        this.$data._chart.update();
      }
    }
  },
  mounted() {
    this.renderChart(this.data, this.options);
  }
};
