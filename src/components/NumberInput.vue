<template>
  <input
    v-model="form[field]"
    class="number"
    type="number"
    :max="max"
    :min="min"
  />
</template>

<script>
export default {
  props: ["form", "field", "max", "min"]
};
</script>

<style lang="css" scoped>
input.number {
  height: 2rem;
  font-size: 1.5rem;
  outline: none;
  width: 100%;
}
/*** Remove Arrows ***/
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
