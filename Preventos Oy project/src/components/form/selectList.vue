<template>
  <div>
    <label>{{label}}</label>
    <b-form-select :value="value" :name="name" :id="id">
      <option v-for="option in options" :key="option" :placeholder="placeholder">{{option}}</option>
    </b-form-select>
  </div>
</template>

<script>
export default {
  name: "selectList",
  props: ["options", "name", "label", "value", "id", "placeholder"],
  methods: {}
};
</script>

<style scoped>
</style>
