<template>
    <div>
        <div>
            <v-card class="px-4 container" :style="{gridTemplateRows: `repeat(${lastRow}, 40px [row-start])`}">
                <div
                    v-for="item in layout"
                    :key="item.i"
                    class="item-a ma-1 px-5"
                    :style="{
                        gridArea: `${item.y ? item.y : 1} / ${
                            item.x ? item.x : 1
                        } / ${item.y + item.h} / ${item.x + item.w}`
                    }"
                >
                    {{ item.x }}, {{ item.y }} --> w: {{ item.w }}, h:
                    {{ item.h }}
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.lastRow = this.getLastRow()
    },
    data() {
        return {
            lastRow: 0,
            layout: [
                {
                    x: 0,
                    w: 8,
                    h: 4,
                    minH: 1,
                    maxH: 12,
                    element: {
                        type: "p",
                        category: "static",
                        component: "SimpleText"
                    },
                    i: 0,
                    y: 0,
                    moved: false
                },
                {
                    x: 4,
                    w: 8,
                    h: 2,
                    minH: 2,
                    maxH: 2,
                    element: { category: "input", component: "VTextField" },
                    i: 1,
                    y: 5,
                    moved: false
                },
                {
                    x: 6,
                    w: 4,
                    h: 1,
                    minH: 1,
                    maxH: 12,
                    element: {
                        type: "p",
                        desc: "tuyıuytıyutıuytı utıuytıtu",
                        category: "static",
                        component: "SimpleText"
                    },
                    i: 2,
                    y: 4,
                    moved: false
                },
                {
                    x: 0,
                    w: 12,
                    h: 6,
                    minH: 1,
                    maxH: 12,
                    element: {
                        type: "p",
                        category: "static",
                        component: "SimpleText"
                    },
                    i: 3,
                    y: 7,
                    moved: false
                },
                {
                    x: 2,
                    w: 7,
                    h: 7,
                    minH: 1,
                    maxH: 12,
                    element: {
                        type: "p",
                        category: "static",
                        component: "SimpleText"
                    },
                    i: 4,
                    y: 13,
                    moved: false
                },
                {
                    x: 0,
                    w: 12,
                    h: 10,
                    minH: 1,
                    maxH: 12,
                    element: {
                        type: "p",
                        category: "static",
                        component: "SimpleText"
                    },
                    i: 5,
                    y: 20,
                    moved: false
                }
            ]
        };
    },
    methods: {
        getLastRow() {
            let lastRow = 0
            this.layout.forEach(item => {
                if(item.y + item.h > lastRow){
                    lastRow = item.y + item.h
                }
            });
            return lastRow
        }
    },
};
</script>

<style lang="css">
.container {
    display: inline-grid;
    grid-template-columns: repeat(12, 8.333333% [col-start]);
}

.item-a {
    background: red;
}
</style>
