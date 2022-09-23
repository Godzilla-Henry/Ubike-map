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
                        <div class="mapContainer" ref="mapContainer"></div>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { onMounted, ref } from "vue";
export default {
    setup(){
        const mapContainer = ref(null);
        onMounted(() => {
            const map = L.map(mapContainer.value, {
                center: [25.038690517211016, 121.56423773818123],
                zoom: 12,
            });

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);
        });

        return{
            mapContainer,
        }
    }
}
</script>

<style lang="css" scoped>
    .mapContainer{
        min-height: 80vh;
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

</style>