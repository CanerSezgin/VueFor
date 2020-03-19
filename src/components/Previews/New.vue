<template>
    <v-card
        class="px-4 container"
        :style="{
            gridTemplateRows: 'repeat(0, 40px [row-start])',
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(12, 8.333333% [col-start])'
        }"
    >
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        };
    }
};
</script>

<style lang="scss" scoped></style>
