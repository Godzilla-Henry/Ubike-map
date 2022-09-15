<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">

            </div>
            <div class="col-md-12">
                <Card>
                    <template #title>
                        Youbike2.0
                    </template>
                    <template #content>
                        <DataTable 
                            :value="apiDatas"  
                            class="p-datatable-customers" 
                            dataKey="id" 
                            :rows="10" 
                            :rowHover="true"
                            :loading="loading"
                            :paginator="true"
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" 
                            :rowsPerPageOptions="[10,25,50]"
                            currentPageReportTemplate="顯示 {first} 到 {last} 筆資料，共 {totalRecords} 頁"
                            responsiveLayout="scroll"
                            :scrollable="true" 
                            scrollHeight="600px"
                        >
                            <!-- <template #header>
                                <div class="flex justify-content-center align-items-center">
                                    <h5 class="m-0">ApiDatas</h5>
                                </div>
                            </template> -->
                            <template #empty>
                                查無資料
                            </template>
                            <template #loading>
                                資料載入中．．．
                            </template>

                            <Column field="sno" header="代號" headerStyle="justify-content: center;">
                                <template #body="{data}">
                                    <div class="table-center">
                                        {{ data.sno }}
                                    </div>
                                </template>
                            </Column>
                            <Column field="sarea" header="行政區" headerStyle="justify-content: center;">
                                <template #body="{data}">
                                    <div class="table-center">
                                        {{ data.sarea }}
                                    </div>
                                </template>
                            </Column>
                            <Column field="sna" header="場站" headerStyle="min-width:200px; justify-content: center;">
                                <template #body="{data}">
                                    {{ data.sna.split('_')[1] }}
                                </template>
                            </Column>
                            <Column field="mday" header="更新時間" headerStyle="justify-content: center;">
                                <template #body="{data}">
                                    <div class="table-center">
                                        {{ data.mday }}
                                    </div>
                                </template>
                            </Column>
                            <Column field="sbi" header="目前車輛數量" headerStyle="justify-content: center;">
                                <template #body="{data}">
                                    <div class="table-center">
                                        <Badge value="0" :severity="color(data.sbi)" size="large">{{ data.sbi }}</Badge>
                                    </div>
                                </template>
                            </Column>
                            <Column field="bemp" header="目前空位數量" headerStyle="justify-content: center;">
                                <template #body="{data}">
                                    <div class="table-center">
                                        <Badge value="0" :severity="color(data.bemp)" size="large">{{ data.bemp }}</Badge>
                                    </div>
                                </template>
                            </Column>

                            <Column headerStyle="width: 10rem; justify-content: center;" bodyStyle="overflow: visible">
                                <template #header>
                                    資訊
                                </template>
                                <template #body>
                                    <div class="table-center">
                                        <button type="button" class="btn btn-outline-primary">
                                            查看
                                        </button>
                                    </div>
                                </template>
                            </Column>
                        </DataTable>
                    </template>
                </Card>
                
            </div>
        </div>
    </div>
    
</template>

<script>
import { ref } from 'vue';
import axios from 'axios'

export default {
    setup() {
        /* Api */
        const loading = ref(true);
        const apiDatas = ref([]);
        const fetchApi =  async () => {
            await axios.get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
            .then(res => {
                apiDatas.value = res.data;
                loading.value = false;
            })
        }
        fetchApi();
        /* End Api */

        /* NumberColor */
        const color = (count) => {
            if(count >= 10){
                return 'success'
            }else if(count > 5 && count <10){
                return 'warning'
            }else{
                return 'danger'
            }
        };
        /* End NumberColor */

        return{
            apiDatas,
            loading,
            color,
        }
    }
}
</script>  


<style lang="css" scoped>
    .table-center{
        text-align:center;
        width:100%;
    }
</style>