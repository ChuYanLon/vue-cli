<template>
	<div style="width: 100%">
		<el-page-header @back="goBack" content="详情页面">
		</el-page-header>
	<el-table
			:data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
			style="width: 100%">
		<el-table-column  label="头像" width="300px" align="center">
			<template slot-scope="scope">
				<div class="block"><el-avatar :size="80" :src="scope.row.artists[0].img1v1Url"></el-avatar></div>
			</template>
		</el-table-column>
		<el-table-column
				label="ID"
				prop="id"
				width="300"
		>
		</el-table-column>
		<el-table-column
				label="歌曲"
				prop="name"
				width="300"
		>
		</el-table-column>
		<el-table-column
				label="歌手"
				prop="artists[0].name">
		</el-table-column>
		<el-table-column
				>
			<template slot="header" slot-scope="scope">
				<el-input
						v-model="search"
						size="mini"
						:t="scope.row"
						placeholder="输入关键字搜索"/>
			</template>
			<template slot-scope="scope">
				<el-button type="primary" @click="src_bth(scope.row.id)">播放</el-button>
			</template>
		</el-table-column>
	</el-table>
	</div>
</template>

<script>
	import router from "../../router";

	export default {
		data() {
			return {
				tableData: [],
				search: '',
				t:"",
				id:""
			}
		},
		methods: {
			goBack() {
				router.push({
					path: "/home",
					query: {
						t: Date.now()
					}
				})
			},
			src_bth(i){
				this.id=i//把上面传递传来的当前点击的歌曲id设置到this.data.id
				this.$store.state.sre_src.url.is=true //把请求歌曲地址的打开
				this.$store.state.sre_src.url.id=this.id //把当前歌曲id传递到中心数据,然后right_top组件里面的计算属性察觉到//歌曲请求地址已经打开，然后它就开始发送axios请求
				this.$store.state.sre_src.is=true //把请求歌曲详情打开
				setTimeout(()=>{
					this.$store.state.sre_src.is=false   //设定毫秒定时器把，上一层开启的 歌曲请求地址axios 关闭
				},100)
				this.$router.push("/music player")
				console.log(this.id)
			}
		},
		mounted() {
			for (let i=0;i<this.$store.state.sre_src.arr.length;i++){
				this.tableData.push(this.$store.state.sre_src.arr[i])
			}
			console.log(this.tableData)
		}
	}
</script>