<template>

  <div>

    <v-row>
      <v-col cols="8">
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

        <grid-item class="grid-item px-5" v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :minH="2"
                   :maxH="2"
                   :key="item.i">

            <v-text-field
              v-model="form[item.key]"
              :label="item.key"
            ></v-text-field>


        </grid-item>
    </grid-layout>
      </v-col>


      <v-col class="px-5" cols="4">
        {{form}}
        
        <v-card dark class="pa-5">

          <v-select
            v-model="selectedElement"
            :items="items"
            item-text="label"
            item-value="key"
            label="Form Element"
            outlined
          ></v-select>

          <div v-if="selectedElement">
            <v-row>
              <v-col cols="12">
                <h3>Additional Properties</h3>
              </v-col>
              <v-col cols="6">
                <v-text-field
                v-model="formElement.label"
                label="Label"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
              <v-text-field
                v-model="formElement.key"
                label="Form Key"
                required
              ></v-text-field>
              </v-col>
            </v-row>

          </div>

        </v-card>

        <v-card dark class="mt-3 pa-5" v-if="selectedElement">
          <v-card-title>Preview of The Form Element</v-card-title>
          <v-text-field
            :label="formElement.label"
          ></v-text-field>
        </v-card>





      </v-col>
    </v-row>





    <v-btn @click="saved=!saved">
      <div v-if="saved">Edit My Form</div>
      <div v-else>Save My Form</div>
    </v-btn>


  </div>
    

</template>

<script>
import VueGridLayout from 'vue-grid-layout';
  export default {
    name: 'HelloWorld',
    components: {
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem
    },
    data: () => ({
      saved: false,
      form: {},
      formElement: {},
      layout: [
        {"x":0,"y":0,"w":2,"h":2,"i":"0", key: "name"},
        {"x":2,"y":0,"w":2,"h":4,"i":"1", key: "surname"},
        {"x":4,"y":0,"w":2,"h":5,"i":"2", key: "email"},
        {"x":6,"y":0,"w":2,"h":3,"i":"3", key: "age"},
        {"x":8,"y":0,"w":2,"h":3,"i":"4"}
      ],
      
      selectedElement: null,
      items: [
        {label: 'Text Field', key: 'v-text-field'}
      ]
    }),
  }
</script>

<style lang="css">
  .grid-item {
    background: greenyellow
  }
</style>
