<template>
    <n-data-table
        :columns="columns"
        :data="apiData"
        :pagination = "pagination"
    />
</template>


<script>
import { ref  } from 'vue'
import axios from 'axios'
export default {
    setup(){
        /* table */
        const columns = ref([
            {
                title: '代號',
                key: 'sno'
            },
            {
                title: '場站',
                key: 'sna'
            },
            {
                title: '更新時間',
                key: 'mday'
            },
            {
                title: '目前車輛數量',
                key: 'sbi'
            },
            {
                title: '目前空位數量',
                key: 'bemp'
            },
        ]);

        const pagination = ref(true);
        /* end table */


        /* fetch api */
        const apiData = ref([]);
        const fetchApi = async () => {
            axios.get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
            .then(res =>{
                apiData.value = res.data;
            })
        }

        fetchApi();
        /* end fetch api */
        return {
            columns,
            pagination,
            apiData
        }
    }
}
</script>