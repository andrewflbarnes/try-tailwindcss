<template>
    <div class="text-left text-base sm:text-4xl whitespace-nowrap font-bold overflow-hidden overflow-ellipsis">
        <span>{{ name }}</span>
    </div>
</template>

<script>
export default {
    name: "NameInfo",
    props: {
        name: { // The name of the user
            type: String,
            required: true,
        },
    }
}
</script>