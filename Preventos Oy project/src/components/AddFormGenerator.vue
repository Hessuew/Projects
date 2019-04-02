<template>
  <div>
    <component
      v-for="(field, index) in schema"
      :ref="field.id"
      :key="index"
      :is="field.fieldType"
      :value="formData[field.name]"
      v-bind="field"
    ></component>
  </div>
</template>

<script>
import selectList from "./form/selectList.vue";
import textInput from "./form/textInput.vue";
import numberInput from "./form/numberInput.vue";
import textareaInput from "./form/textareaInput.vue";
import dateInput from "./form/dateInput.vue";
import timeInput from "./form/timeInput.vue";

export default {
  name: "formGenerator",
  components: {
    selectList,
    textInput,
    numberInput,
    textareaInput,
    dateInput,
    timeInput
  },
  props: ["schema", "value", "id", "placeholder"],

  data() {
    return {
      formData: this.value || {}
    };
  },
  methods: {
    /*updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit("input", this.formData);
    }*/
  }
};
</script>

