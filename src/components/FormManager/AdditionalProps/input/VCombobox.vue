<template>
    <div>
        <v-row>
            <v-col cols="6" class="py-0 pl-4">
                <v-text-field
                    v-model="element.label"
                    label="Label"
                    required
                ></v-text-field>
            </v-col>
            <v-col cols="6" class="py-0 pr-4">
                <v-text-field
                    v-model="element.key"
                    :error-messages="error"
                    label="Form Key"
                    required
                ></v-text-field>
            </v-col>
        </v-row>
        <ArrayController :items="element.items" />
    </div>
</template>

<script>
import ArrayController from '@/components/FormManager/AdditionalProps/helpers/ArrayController';
export default {
    components: { ArrayController },
    props: ["element", "error"],
};
</script>

<style lang="scss" scoped></style>
