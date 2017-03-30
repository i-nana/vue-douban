<template>
    <li class="movie-item">
        <a href="javascript:void(0);">
            <div class="movie-poster"
                 :style="'background-image:url(' + data.images.large+ ')'"></div>
            <p class="movie-item-name">{{ data.title }}</p>
            <div class="movie-item-rating" v-if="data.rating">
                <div class="rating-star-bg">
                    <span class="rating-star-on"
                          :style="'width:'+ 10*data.rating.average +'%'"></span>
                </div>
                <span>{{data.rating.average}}</span>
            </div>
        </a>
    </li>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
</script>