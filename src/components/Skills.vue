<template>
  <ul class="skills">
    <li class="skills__item" v-for="(items, idx) in skills" :key="idx">
      <div class="skills__list-content">
        <span class="skills__title">{{ items.title }}</span>
        <span class="skills__title">Уровень</span>
      </div>
      <ul class="skills__list">
        <li class="skills__list-item" v-for="(el, i) in items.list" :key="i">
          <span class="skills__name">{{ el.title }}</span>

          <span v-if="el.per" class="skills__per">{{ el.per }}</span>
        </li>
      </ul>
      <div class="line"></div>
    </li>
  </ul>
</template>
<script setup>
const skills = [
  {
    title: "Языки",
    list: [
      {
        title: "Русский",
        per: "Родной",
      },
      {
        title: "Узбекский",
        per: "Разговорный",
      },
      {
        title: "Казахский",
        per: "Разговорный",
      },
    ],
  },
  {
    title: "Хард скиллы",
    list: [
      {
        title: "HTML",
        per: "Продвинутый",
      },
      {
        title: "CSS (SCSS)",
        per: "Продвинутый",
      },
      {
        title: "JS",
        per: "Хороший",
      },
      {
        title: "TS",
        per: "Средний",
      },
      {
        title: "GIT",
        per: "Средний",
      },
      {
        title: "RESTful API",
        per: "Средний",
      },
      {
        title: "React",
        per: "Хороший",
      },
      {
        title: "Mobx",
        per: "Средний",
      },
      {
        title: "Redux",
        per: "Средний",
      },
      {
        title: "VUE",
        per: "Начинающий",
      },
      {
        title: "GSAP",
        per: "Продвинутый",
      },
      {
        title: "THREE.js",
        per: "Средний",
      },
      {
        title: "A-FRAME",
        per: "Средний",
      },
      {
        title: "PANO2VR",
        per: "Продвинутый",
      },
    ],
  },
];
</script>
<style lang="scss">
.skills {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  &__title {
    font-size: 18px;
    font-weight: 600;
  }

  &__list {
    margin: 15px 0 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    &-content {
      display: flex;
      justify-content: space-between;
    }
    &-item {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 6px;
    }
  }

  &__name {
    font-size: 15px;
    color: #767676;
  }

  &__per {
    display: flex;
    justify-content: flex-end;
    color: #767676;
  }

  &__line {
    display: flex;
    width: 100%;
    height: 6px;
    background-color: #f2f2f2;
    border-radius: 4px;
  }

  &__step {
    flex: 1;
    height: 100%;
    background-color: #dcdcdc;
    border-radius: 2px;
    transition: background-color 0.3s ease;
  }

  &__step--active {
    background-color: #3f83d0;
  }
}
</style>
