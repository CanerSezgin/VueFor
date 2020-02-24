<template>
    <div>
        <v-row>
            <v-col cols="9" class="py-0">
                <v-text-field
                    outlined
                    v-model="item"
                    label="Items"
                    required
                ></v-text-field>
            </v-col>
            <v-col cols="3" class="py-0">
                <v-btn block x-large @click="addItem">
                    Add
                </v-btn>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="12">
                <v-chip
                    v-for="(item, index) in items"
                    :key="index"
                    @dblclick="removeItem(item)"
                    class="ma-2"
                    color="primary"
                    label
                >
                    {{ item }}
                </v-chip>
            </v-col>
            <v-col cols="12">
                <div class="caption red--text">
                    * Double Click for removing from items.
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props: ['items'],
    data() {
        return {
            item: ""
        };
    },
    methods: {
        addItem() {
            if (this.item) {
                this.items.push(this.item);
                this.cleanItem();
            }
        },
        removeItem(item) {
            const index = this.items.findIndex(i => i === item);
            this.items.splice(index, 1);
        },
        cleanItem() {
            this.item = "";
        }
    }
};
</script>
