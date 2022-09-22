<template>
    <!-- navbar -->
    <nav class="navbar fixed-top navbar-expand-lg px-0 py-3">
        <div class="container-xl">
        <!-- Logo -->
        <a class="navbar-brand" href="#">
            <img :src="require('@/assets/logo_180x180.png')" alt="LOGO">
        </a>
        <!-- Navbar toggle -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <!-- Nav -->
            <div class="navbar-nav mx-lg-auto">
            <router-link class="nav-item nav-link" to="/">首頁</router-link> 
            <router-link class="nav-item nav-link active" to="/SearchView">查詢</router-link> 
            <router-link class="nav-item nav-link" to="/MapView">地圖</router-link> 
            <router-link class="nav-item nav-link" to="/AboutView">關於</router-link> 
            </div>
            <!-- Action -->
            <div class="d-flex align-items-lg-center mt-3 mt-lg-0" style="width:180px;">
            <a href="#" class="btn btn-sm btn-light w-full w-lg-auto" style="border:1px solid grey; margin: 5px;">
                Light
            </a>
            <a href="#" class="btn btn-sm btn-dark w-full w-lg-auto" style="color:white;">
                Dark
            </a>
            </div>
        </div>
        </div>
    </nav>
    <!-- end navbar -->

    <!-- content -->
    <div class="main" @scroll="scrolling">
        <router-view/>
    </div>
    <!-- end content -->
    

    <!-- footer -->
    <div class="footer">
        <FooterView></FooterView>
    </div>
    <!-- end footer -->
    
</template>


<script>
/* eslint-disable */
import FooterView from './components/FooterView.vue' 
import { onMounted, onUnmounted} from 'vue'

export default {
    components: {
        FooterView
    },
    setup() {
        /* Nav Scroll */
        onMounted(() => {
            window.addEventListener("scroll", handleScroll)
        })
        onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll)
        })
        const handleScroll = () => {
        console.log(window.pageYOffset);
        }
        /* End Nav Scroll */
        return{
        }
    },
}
</script>

<style lang="css" scoped>
    nav{
        border-bottom: 1px solid grey; 
        background-color: white;
    }
    nav a{
        font-weight: 600;
        color: rgb(92, 92, 92);
    } 
    nav a.active{
        color: rgb(0, 0, 0);
    }
    .navbar-brand img{
        max-width: 180px;
        max-height: 75px;
    }
    .main{
        padding-top: 120px;
    }
</style>
