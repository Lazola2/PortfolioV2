<template>
    <section class="testimonials">
        <h1 class="heading mt-5">Testimonials</h1>
        <div class="wrapper w-100">
            <!-- show if testimonials are found -->
            <div v-if="testimonials" class="d-flex gap-4 mt-5 flex-wrap container justify-content-center">
                <div class="testimonial p-3" v-for="testimonial in testimonials" :key="testimonial">
                    <!-- top part of the testimonial card -->
                    <div class="header d-flex align-items-end">
                        <img :src="testimonial.attestent?.picture">
                        <div class="content ps-3 pt-3 justify-content-center d-flex flex-column text-start">
                            <p class="fullname mb-0">
                                {{ testimonial.attestent?.firstname + ' ' + testimonial.attestent?.lastname }}
                            </p>
                            <p class="role mt-0">
                                {{ testimonial.company?.role}}
                            </p>
                        </div>
                    </div>

                    <!-- middle part of the testimonial card -->
                    <div class="body d-flex align-items-center">
                        <p class="text text-start">
                            {{ testimonial.text }}
                        </p>
                    </div>
                    
                    <!-- bottom part of the testimonial card -->
                    <div class="footer d-flex align-items-center gap-3">
                        <p class="mt-3">{{testimonial.company?.name}}</p>
                        <img :src="testimonial.company?.logo">
                    </div>
                </div>
            </div>

            <!-- show if testimonials are not found -->
            <div v-else class="loader-wrapper mt-5 w-100 d-flex justify-content-center">
                <LoaderComponent/>
            </div>
        </div>
    </section>
</template>

<script>
    import LoaderComponent from '@/components/LoaderComponent.vue';
    export default {
        components: {
            LoaderComponent
        },  
        created() {
            this.$store.dispatch('fetchPortfolioData');   
        },
        computed: {
            testimonials(){
                let data = this.$store.state.portfolioData?.testimonials;
                console.log(data);
                return data
            }
        }
    }
</script>

<style scoped>
    .testimonials {
        padding-top: 9vh;
        min-height: 100%;
    }

    .wrapper {
        position: relative;
    }
    
    .loader-wrapper {
        position: absolute;
    }

    .testimonial {
        height: 350px;
        width: 260px;
        background-color: #fff;
        box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, .4);
        border-radius: 10px;
    }

    .container {
        padding: 0 10rem 5rem 10rem;
    }

    .testimonial .header {
        height: 25%;
    }

    .testimonial .body {
        height: 60%;
    }

    .testimonial .footer {
        height: 15%;
    }

    .header img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        object-fit: cover;
    }

    .fullname {
        margin-top: 2px;
        font-size: 14px;
        font-weight: 600;
    }

    .role {
        font-size: 12px;
        color: rgba(0,0,0,.5)
    }

    .text {
        font-size: 13px;
    }

    .footer img {
        height: 25px;
        width: 25px;
        border-radius: 50%;
    }

    .footer p {
        font-size: 14px;
        color: rgba(0,0,0,.5);
    }
</style>