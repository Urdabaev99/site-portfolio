<template>
  <div class="extra">
    <span class="extra__title"> Софт скиллы </span>
    <ul class="extra__list" v-for="(item, idx) in extra" :key="idx">
      <li class="extra__list-item">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 12H9V11H11V9H12V11C12 11.2652 11.8946 11.5196 11.7071 11.7071C11.5196 11.8946 11.2652 12 11 12ZM5 7H4V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H7V5H5V7Z"
            fill="#3f83d0"
          />
          <path
            d="M14 4H12V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V11C1 11.2652 1.10536 11.5196 1.29289 11.7071C1.48043 11.8946 1.73478 12 2 12H4V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4ZM14 14H5V12H7V11H5V9H4V11H2V2H11V4H9V5H11V7H12V5H14V14Z"
            fill="#3f83d0"
          />
        </svg>

        <p>{{ item }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
const extra = [
  "Коммуникабельность",
  "Умение работать в команде",
  "Ответственность",
  "Критическое мышление",
  "Гибкость и адаптивность",
  "Умение принимать обратную связь",
  "Навыки самоменеджмента",
  "Способность к обучению и развитию",
  "Инициативность",
  "Эмпатия и уважение к другим мнениям",
];
</script>
<style lang="scss">
.extra {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 25px 0;

  &__title {
    font-size: 18px;
    font-weight: 600;
    color: #2d2d2d;
  }
  &__list {
    // display: flex;
    // flex-direction: column;
    // justify-content: flex-start;
    // align-items: flex-start;
    gap: 5px;

    &-item {
      display: flex;
      gap: 15px;
      p {
        font-size: 15px;
        color: #767676;
      }
    }
  }
}
</style>
