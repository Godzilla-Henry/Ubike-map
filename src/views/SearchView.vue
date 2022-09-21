<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <Card
                    style="margin: 20px 0px;"
                >
                    <template #title>
                        <div class="title">
                            <h1>
                                選擇
                                <small>請使用選單選擇條件，系統將為您列出所有相關站點.</small>
                            </h1>
                        </div>
                    </template>
                    <template #content>
                        <div class="form row">
                            <div class="col-md-3">
                                <label for="sec">行政區</label>
                                <Dropdown 
                                    id="sec" 
                                    v-model="selectedCity2" 
                                    :options="cities" 
                                    optionLabel="name" 
                                    :editable="true" 
                                    style="width:100%; margin: 10px 0px;"
                                />
                            </div>

                            <div class="col-md-3">
                                <label for="sec">場站</label>
                                <Dropdown 
                                    id="sec" 
                                    v-model="selectedCity2" 
                                    :options="cities" 
                                    optionLabel="name" 
                                    :editable="true" 
                                    style="width:100%; margin: 10px 0px;"
                                />
                            </div>
                        </div>
                    </template>
                    <template #footer>
                        <div style="text-align: right;">
                            <Button 
                                type="button" 
                                label="Search" 
                                @click="load(2)"
                                class="search"
                                :class="{ Searched: isSearched }"
                            >
                                <span class="search-text">
                                    <i class="fa fa-bicycle" aria-hidden="true"></i>
                                    搜尋
                                </span>
                                <i class="fa fa-bicycle searched-text" aria-hidden="true"></i>
                            </Button >
                        </div>
                    </template>
                </Card>
            </div>
            <div class="col-md-12">
                <Card
                    style="margin: 20px 0px;"
                >
                    <template #title>
                        <div class="title">
                            <h1>
                                列表
                                <small>Youbike 2.0</small>
                            </h1>
                        </div>
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

                            <Column field="sno" header="代號" headerStyle="justify-content: center; border-bottom: 3px solid orange; background: rgb(221 248 255); color: #1a79a9;">
                                <template #body="{data}">
                                    <div class="table-center">
                                        {{ data.sno }}
                                    </div>
                                </template>
                            </Column>
                            <Column field="sarea" header="行政區" headerStyle="justify-content: center; border-bottom: 3px solid orange; background: rgb(221 248 255); color: #1a79a9;">
                                <template #body="{data}">
                                    <div class="table-center">
                                        {{ data.sarea }}
                                    </div>
                                </template>
                            </Column>
                            <Column field="sna" header="場站" headerStyle="min-width:200px; justify-content: center; border-bottom: 3px solid orange; background: rgb(221 248 255); color: #1a79a9;">
                                <template #body="{data}">
                                    {{ data.sna.split('_')[1] }}
                                </template>
                            </Column>
                            <Column field="mday" header="更新時間" headerStyle="justify-content: center; border-bottom: 3px solid orange; background: rgb(221 248 255); color: #1a79a9;">
                                <template #body="{data}">
                                    <div class="table-center">
                                        {{ data.mday }}
                                    </div>
                                </template>
                            </Column>
                            <Column field="sbi" header="目前車輛數量" headerStyle="justify-content: center; border-bottom: 3px solid orange; background: rgb(221 248 255); color: #1a79a9;">
                                <template #body="{data}">
                                    <div class="table-center">
                                        <Badge value="0" :severity="color(data.sbi)" size="large">{{ data.sbi }}</Badge>
                                    </div>
                                </template>
                            </Column>
                            <Column field="bemp" header="目前空位數量" headerStyle="justify-content: center; border-bottom: 3px solid orange; background: rgb(221 248 255); color: #1a79a9;">
                                <template #body="{data}">
                                    <div class="table-center">
                                        <Badge value="0" :severity="color(data.bemp)" size="large">{{ data.bemp }}</Badge>
                                    </div>
                                </template>
                            </Column>

                            <Column headerStyle="width: 10rem; justify-content: center; border-bottom: 3px solid orange; background: rgb(221 248 255); color: #1a79a9;" bodyStyle="overflow: visible">
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
        /* Form */
        const selectedCity2 = ref();
        const cities = ref([
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ]);
        /* End Form */
        
        /* Search Btn */
        const isSearched = ref(false);
        const load = (timer) => {
            loading.value = true;
            isSearched.value = true;
            setTimeout(() => {
                loading.value = false;
                isSearched.value = false;
            }, timer * 1000);
        };
        /* End Search Btn */

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
            selectedCity2,
            cities,
            load,
            isSearched,
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

    .title h1 {
        font-size: 28px;
        font-weight: bold;
        color: #6fb93e;
        letter-spacing: .1em;
        line-height: 1.5em;
        padding-bottom: 15px;
        position: relative;
    }

    .title h1 small {
        font-size: 18px;
        font-weight: 600;
        color: #ff897a;
        letter-spacing: .1em;
        line-height: 1.5em;
        padding-bottom: 15px;
        position: relative;
    }

    .title h1:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 10px;
        width: 60px;
        background-color: rgb(255, 228, 161);
    }

    .title h1:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 2px;
        height: 1px;
        width: 95%;
        max-width: 255px;
        background-color: rgb(255, 228, 161);
    }

    .form{
        height: 120px;
        border: 3px solid #98d49b;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        align-items: center;
    }

    label{
        color: rgb(40, 129, 32);
        font-size: 18px;
        font-weight: bold;
    }

    /* Btn animate */
    .search {
        position: relative;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        overflow: hidden;
        user-select: none; 
        background-color: #f59b3e;
        border: none;
    }
    .search:hover {
        background-color: #ff8000 !important;
        padding: 7px 20px;
    }
    .search .searched-text {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: -25%;
        font-size: 2em;
        transform: translate(-50%, -50%);
    }
    .search span.search-text {
        opacity: 1;
    }
    .search.Searched .searched-text {
        animation: bike 2s ease-in-out forwards;
    }
    .search.Searched span.search-text {
        animation: txt 2s ease-in-out forwards;
    }
    @keyframes bike {
        0% {
            left: -50%;
        }
        40%,
        60% {
            left: 50%;
        }
        100% {
            left: 150%;
        }
    }

    @keyframes txt {
        0% {
            opacity: 1;
        }
        20%,
        100% {
            opacity: 0;
        }
    }
    /* End Btn animate */
</style>