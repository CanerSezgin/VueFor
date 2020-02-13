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

                    <div v-for="item in layout" :key="item.i" @dblclick="update(item)">
                        <grid-item
                            class="px-5"
                            :class="(updateItem && updateItem.i === item.i) ? 'grid-selected-item' : 'grid-item'"
                            
                            :x="item.x"
                            :y="item.y"
                            :w="item.w"
                            :h="item.h"
                            :i="item.i"
                            :minH="item.minH"
                            :maxH="item.maxH"
                        >
                            <FormElements :opts="{ ...item.element, form }" />
                        </grid-item>

                    </div>
                    </grid-layout>
                </v-card>
            </v-col>

            <v-col class="px-5" cols="4">
                form: {{ form }} <br />
                <FormManager :updateItem="updateItem" 
                @addToForm="addToForm" 
                @updateElement="updateElement"
                />

                --------------------------------- <br />
                layout: {{ layout }} <br />
            </v-col>
        </v-row>

        <v-btn @click="saved = !saved">
            <div v-if="saved">Edit My Form</div>
            <div v-else>Save My Form</div>
        </v-btn>
    </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import FormManager from "@/components/FormManager/FormManager";
import FormElements from "@/components/FormElements/FormElements";

export default {
    name: "HelloWorld",
    components: {
        FormManager,
        FormElements,
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem
    },
    data: () => ({
        saved: false,
        form: {},

        updateItem: null,

        layout: []
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
            const processedData = {
                ...data,
                i: this.layout.length,
                y: data.addToBottom ? this.getLastElementYPosition() + 1 : 0
            };
            delete processedData.addToBottom;
            this.layout.push(processedData);
        },

        update(val) {
            this.updateItem = val
        },
        updateElement(data) {
            const index = this.layout.findIndex(item => item.i === data.i)
            this.layout[index] = data
            this.updateItem = null
        }
    }
};
</script>

<style lang="css" scoped>
.grid-item {
    background: greenyellow;
}
.grid-selected-item {
    background: red;
}
</style>
