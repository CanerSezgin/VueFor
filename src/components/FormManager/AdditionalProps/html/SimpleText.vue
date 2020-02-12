<template>
    <v-row>
        <v-col cols="12">
        <v-radio-group v-model="element.type" row label="Type:">
            <v-radio label="p" value="p"></v-radio>
            <v-radio label="h1" value="h1"></v-radio>
            <v-radio label="h2" value="h2"></v-radio>
            <v-radio label="h3" value="h3"></v-radio>
            <v-radio label="h4" value="h4"></v-radio>
            <v-radio label="h5" value="h5"></v-radio>
            <v-radio label="h6" value="h6"></v-radio>
        </v-radio-group>
        </v-col>
        <v-col cols="12">
            <v-textarea
                v-model="element.desc"
                filled
                label="Text Description"
                auto-grow
            ></v-textarea>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: ["element"]
};
</script>

<style lang="scss" scoped></style>
