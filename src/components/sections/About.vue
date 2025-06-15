<template>
    <section class="about" id="home" ref="aboutInfoRef">
        <div class="about__title-me">
            <h3>О себе</h3>
        </div>
        <div class="about__bg">
            <div class="about__container">
                <h2 class="about__title">Front-end разработчик</h2>
                <p class="about__text">
                    Специализируюсь на создании современных и анимированных
                    веб-сайтов и приложений с акцентом на эстетику,
                    интерактивность и удобство для пользователя.
                </p>
                <p class="about__text">
                    Имею более двух лет опыта в веб-разработке. За это время я
                    реализовал проекты с использованием анимаций, 3D-элементов и
                    VR-технологий, включая интеграцию с устройствами Oculus и
                    Apple Vision Pro.
                </p>
                <h3 class="about__projects-title">
                    Примеры эксклюзивных сайтов:
                </h3>
                <ul class="about__projects-list">
                    <li>
                        <a href="https://axdigital.ae/" target="_blank"
                            >axdigital.ae</a
                        >
                    </li>
                    <li>
                        <a href="https://keturahreserve.ae" target="_blank"
                            >keturahreserve.ae</a
                        >
                    </li>
                    <li>
                        <a href="https://the-keturah-resort.ae" target="_blank"
                            >the-keturah-resort.ae</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://biltmore-residences-sufouh.ae"
                            target="_blank"
                            >biltmore-residences-sufouh.ae</a
                        >
                    </li>
                    <li>
                        <a href="https://urban-life.ae" target="_blank"
                            >urban-life.ae</a
                        >
                    </li>
                </ul>
                <h3 class="about__projects-title">Проекты с 360° галереями:</h3>
                <ul class="about__projects-list">
                    <li>
                        <a href="https://keturahreserve-vr.ae" target="_blank"
                            >keturahreserve-vr.ae</a
                        >
                    </li>
                    <li>
                        <a href="https://valori-vr.ae" target="_blank"
                            >valori-vr.ae</a
                        >
                    </li>
                </ul>
                <h3 class="about__projects-title">
                    Проекты с VR-погружениями:
                </h3>
                <ul class="about__projects-list">
                    <li>
                        <a href="https://beachfront-vr.ae" target="_blank"
                            >beachfront-vr.ae</a
                        >
                    </li>
                    <li>
                        <a href="https://kreserve360.ae/" target="_blank"
                            >kreserve360.ae</a
                        >
                    </li>
                    <li>
                        <a href="https://kresort360.ae/" target="_blank"
                            >kresort360.ae</a
                        >
                    </li>
                </ul>
                <p class="about__text">
                    Также у меня есть опыт преподавания: я обучал начинающих
                    разработчиков основам HTML, CSS, JavaScript, анимациям с
                    GSAP и адаптивной верстке. Мне нравится делиться знаниями и
                    помогать другим осваивать веб-разработку. Создаю проекты, в
                    которых визуал и технология работают вместе.
                </p>
            </div>
        </div>
    </section>
</template>
<script setup></script>
<style lang="scss">
.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    &__bg {
        background: #fafafa;
        padding: 60px;
    }

    &__title {
        font-size: 36px;
        font-weight: 600;
        color: #2d2d2d;
        margin-bottom: 20px;
        &-me {
            font-size: 32px;
            font-weight: 700;
            color: #2b2b2b;
            margin-bottom: 40px;
            text-align: center;
        }
        span {
            color: #3f83d0;
        }
    }
    &__projects-title {
        font-size: 24px;
        font-weight: 600;
        color: #2d2d2d;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    &__text {
        color: #767676;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    &__desc {
        color: #767676;
        margin-top: 15px;
    }
    li {
        a {
            font-size: 16px;
            color: #3f83d0;
            text-decoration: none;
            transition: color 0.3s ease;

            &:hover {
                color: #1a66b3;
            }
        }
    }
}
</style>
