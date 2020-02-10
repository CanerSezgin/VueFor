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
        {{form}} <br>
        {{selectedElement}} <br>
        {{formElementOpts}}
        
        <v-card dark class="pa-5">

          <v-select
            v-model="selectedElement"
            :items="items"
            item-text="label"
            item-value="key"
            label="Form Element"
            outlined
          ></v-select>

          <div v-if="!selectedElement">
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

        <v-card flat class="mt-3" v-if="!selectedElement">

          <v-card dark>
            <v-card-title>Preview of The Form Element</v-card-title>
          </v-card>

          <div class="grid-item px-5 py-2">
            <v-text-field
              :label="formElement.label"
            ></v-text-field>
          </div>

          <v-card-text style="position: relative">

            <v-row>
              <v-col cols="9">
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-switch
                      v-model="addToBottom"
                      :label="`Add To ${addToBottom ? 'Bottom' : 'Top'}`"
                    ></v-switch>
                  </v-col>
                  <v-col cols="6" class="pr-3">
                    <v-card flat>
                      <v-row no-gutters class="number-field">
                        <v-col class="blue section1 white-text py-2" cols="3">
                          <h2 class="text-center">H:</h2>
                        </v-col>
                        <v-col cols="3" class="ml-2 py-2">
                          <NumberInput field="width"
                          :min="1" :max="12"
                          :form="formElementOpts"/>
                        </v-col>
                        <v-col cols="1" class="suffix py-2">
                          <h2>/12</h2>
                        </v-col>
                      </v-row>
                    </v-card>

                  </v-col>
                  <v-col cols="6" class="pr-3">
                    <NumberInput field="height"
                    :min="1" :max="12"
                    :form="formElementOpts"/>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="3">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      @click="addToForm"
                      absolute fab
                      medium right
                      dark color="pink"
                    >
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </template>
                  <span>Add Element to Form</span>
                </v-tooltip>
              </v-col>
            </v-row>




            



          </v-card-text>
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
import NumberInput from '@/components/NumberInput'
  export default {
    name: 'HelloWorld',
    components: {
      NumberInput,
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem
    },
    data: () => ({
      saved: false,
      form: {},
      formElement: {},
      formElementOpts: {},
      layout: [
        {"x":0,"y":0,"w":2,"h":2,"i":"0", key: "name"},
        {"x":2,"y":0,"w":2,"h":4,"i":"1", key: "surname"},
        {"x":4,"y":0,"w":2,"h":5,"i":"2", key: "email"},
        {"x":6,"y":0,"w":2,"h":3,"i":"3", key: "age"},
        {"x":8,"y":0,"w":2,"h":3,"i":"4"}
      ],
      
      addToBottom: true,
      selectedElement: null,
      items: [
        {label: 'Text Field', key: 'v-text-field'}
      ]
    }),
    methods: {
      addToForm() {
        const i = this.layout.length
         
        this.layout.push({"x":0,"y":1,"w":12,"h":2,"i": i, key: this.formElement.key})
        console.log('added')
      }
    },
  }
</script>

<style lang="css" scoped>
  .grid-item {
    background: greenyellow
  }

  .section1 {
    width:100%; /*full width*/
    min-height:90%;
    text-align:center;
    display:table; /*acts like a table*/
    color: white;

}
  .suffix {
    width:100%;
    min-height:90%;
    text-align:center;
    display:table; 
}
h2 {
  display:table-cell; 
  vertical-align:middle; 
  height: 2rem;
  margin: 0 auto;
}
.number-field {
  border: blue 2px solid;
}
</style>
