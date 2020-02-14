<template>
    <!--     <div>
        <v-card class="px-4">
            <v-row no-gutters>
                <v-col class="pa-2" cols="4">
                    <v-card color="red" class="px-5" height="70">x</v-card>
                </v-col>
                <v-col class="pa-2" cols="5" offset="2" >
                    <v-card color="red" class="px-5" height="110">x</v-card>
                </v-col>
                <v-col class="pa-2" cols="7">
                    <v-card color="red" class="px-5" height="70">x</v-card>
                </v-col>
                <v-col class="pa-2" cols="9">
                    <v-card color="red" class="px-5" height="150">x</v-card>
                </v-col>
            </v-row>
        </v-card>
    </div> -->
    <div>
        <v-card class="px-4">
            <v-row no-gutters>
                <v-col
                    v-for="item in layout"
                    :key="item.i"
                    class="pa-2"
                    :cols="item.w"
                >
                    <v-card color="red" class="px-5" :height="item.h * 40 - 10"
                        >x</v-card
                    >
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            layout: [
                {
                    x: 0,
                    w: 4,
                    h: 2,
                    minH: 1,
                    maxH: 12,
                    element: {
                        type: "h2",
                        desc: "dsffsddsf",
                        category: "static",
                        component: "SimpleText"
                    },
                    i: 0,
                    y: 0,
                    moved: false
                },
                {
                    x: 6,
                    w: 5,
                    h: 3,
                    minH: 1,
                    maxH: 12,
                    element: {
                        type: "h5",
                        desc: "sdfds fdssfsdfdf dsfdsffds dsfdsfsd",
                        category: "static",
                        component: "SimpleText"
                    },
                    i: 1,
                    y: 1,
                    moved: false
                },
                {
                    x: 0,
                    w: 7,
                    h: 2,
                    minH: 2,
                    maxH: 2,
                    element: {
                        label: "sdfdsf",
                        key: "dsfsdf",
                        category: "input",
                        component: "VTextField"
                    },
                    i: 2,
                    y: 8,
                    moved: false
                },
                {
                    x: 1,
                    w: 9,
                    h: 4,
                    minH: 1,
                    maxH: 12,
                    element: {
                        type: "h4",
                        desc: "qqqqqwd sadsfsdf",
                        category: "static",
                        component: "SimpleText"
                    },
                    i: 3,
                    y: 4,
                    moved: false
                },
                {
                    x: 5,
                    w: 4,
                    h: 1,
                    minH: 1,
                    maxH: 12,
                    element: {
                        type: "p",
                        category: "static",
                        component: "SimpleText"
                    },
                    i: 4,
                    y: 0,
                    moved: false
                }
            ].sort((a, b) => a.y - b.y)
        };
    }
};
</script>

<style lang="scss" scoped></style>
