<template>
    <div>
        <!-- Hero -->
        <v-card height="400" color="primary" dark class="pa-5">
            <v-container>
                <v-row>
                    <v-col cols="5" 
                        xl="5" offset-xl="1"
                    >   
                        <!-- Hero - Description -->
                        <v-card class="pa-5 transparent" flat>
                            <div class="display-1">Vue Form Generator</div>
                            <p class="mt-4">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Vel magnam totam fugiat
                                ratione ut quaerat modi, quasi placeat earum
                                adipisci deserunt laborum cumque voluptatum quos
                                nesciunt commodi quo deleniti eaque?
                            </p>
                        </v-card>
                        
                        <!-- Hero - Buttons -->
                        <v-row class="px-5">
                            <v-col>
                                <v-btn x-large block color="white" class="primary--text"
                                    @click="internalLink({name: 'PreMadeLayouts'})"
                                > 
                                    <v-icon>mdi-domain</v-icon> <span class="ml-3">Get Started</span>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-btn outlined x-large block dark
                                @click="externalLink(githubURL, true)"
                                > <v-icon>mdi-github</v-icon> <span class="ml-3">Github</span></v-btn>
                            </v-col>
                        </v-row>
                  

                    </v-col>
                    <v-col cols="5" offset="2"
                        xl="4" offset-xl="1"
                    >
                        <!-- <iframe id="hero-video" type="text/html" 
                            :width="video.width" :height="video.height" 
                            :autoplay="video.autoplay" 
                            :src="video.src" 
                            :frameborder="video.frameborder"
                        /> -->
                        <v-card class="elevation-22">
                            <v-img :src="require(`@/assets/img/home/ss.png`)"></v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <!-- Divider -->
        <v-card color="blue-grey darken-3" dark class="py-3 text-center">
            VueFor
        </v-card>
        <!-- Body -->
        <v-container>
            <v-row>
                <v-col cols="4" v-for="(card, index) in cards" :key="index">
                    <!-- Feature Cards -->
                    <v-card class="elevation-22 text-center grey lighten-4" shaped
                    @click="link(card.link)">
                        <v-img height="175" :src="card.img"></v-img>
                        <div class="mt-3 title text--secondary">{{card.title}}</div>
                        <v-card-subtitle>{{card.desc}}</v-card-subtitle>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/Footer'
const githubURL = 'https://github.com/CanerSezgin/VueFor';
export default {
    components: {
        Footer
    },
    data() {
        return {
            githubURL,
            video: {
                src: "http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com",
                width: 425,
                height: 250,
                autoplay: 0,
                frameborder: 0
            },
            cards: [
                {
                    img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                    title: 'Drag & Drop Form Manager',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis laudantium dignissimos repudiandae',
                    link: {
                        type: 'internal',
                        el: {name: 'Form', params: {layout: 'new'}}
                    }
                },
                {
                    img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                    title: 'Pre-Made Layouts',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis laudantium dignissimos repudiandae',
                    link: {
                        type: 'internal',
                        el: {name: 'PreMadeLayouts'}
                    }
                },
                {
                    img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                    title: 'Open Source Community',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis laudantium dignissimos repudiandae',
                    link: {
                        type: 'external',
                        el: githubURL
                    }
                }
            ]
        }
    },
    methods: {
        externalLink(url, newTab=false) {
            if(newTab){
                window.open(url, "_blank");
            } else {
                location.href = url
            }
        },
        internalLink(route){
            this.$router.push(route)
        },
        link(link){
            if(link.type === 'external'){
                this.externalLink(link.el, true)
            }

            if(link.type === 'internal'){
                this.internalLink(link.el)
            }
        }
    },
};
</script>

<style lang="scss" scoped></style>
