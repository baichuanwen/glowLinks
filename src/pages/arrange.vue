<template>
    <div id="zhengli" class="campaignName_wrap page1 contentitem">
        <campaignTable v-on:event1='TablLsit'></campaignTable>
        <div style="border-bottom: 1px  solid  #ccc;margin-bottom: 10px"></div>
        <div class="tablist">
            <table class="layui-table" lay-even lay-skin="nob">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>名称</th>
                        <th>开始时间</th>
                        <th>点击量</th>
                    </tr>
                </thead>
                <tbody id="spotList">
                    <tr style="background-color: #ff6633;">
                        <td style="padding-bottom:10px;color: white;">新增点位</td>
                        <td style="padding-bottom:0px"><input v-model="spotparams.spotName" class="form-control" id="focusedInput" type="text" placeholder="输入名称"></td>
                        <td style="padding-bottom:7px"><a class="" id="search_btn" @click="addSpot"> OK</a></td>
                        <td style="padding-bottom:0px"></td>
                    </tr>
                    <tr v-if="!spotList.length">
                        <td class="nodata" colspan="4">
                            暂无数据
                        </td>
                    </tr>
                    <tr v-else v-for="item in spotList">
                        <td>{{item.campaignId}}</td>
                        <td>{{item.spotName}}</td>
                        <td>{{item.spotStartTimeStr}}</td>
                        <td>{{item.clickCount}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import campaignTable from "../components/campaignTable"
    import {
        addSpot
    } from "../service/index"
    export default {
        data() {
            return {
              spotList: [],
                spotparams: {
                    campaignId: this.$route.params.id,
                    spotName: ""
                }
            }
        },
       
        components: {
            campaignTable
        },
        watch: {
            '$route' (to, from) {
                this.spotList = [];
                this.spotparams.campaignId = this.$route.params.id
            }
        },
        methods: {
            TablLsit(data) {
                this.spotList = data;
            },
            addSpot() {
                addSpot(this.spotparams).then(res => {
                    this.layerMsg(res.msg)
                })
            }
        },
    }
</script>

