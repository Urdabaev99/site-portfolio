<template>
    <div class="profile">
        <div class="profile__img"><img src="../assets/img/profile.webp" alt=""></div>
        <div class="profile__name">Урдабаев Улугбек</div>
        <div class="profile__prof">Front-end Developer</div>
        <Socials />
        <span class="line"></span>
    </div>
</template>
<script setup>
import Socials from './Socials.vue';

</script>
<style lang="scss">
.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5px;
    position: sticky;
    top: 0;
    background: #FAFAFA;

    &__name {
        font-size: 18px;
        font-weight: 600;
        margin-top: 15px;
    }

    &__prof {
        font-size: 15px;
        color: #767676;
    }

    &__img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>