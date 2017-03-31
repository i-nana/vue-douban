<template>
    <li class="movie-item">
        <a href="javascript:void(0);">
            <div class="movie-poster"
                 :style="'background-image:url(' + poster+ ')'"></div>
            <p class="movie-item-name">{{ data.title }}</p>
            <div class="movie-item-rating"
                 v-if="rating === true">
                <div v-if="data.rating.stars !== '00'">
                    <div class="rating-star-bg">
                        <span class="rating-star-on"
                              :style="'width:'+ 10*data.rating.average +'%'"></span>
                    </div>
                    <span>{{data.rating.average}}</span>
                </div>
                <span v-else>暂无评分</span>
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
        },
        poster: {
            type: String
        },
        rating : {
            type: Boolean,
            default: false
        }
    }
}
</script>