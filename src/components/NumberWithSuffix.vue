<template>
  <v-card flat>
    <v-row no-gutters :class="disabled ? 'disabled-number-field': 'number-field'">
      <v-col class="section1 white-text py-2" cols="4" :class="disabled ? colors.disabled.border : colors.main.border">
        <h2 class="text-center">{{label}}:</h2>
      </v-col>
      <v-col cols="4" class="py-2" :class="disabled ? colors.disabled.bg : colors.disabled.main">
        <NumberInput :field="field" :min="min" :max="max" :form="form" :disabled="disabled" />
      </v-col>
      <v-col cols="4" class="suffix py-2" :class="disabled ? colors.disabled.bg : colors.disabled.main">
        <h2>/{{max}}</h2>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import NumberInput from "@/components/NumberInput";
export default {
  components: {
    NumberInput
  },
  props: ['min', 'max', 'label', 'field', 'form', 'disabled'],
  data() {
    return {
      colors: {
        main: {
          border: 'blue',
          bg: 'white'
        },
        disabled: {
          border: 'blue-grey darken-1',
          bg: 'blue-grey lighten-3'
        }
      }
    }
  },
};
</script>

<style lang="css" scoped>
.section1 {
  width: 100%;
  min-height: 90%;
  text-align: center;
  display: table;
  color: white;
}
.suffix {
  width: 100%;
  min-height: 90%;
  text-align: center;
  display: table;
}
h2 {
  display: table-cell;
  vertical-align: middle;
  height: 2rem;
  margin: 0 auto;
}
.number-field {
  border: #2196F3 2px solid;
}
.disabled-number-field {
  border: #B0BEC5 2px solid;
}
</style>
