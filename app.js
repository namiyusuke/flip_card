// recommendation
const CardTrigger = document.querySelector(".recommendation-card-trigger");
const CardItem1 = document.querySelector(".features-card.-first");
const CardItem2 = document.querySelector(".features-card.-second");

const CardTranslateX = 37;
const CardTranslateXInit = 30;
const CardTranslateY = 20;
const CardRotate = 4;
const CardOpacity = 0.6;
const CardTl = gsap.timeline({
  scrollTrigger: {
    trigger: CardTrigger,
    start: "center 42%",
    end: "1000px",
    pin: true,
    scrub: 0.8,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});
CardTl.to(CardItem1, {
  translateX: -CardTranslateXInit,
  translateY: 0,
  rotate: "-" + CardRotate + "deg",
  onUpdate: () => {
    if (CardTl.progress() > 0.5) {
      CardItem1.style.zIndex = 0;
      CardItem2.style.zIndex = 1;
    } else {
      CardItem1.style.zIndex = 1;
      CardItem2.style.zIndex = 0;
    }
  },
})
  .to(
    CardItem2,
    {
      translateX: CardTranslateXInit,
      translateY: 0,
      rotate: CardRotate + "deg",
      opacity: 1,
    },
    "<"
  )
  .to(CardItem1, {
    translateX: CardTranslateX,
    translateY: -CardTranslateY,
    rotate: "0deg",
    opacity: CardOpacity,
  })
  .to(CardItem2, { translateX: -CardTranslateX, translateY: CardTranslateY, rotate: "0deg" }, "<");
