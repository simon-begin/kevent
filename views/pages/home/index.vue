<template>
    <div class="homepage container container--no-padding">
        <div class="homepage__inner homepage__inner--up grid">
            <inputComponent></inputComponent>
        </div>
        <div class="homepage__inner homepage__inner--down">
            <div class="homepage__more">
                <salesComponent></salesComponent>
                <infosComponent></infosComponent>
            </div>
        </div>
    </div>
</template>

<script>
const inputComponent = require('../../components/home/input.vue').default;
const salesComponent = require('../../components/home/sales.vue').default;
const infosComponent = require('../../components/home/infos.vue').default;

export default {
    components: {
        inputComponent,
        salesComponent,
        infosComponent
    }
};
</script>
