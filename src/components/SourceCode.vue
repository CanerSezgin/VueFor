<template>

    <v-row>
        <v-col style="max-width: 680px">
                <v-card dark width="635px">
        <PrismEditor v-model="code" language="js" :readonly="true" />
    </v-card>
        </v-col>
        <v-col>
{{code}}
        </v-col>
    </v-row>

</template>

<script>
import PrismEditor from 'vue-prism-editor'
export default {
  components: {
    PrismEditor
  },
  data() {
      return {
          form: {},
          code: `
          <v-card class="px-4 container" :style="{ 
    gridTemplateRows: 'repeat(11, 40px [row-start])',
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(12, 8.333333% [col-start])'
}">
    <div class="item-a ma-1 px-5" :style="{ gridArea: '1 / 1 / 3 / 13'}">
    
            <h4>dsfsdfsdf</h4>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '3 / 1 / 5 / 13'}">
    
            <v-checkbox
                v-model="form['dsfdsfdsafdsf']"
                label="dsfdsaf"
            ></v-checkbox>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '5 / 1 / 7 / 7'}">
    
            <v-select
                v-model="form['dsfsfd']"
                label="dsfdsf"
                :items='["erewr","dfssdf","dsfdsf"]'
                :multiple="false"
                regular
            ></v-select>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '5 / 9 / 10 / 12'}">
    
            <v-switch
                v-model="form['sddsfdfs']"
                label="dsf"
            ></v-switch>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '10 / 1 / 12 / 13'}">
    
            <v-switch
                v-model="form['wqewqe']"
                label="sdf"
            ></v-switch>
            
    </div>
    
</v-card>
          `
      }
  },
}
</script>