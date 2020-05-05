<template>
  <div>
    <label>{{label}}</label>
    <b-form-textarea :name="name" :id="id" :value="value" maxlength="500" rows="3"></b-form-textarea>
  </div>
</template>

<script>
export default {
  name: "textareaInput",
  props: ["name", "value", "label", "id"],
  methods: {}
};
</script>

<style scoped>
</style>
