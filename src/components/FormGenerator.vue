<template>
    <div>
       <v-row class="mt-3">
            <v-col cols="12" lg="11" offset-lg="1">
                <v-row>
                    <!-- Form -->
                    <v-col cols="8" class="px-5">
                        <v-card
                            min-height="80vh"
                            elevation="16"
                            color="amber lighten-5"
                        >
                            <grid-layout
                                :layout.sync="layout"
                                :col-num="12"
                                :row-height="30"
                                :is-mirrored="false"
                                :vertical-compact="true"
                                :margin="[10, 10]"
                                :use-css-transforms="true"
                            >
                                <div
                                    v-for="item in layout"
                                    :key="item.i"
                                    @dblclick="update(item)"
                                >
                                    <grid-item
                                        class="px-5"
                                        :class="
                                            updateItem &&
                                            updateItem.i === item.i
                                                ? 'grid-selected-item'
                                                : 'grid-item'
                                        "
                                        :x="item.x"
                                        :y="item.y"
                                        :w="item.w"
                                        :h="item.h"
                                        :i="item.i"
                                        :minH="item.minH"
                                        :maxH="item.maxH"
                                    >
                                        <FormElements
                                            :opts="{ ...item.element, form }"
                                        />
                                    </grid-item>
                                </div>
                            </grid-layout>
                        </v-card>
                    </v-col>

                    <!-- Form Manager -->
                    <v-col class="px-5" cols="4">
                        <SourceCode />
                        <CodeOutput :layout="layout" />
                        
                        <FormManager
                            :updateItem="updateItem"
                            :layout="layout"
                            @addToForm="addToForm"
                            @updateElement="updateElement"
                            @changeWH="changeWH"
                        />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import FormManager from "@/components/FormManager/FormManager";
import FormElements from "@/components/FormElements/FormElements";
import SourceCode from '@/components/SourceCode';
import CodeOutput from "@/components/CodeOutput";

export default {
    name: "HelloWorld",
    components: {
        FormManager,
        FormElements,
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem,
        SourceCode,
        CodeOutput
    },
    data: () => ({
        form: {},

        updateItem: null,

        layout: []
    }),
    methods: {
        changeWH(data) {
            const index = this.layout.findIndex(item => item.i === data.i);
            switch (data.type) {
                case "w":
                    this.layout[index].w = data.val;
                    break;

                case "h":
                    this.layout[index].h = data.val;
                    break;
            }
        },
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
            this.updateItem = val;
        },
        updateElement(data) {
            console.log(data);
            const index = this.layout.findIndex(item => item.i === data.i);

            // DO NOT change object refrence by setting another object
            this.layout[index].x = data.x;
            this.layout[index].y = data.y;
            this.layout[index].w = data.w;
            this.layout[index].h = data.h;
            this.layout[index].i = data.i;
            this.layout[index].minH = data.minH;
            this.layout[index].maxH = data.maxH;
            this.layout[index].element = data.element;

            this.updateItem = null;
        }
    }
};
</script>

<style lang="css" scoped>
.grid-item {
    border: 1px dashed #6d4c41;
}
.grid-selected-item {
    background: #ffcc80;
    border: 1px dashed #6d4c41;
}
</style>
