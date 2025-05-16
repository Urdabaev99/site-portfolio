<template>
  <div class="circle__container">
    <div ref="circle" class="circle"></div>
  </div>
  <div v-if="isMobileView" class="mobile-message">
    Для лучшего опыта просмотра, пожалуйста, откройте сайт на компьютере.
    Мобильная версия временно недоступна.
  </div>
  <div class="page" @mousemove="moveCircle">
    <theAside />
    <router-view v-slot="{ Component }">
      <transition appear @enter="enter" @leave="leave" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <theNav />
  </div>
</template>

<script setup>
import theAside from "@/widgets/theAside.vue";
import theNav from "@/widgets/theNav.vue";
import { ref } from "vue";
import gsap from "gsap";

const isMobileView = ref(window.innerWidth < 1100);

const enter = (el, done) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      onComplete: done,
    }
  );
};

const leave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    y: -100,
    duration: 0.5,
    onComplete: done,
  });
};

const circle = ref(null);

const moveCircle = (event) => {
  const target = event.target;
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  gsap.to(circle.value, {
    x: mouseX - circle.value.offsetWidth / 2,
    y: mouseY - circle.value.offsetHeight / 2,
    duration: 0.3,
    ease: "none",
  });
  const menuItem = target.closest(".hover-link");
  if (menuItem) {
    const rect = menuItem.getBoundingClientRect();

    gsap.to(circle.value, {
      scale: rect.width / 25 + 0.5,
      x: rect.left + rect.width / 2 - circle.value.offsetWidth / 2,
      y: rect.top + rect.height / 2 - circle.value.offsetHeight / 2,
      duration: 0.3,
      ease: "none",
    });
  } else {
    gsap.to(circle.value, {
      scale: 1,
      duration: 0.1,
      ease: "none",
    });
  }
};
</script>

<style lang="scss" scoped>
.page {
  display: grid;
  grid-template-columns: 305px 1fr 108px;
  gap: 30px;
  height: 100%;

  @media (max-width: 1620px) {
    grid-template-columns: 305px 1fr 80px;
  }
}

.circle {
  position: fixed;
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: 1px solid #3f83d0;
  border-radius: 50%;
  z-index: 10;
  pointer-events: none;
}

.target-element {
  width: 200px;
  height: 50px;
  background-color: #3498db;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  border-radius: 5px;
  cursor: pointer;
}

.target-element:hover {
  background-color: #2980b9;
}
.mobile-message {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  text-align: center;
  padding: 20px;
}
</style>
