<template>
    <div>
        <v-dialog persistent v-model="dialog" width="1500">
            <v-card dark class="sourceCodeModal">
                <v-row class="text-right" no-gutters>
                    <v-col cols="12">
                        <v-btn
                            class="mr-5"
                            fab
                            dark
                            color="pink"
                            @click="$emit('closeDialog')"
                        >
                            <v-icon dark>mdi-close</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="2" offset="1">
                        <v-alert color="error" dark class="px-5">Script</v-alert>
                        <!-- <code>{{script}}</code> -->
                        <PrismEditor
                            v-model="script"
                            language="js"
                            :readonly="true"
                        />
                    </v-col>
                    <v-col cols="8">
                        <v-alert color="error" dark class="px-5">Template</v-alert>
                        <!-- <code style="js">{{code}}</code> -->
                        <PrismEditor
                            v-model="code"
                            language="js"
                            :readonly="true"
                        />
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import PrismEditor from "vue-prism-editor";
export default {
    components: {
        PrismEditor
    },
    props: ["dialog", "code"],
    data() {
        return {
            script: `
    export default {
        data() {
            return {
                form: {}
            }
        },
    }
`
        };
    }
};
</script>

<style lang="css" scoped>
.sourceCodeModal {
    overflow-x: hidden;
}
code {
    font-family: monospace;
}
</style>
