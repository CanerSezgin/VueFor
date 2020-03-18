<template>
    <div>
        <!-- Hero -->
        <v-card height="380" color="primary" dark class="pa-5">
            <v-container>
                <v-row>
                    <v-col cols="5" xl="5" offset-xl="1">
                        <!-- Hero - Description -->
                        <v-card class="px-5 transparent" flat>
                            <div class="display-1">Vue Form Generator</div>
                            <div class="mt-4">
                                Creating forms is super easy and so much fun anymore. 
                            </div>
                            <div class="mt-2">With powerful drag & drop form manager feature, 
                                you can create your own responsive forms simply by just clicking and let VueFor do its magic. 
                            </div>
                            <div class="mt-2">Voila ! Your Vue Form code is ready in microseconds</div>
                        </v-card>

                        <!-- Hero - Buttons -->
                        <v-row class="px-5 mt-5">
                            <v-col>
                                <v-btn
                                    x-large
                                    block
                                    color="white"
                                    class="primary--text"
                                    @click="
                                        internalLink({ name: 'PreMadeLayouts' })
                                    "
                                >
                                    <v-icon>mdi-domain</v-icon>
                                    <span class="ml-3">Get Started</span>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-btn
                                    outlined
                                    x-large
                                    block
                                    dark
                                    @click="externalLink(githubURL, true)"
                                >
                                    <v-icon>mdi-github</v-icon>
                                    <span class="ml-3">Github</span></v-btn
                                >
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="5" offset="2" xl="4" offset-xl="1">
                        <!-- <iframe id="hero-video" type="text/html" 
                            :width="video.width" :height="video.height" 
                            :autoplay="video.autoplay" 
                            :src="video.src" 
                            :frameborder="video.frameborder"
                        /> -->
                        <v-card class="elevation-22">
                            <v-img
                                :src="require(`@/assets/img/home/ss.png`)"
                            ></v-img>
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
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                            class="text-center grey lighten-4"
                            :elevation="hover ? 22 : 5"
                            shaped
                            @click="link(card.link)"
                            :height="cardHeight"
                        >
                            <v-img height="175" :src="card.img"></v-img>
                            <div class="mt-3 title text--secondary">
                                {{ card.title }}
                            </div>
                            <v-card-subtitle>{{ card.desc }}</v-card-subtitle>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import Footer from "@/components/Footer";
const githubURL = "https://github.com/CanerSezgin/VueFor";
export default {
    components: {
        Footer
    },
    data() {
        return {
            githubURL,
            video: {
                src:
                    "http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com",
                width: 425,
                height: 250,
                autoplay: 0,
                frameborder: 0
            },
            cardHeight: 320,
            cards: [
                {
                    img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                    title: "Drag & Drop Form Manager",
                    desc:
                        "We are providing quite powerful drag & drop form manager. It gives you all freedom that you need between form elements.",
                    link: {
                        type: "internal",
                        el: { name: "Form", params: { layout: "new" } }
                    }
                },
                {
                    img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                    title: "Pre-Made Layouts",
                    desc:
                        "Pre-made layouts give you a well structured starting point. The rest is up to your creativeness.",
                    link: {
                        type: "internal",
                        el: { name: "PreMadeLayouts" }
                    }
                },
                {
                    img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                    title: "Open Source Community",
                    desc:
                        "VueFor relies on thoughtful contributors and financial sponsors. This great community makes possible, providing VueFor is all free.",
                    link: {
                        type: "external",
                        el: githubURL
                    }
                }
            ]
        };
    },
    methods: {
        externalLink(url, newTab = false) {
            if (newTab) {
                window.open(url, "_blank");
            } else {
                location.href = url;
            }
        },
        internalLink(route) {
            this.$router.push(route);
        },
        link(link) {
            if (link.type === "external") {
                this.externalLink(link.el, true);
            }

            if (link.type === "internal") {
                this.internalLink(link.el);
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
