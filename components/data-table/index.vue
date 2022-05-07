<template>
    <table>
        <DataTableCols />
        <caption>
            {{ props.data.department }}
        </caption>
        <DataTableTitles />
        <tbody>
            <DataTableList v-for="item in props.data.jobs" :key="item.jobTitle" :item="item" />
        </tbody>
    </table>
</template>

<script setup lang="ts">

const props = defineProps({
    data: {
        type: Object,
        required: true,
    }
});

</script>
