<template>
    <div class="container">
            <DataTable v-if="pgData.jobs.length > 0" :data="pgData" />
    </div>
</template>

<script setup>

const pgData = useState('pgData', () => null);

const globalConfig = ref({
    currentGroup: 1,
    pageSize: 14,
    pageNumber: 1,
})
const { $paginate } = useNuxtApp();

const { data: rawData, refresh } = await useFetch('/api/data')

const paginate = (rawData, config) => {
    const { data, nextPage, nextGroup } = $paginate(rawData, config);
    pgData.value = data;
    config.currentGroup = nextGroup;
    config.pageNumber = nextPage;
    setTimeout(paginate, 10000, rawData, config);
}

if (rawData) { 
    paginate(rawData.value, globalConfig.value);  
}

setInterval(() => {
    refresh();
}, 1000 * 60 * 60 * 24); 

</script>