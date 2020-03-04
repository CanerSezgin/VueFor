<template>
    <div>
        <v-row>
            <v-col cols="10" offset="1">
                <v-card :color="background" style="border: 1px solid grey">
                    <v-row no-gutters>
                        <v-col>
                            <v-card
                                flat
                                :color="background"
                                class="text-center py-1"
                            >
                                <h3 class="text-center">{{ label }}</h3>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card flat class="transparent">
                                <NumberInput
                                    :field="field"
                                    :min="min"
                                    :max="max"
                                    :form="form"
                                    :disabled="disabled"
                                />
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card flat class="text-center transparent py-1">
                                <h3>/{{ max }}</h3>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import NumberInput from "@/components/NumberInput";
export default {
    components: {
        NumberInput
    },
    props: ["min", "max", "label", "field", "form", "disabled"],
    data() {
        return {
            colors: {
                main: {
                    background: ""
                },
                disabled: {
                    background: "grey"
                }
            }
        };
    },
    computed: {
        background() {
            return this.disabled
                ? this.colors.disabled.background
                : this.colors.main.background;
        }
    }
};
</script>

<style lang="css" scoped>
.numberWithSuffix {
    border: 1px red solid;
    background: red;
}
</style>
