<template>
  <div>
    <b-row>
      <b-col sm="3">
        <label>{{label}}</label>
      </b-col>
      <b-col>
        <b-form-input type="text" :id="id" :name="name" :value="value"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "textInput",
  props: ["name", "value", "label", "id"],
  methods: {}
};
</script>

<style scoped>
</style>
