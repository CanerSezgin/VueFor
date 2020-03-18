<template>
    <div>
        <Preview :dialog="previewDialog" :layout="previewLayout" @closeDialog="resetDialogValues" />
        <v-container>
            <v-row>
                <v-col cols="4" v-for="layout in PreMadeLayoutsJson" :key="layout.id">
                      <v-card
                            class="mx-auto"
                        >
                            <v-img
                            class="white--text align-end"
                            height="325px"
                            :src="getImage(layout.id)">

                            <v-card-title class="grey lighten-3 black--text">{{layout.name}}</v-card-title>
                            </v-img>

                            <!-- <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> -->

                            <v-card height="95" flat>
                                <v-card-text class="text--primary">
                                <li v-for="(desc, index) in layout.descriptions" :key="index">{{desc}}</li>

                                <!-- <div class="mt-5 text-right">03/11/2020</div> -->
                                </v-card-text>
                            </v-card>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                            <v-btn
                                @click="openPreview(layout.id)"
                                color="pink darken-3"
                                text
                            >
                                Preview
                            </v-btn>

                            <v-btn
                                color="pink darken-3"
                                text
                                @click="goToForm(layout.id)"
                            >
                                Use Layout
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import PreMadeLayoutsJson from '@/data/PreMadeLayouts'
import Preview from '@/components/Previews/Preview'
    export default {
        components: {
            Preview
        },
        data() {
            return {
                PreMadeLayoutsJson,
                previewDialog: false,
                previewLayout: null
            }
        },
        methods: {
            goToForm(id) {
                this.$router.push({name: 'Form', params: {layout: id}})
            },
            getImage(id){
                return require(`@/assets/img/PreMadeLayouts/${id}.png`)
            },
            openPreview(id) {
                this.previewDialog = true
                this.previewLayout = id
            },
            resetDialogValues(){
                this.previewDialog = false
                this.previewLayout = null
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>

