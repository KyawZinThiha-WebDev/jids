<template>
        <tr>
            <td>
                {{ props.item.jobTitle }}
            </td>
            <td class="isCenter" :class="{
                isHigh: props.item.priority >= 1 && props.item.priority <= 3,
                isMedium: props.item.priority >= 4 && props.item.priority <= 7,
                isLow: props.item.priority >= 8,
            }">
                {{ props.item.priority }}
            </td>
            <td class="isCenter" :class="{
                isActive: props.item.status === 'active',
                isDue: props.item.status === 'due',
                isPending: props.item.status === 'on hold'
            }">
                {{ props.item.status }}
            </td>
            <td>
                {{ props.item.assignedTo }}
            </td>
            <td class="isCenter">
                {{
                        formatDate(props.item.dueDate)
                }}
            </td>
        </tr>
</template>

<script setup lang="ts">

const props = defineProps({
    item: {
        type: Object,
        require: true,
    }
});
const formatDate = (date: string) => {
    return new Date(date).toISOString().substring(0, 10);
}
</script>