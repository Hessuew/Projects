<template>
  <div>
    <b-row>
      <b-col sm="3">
        <label>{{label}}</label>
      </b-col>
      <b-col>
        <b-form-input type="number" :id="id" :name="name" :value="value"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "numberInput",
  props: ["name", "value", "label", "id"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
</style>
