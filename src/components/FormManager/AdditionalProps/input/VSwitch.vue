<template>
    <v-row>
        <v-col cols="6">
            <v-text-field
                v-model="element.label"
                label="Label"
                required
            ></v-text-field>
        </v-col>
        <v-col cols="6">
            <v-text-field
                v-model="element.key"
                :error-messages="error"
                label="Form Key"
                required
            ></v-text-field>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: ["element", "error"]
};
</script>

<style lang="scss" scoped></style>
