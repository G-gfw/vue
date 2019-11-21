<template>
	<div>
		<van-nav-bar title="注册" left-arrow/>
		<div class="main">
			<van-cell-group>
				<van-field v-model="uname" clearable label="用户名" placeholder="请输入用户名"/>

				<van-field v-model="upass" type="password" label="密码" placeholder="请输入密码"/>
			</van-cell-group>
			<van-button type="primary" size="large" @click="register">注册</van-button>
		</div>
	</div>
</template>

<script>
export default {
    data() {
		return {
			uname: "",
			upass: ""
		};
    },
    methods: {
        register() {
            if (!this.uname || !this.upass) {
                return false;
            }
            this.$http.post('/api/memberadd', {
                username: this.uname,
                password: this.upass
            }).then(res => {
                console.log(res)
                if (res.data.status == 1) {
                    this.$router.push('/login')
                }
            })
        }
    },
};
</script>

<style scoped>
</style>