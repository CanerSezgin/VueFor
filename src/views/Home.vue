<template>
    <div>
        <v-card height="400" color="primary" dark class="pa-5">
            <v-container>
                <v-row>
                    <v-col cols="5">
                        <v-card class="pa-5 transparent" flat height="250">
                            <div class="display-1">Vue Form Generator</div>
                            <p class="mt-4">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Vel magnam totam fugiat
                                ratione ut quaerat modi, quasi placeat earum
                                adipisci deserunt laborum cumque voluptatum quos
                                nesciunt commodi quo deleniti eaque?
                            </p>
                        </v-card>
                    </v-col>
                    <v-col cols="" offset="2">
                        <iframe id="hero-video" type="text/html" 
                            :width="video.width" :height="video.height" 
                            :autoplay="video.autoplay" 
                            :src="video.src" 
                            :frameborder="video.frameborder"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <v-card color="blue-grey darken-3" dark class="py-3 text-center">
            VueFor
        </v-card>


        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
    components: {
        Footer
    },
    data() {
        return {
            video: {
                src: "http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com",
                width: 425,
                height: 250,
                autoplay: 0,
                frameborder: 0
            }
        }
    },
};
</script>

<style lang="scss" scoped></style>
