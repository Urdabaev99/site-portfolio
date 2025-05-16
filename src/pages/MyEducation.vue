<template>
  <div><Store :store="store" isActive="false" /></div>
</template>

<script setup>
import Store from "@/components/sections/Store.vue";
const store = [
  {
    title: "Образование",
    list: [
      {
        place: "РГУ нефти и газа им. И.М. Губкина",
        whom: "Вермя",
        date: "2018г - 2022г",
        sert: "Направление",
        desc: "Бурение и эксплуатация нефтяных и газовых скважин",
      },
      {
        place: "Astrum",
        whom: "Студент",
        date: "Июнь 2022г - Январь 2023г",
        sert: "Сертификат",
        desc: "Курсы Fullstack разработчика",
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
