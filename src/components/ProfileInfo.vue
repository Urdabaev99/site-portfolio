<template>
    <div class="profile-info">
        <ul class="profile-info__list">
            <li class="profile-info__list-item">
                <span>Возраст:</span>
                <p>25</p>
            </li>
            <li class="profile-info__list-item">
                <span>Адресс:</span>
                <p>Узбекистан, Ташкент</p>
            </li>
            <li class="profile-info__list-item">
                <span>Должность:</span>
                <p>Front-end</p>
            </li>
            <li class="profile-info__list-item">
                <span>Опыт:</span>
                <p>2+ года</p>
            </li>
        </ul>
    </div>
</template>
<script setup>

</script>
<style lang="scss">
.profile-info {
    padding: 25px 0;

    &__list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-item {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                display: inline-block;
                padding: 1px 8px 1px 5px;
                background: #3f83d0;
                color: white;
                border-radius: 2px;
            }

            p {
                font-weight: 300;
                color: #2B2B2B;
                font-size: 15px;
            }
        }
    }
}
</style>