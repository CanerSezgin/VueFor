<template>
    <div>

        <v-dialog persistent v-model="dialog" width="680">

            <v-row class="text-right">
                <v-col>
                    <v-btn class="mx-2" fab dark color="pink"
                        @click="$emit('closeDialog')"
                    >
                        <v-icon dark>mdi-close</v-icon>
                    </v-btn>
                    <PrismEditor
                        v-model="code"
                        language="js"
                        :readonly="true"
                    />
                </v-col>
            </v-row>
      
        </v-dialog>
    </div>
</template>

<script>
import PrismEditor from "vue-prism-editor";
export default {
    components: {
        PrismEditor
    },
    props: ['dialog', 'code']
};
</script>
