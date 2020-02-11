<template>
  <div>
    <v-row>
      <v-col cols="8" class="px-5">
        <v-card min-height="80vh" elevation="15">
          <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="!saved"
            :is-resizable="!saved"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
          >
            <grid-item
              class="grid-item px-5"
              v-for="item in layout"
              :x="item.x"
              :y="item.y"
              :w="item.w"
              :h="item.h"
              :i="item.i"
              :minH="2"
              :maxH="2"
              :key="item.i"
            >
              <!-- <v-text-field
                v-model="form[item.element.key]"
                :label="item.element.label"
              ></v-text-field> -->

              <!-- {{ item.element }} -->
            </grid-item>
          </grid-layout>
        </v-card>
      </v-col>

      <v-col class="px-5" cols="4">
        form: {{ form }} <br />
        <FormManager @addToForm="addToForm" />

      </v-col>
    </v-row>

    <v-btn @click="saved = !saved">
      <div v-if="saved">Edit My Form</div>
      <div v-else>Save My Form</div>
    </v-btn>
  </div>
</template>

<script>
import FormManager from '@/components/FormManager';
import VueGridLayout from "vue-grid-layout";

export default {
  name: "HelloWorld",
  components: {
    FormManager,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data: () => ({
    saved: false,
    form: {},

    layout: [
      /* {"x":0,"y":0,"w":2,"h":2,"i":"0", key: "name"},
        {"x":2,"y":0,"w":2,"h":4,"i":"1", key: "surname"},
        {"x":4,"y":0,"w":2,"h":5,"i":"2", key: "email"},
        {"x":6,"y":0,"w":2,"h":3,"i":"3", key: "age"},
        {"x":8,"y":0,"w":2,"h":3,"i":"4"} */
    ],
  }),
  methods: {
    getLastElementYPosition() {
      let y = 0;
      this.layout.forEach(element => {
        if (element.y > y) {
          y = element.y;
        }
      });
      return y;
    },
    
    addToForm(data) {
      console.log(data)
      console.log("addtodata main")
    }
  }
};
</script>

<style lang="css" scoped>

</style>
