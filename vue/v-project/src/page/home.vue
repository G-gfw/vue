<template>
	<div>
		<div class="banner">
			<van-swipe :autoplay="3000">
				<van-swipe-item v-for="(image, index) in images" :key="index">
					<img :src="'http://localhost:3000' + image.imgurl">
				</van-swipe-item>
			</van-swipe>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            images: []
        }
    },
	created() {
		this.$http.get("/api/bannerlist").then(res => {
            this.images = res.data.data
		});
	}
};
</script>

<style scoped>
</style>