<template>
  <aside class="aside">
    <Profile />
    <div class="aside__content">
      <div class="aside__scroll hide-scrollbar">
        <ProfileInfo />
        <span class="line"></span>
        <Skills />
        <ExtraSkills />
      </div>
    </div>
  </aside>
</template>
<script setup>
import ExtraSkills from "@/components/ExtraSkills.vue";
import Profile from "@/components/Profile.vue";
import ProfileInfo from "@/components/ProfileInfo.vue";
import Skills from "@/components/Skills.vue";
</script>
<style lang="scss">
.aside {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #fafafa;
  padding: 30px 20px;
  overflow-y: auto;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;
  }
  &__scroll {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    padding-right: 10px;
    height: 100%;
    
  }
}
</style>
