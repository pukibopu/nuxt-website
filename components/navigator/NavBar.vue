<template>
    <div class="flex  border-slate-900  dark:bg-slate-950 bg-slate-100    rounded-t-md">
        <div class="flex items-end justify-end w-full m-1">
            <div class="m-1">

            </div>
            <div class="flex h-full text-center items-center justify-center gap-2">

                <UDropdown :items="items" class="md:hidden">
                    <UButton color="white" trailing-icon="i-heroicons-chevron-down-20-solid" />
                </UDropdown>

                <div class="gap-2 hidden md:flex">
                    <UButton color="gray" class="transition-all" to="/">
                        首页
                    </UButton>
                    <UButton color="gray" class="transition-all" to="/publish">

                        发布文章

                    </UButton>
                    <UButton color="gray" class="transition-all" to="/about">
                        关于
                    </UButton>
                </div>


                <div class="flex flex-row items-center justify-center mr-1  transition-all">
                    <Icon name="material-symbols:sunny-outline" v-show="colorMode.preference === 'light'" size="24"
                        class="theme-icon transition-all text-typography_primary_light dark:text-typography_primary_dark "
                        @click="toggleTheme" />
                    <Icon name="material-symbols:dark-mode-rounded" v-show="colorMode.preference === 'dark'" size="24"
                        class="theme-icon transition-all text-typography_primary_light dark:text-typography_primary_dark "
                        @click="toggleTheme" />
                </div>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">


const colorMode = useColorMode()

const items = [
    [
        {
            label: '首页',
            to: '/'
        }
    ],
    [
        {
            label: '关于',
            to: '/about'
        }
    ],
    [
        {
            label: '发布',
            to: '/publish'
        }
    ]
]

const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};

</script>

<style scoped></style>