<template>
    <el-container>
        <el-header class="mv_header" style="height: 50px">
            <div style="margin-left: 0px" @mousedown="mv_bth">
                <el-radio-group v-model="type">
                    <el-radio-button label="请选择获取MV数量" disabled="true"></el-radio-button>
                    <el-radio-button label="500"></el-radio-button>
                    <el-radio-button label="1000"></el-radio-button>
                    <el-radio-button label="1500"></el-radio-button>
                    <el-radio-button label="5000"></el-radio-button>
                </el-radio-group>
            </div>
        </el-header>
        {{mv_text}}
    </el-container>
</template>

<script>
    import {mapGetters} from "vuex"
    export default {
        name: "checkout",
        data(){
            return{
               type:"0",
                area:"0"
            }
        },
        computed:{
            ...mapGetters([
                "mv_src"
            ]),
            // eslint-disable-next-line vue/return-in-computed-property
            mv_text(){
                // let area=this.area
                if (this.$store.state.mv_src.is){
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.$store.state.mv_src.loading=true
                    // eslint-disable-next-line vue/no-async-in-computed-properties
                    this.$http({
                        url:"/mv/all?limit="+this.type
                    }).then(res=>{
                        this.$store.state.mv_src.is=true
                        this.$store.state.mv_src.arr=[]
                        this.$store.state.mv_src.arr.push(res.data)
                        console.log( this.$store.state.mv_src.arr)
                        setTimeout(()=>{
                            this.$store.state.mv_src.is=false
                        },5000)
                        if (this.$store.state.mv_src.loading){
                            this.$store.state.mv_src.loading=false
                        }

                    })
                }
            }
        },
        methods:{
            mv_bth(){
                this.$store.state.mv_src.is=true
                setTimeout(()=>{
                    this.$store.state.mv_src.is=false
                },100)
            }
        },
        mounted() {
                this.$http({
                    url:"/mv/first?limit=60"
                }).then(res=>{
                    this.$store.state.mv_src.arr.push(res.data)
                    this.$store.state.mv_src.isfist=true
                    if (this.$store.state.mv_src.loading){
                        this.$store.state.mv_src.loading=false
                    }
                })
            }
    }
</script>

<style scoped>

    .mv_header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-content: center;
    }
    .mv_header div{
        background: #f8f8f8;
        border-radius: 10px;
        box-shadow: 0px 0px 0px darkgray;
    }
    .mv_header h3{
        margin-bottom: 10px;
    }
.checkout_bth{
    height: 39px;
    border-radius: 0px 10px 10px 0px;
    position: absolute;
    left: 220px;
    top: 1px;
    outline: none
}




























</style>>