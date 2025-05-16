<template>
  <section class="store">
    <div
      class="store__list"
      :id="'sec-' + idx"
      v-for="(item, idx) in store"
      :key="idx"
    >
      <h3 class="store__title title">{{ item.title }}</h3>
      <div class="store__info" v-for="(info, i) in item.list" :key="i">
        <h4 class="store__info-title">{{ info.place }}</h4>
        <h4 class="store__info-sert">{{ info.sert }}</h4>
        <p class="store__info-whos">
          {{ info.whom }}<span class="store__info-date">{{ info.date }}</span>
        </p>
        <p class="store__info-desc desc">{{ info.desc }}</p>
        <div class="line"></div>
        <div v-if="isActive === 'true'">
          <h4>{{ info.responsibilities.title }}</h4>
          <ul>
            <li
              v-for="(desc, j) in info.responsibilities.desc"
              :key="j"
              class="store__info-desc"
            >
              {{ desc }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { store, isActive } = defineProps(["store", "isActive"]);
</script>
<style lang="scss">
.store {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 70px;
  padding: 70px 0;

  &__title {
    margin-bottom: 40px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  &__info {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    gap: 25px;
    text-align: left;
    background: #fafafa;
    padding: 45px 35px;
    width: 100%;

    @media (max-width: 1620px) {
      grid-template-columns: 3.2fr 2fr;
    }

    &:nth-of-type(n + 2) {
      padding-top: 0;
    }

    &:last-of-type {
      .line {
        display: none;
      }
    }

    &-title,
    &-sert {
      font-size: 18px;
      color: #2b2b2b;
      font-weight: 500;
    }

    &-whos {
      font-size: 15px;
      color: #2b2b2b;
      font-weight: 400;
      display: flex;
      align-items: center;
      gap: 20px;
      height: max-content;
    }

    &-date {
      font-size: 11px;
      font-weight: 400;
      color: #fff;
      padding: 4px 7px;
      background: #3f83d0;
      border-radius: 2px;
      height: max-content;
      white-space: nowrap;
    }

    .line {
      grid-column: span 2;
      margin-top: 20px;
    }
  }

  ul {
    grid-column: span 2; /* Занимает всю ширину */
    padding: 0;
    margin: 20px 0 0;
    list-style: none;

    li {
      font-size: 15px;
      color: #2b2b2b;
      font-weight: 400;
      line-height: 1.6;
      text-align: left;
    }
  }
}
</style>
