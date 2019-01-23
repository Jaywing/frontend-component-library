export default class Slider {
  constructor(el, options) {
    const defaults = {
      type: false,
      slidesToShow: false,
      slidesToShowMd: false
    };

    this.el = el;
    this.settings = Object.assign(defaults, options);
    this.init();
  }

  init() {
    console.log(`${this} has initialised`);
    this.dom = this.cacheDom();

    // Make the slider
    this.makeSlider();
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector;
    }
  }

  cacheDom() {
    return {
      slides: this.el.querySelector(".c-slider__slides"),
      slide: this.el.querySelectorAll(".c-slider__slide"),
      controls: this.el.querySelector(".c-slider__controls"),
      nextButton: this.el.querySelector(".c-slider__next"),
      previousButton: this.el.querySelector(".c-slider__previous"),
      pips: this.el.querySelector(".c-slider__pips")
    };
  }

  makeSlider() {
    let sliderNum = 0;
    let direction = 1;
    let slidesTotal = this.dom.slide.length;

    // Settings: Reactive slider
    if (this.settings.slidesToShow) {
      if (
        this.settings.slidesToShowMd == 4 &&
        window.jwAtomic.modules.Breakpoint.detail.gtSm
      ) {
        slidesTotal = this.dom.slide.length / this.settings.slidesToShowMd;
      } else {
        slidesTotal = this.dom.slide.length / this.settings.slidesToShow;
      }
    }

    for (let i = 0; i < slidesTotal; i++) {
      if (
        slidesTotal > 1 &&
        this.dom.slide[i].classList.contains("is-active")
      ) {
        sliderNum = i;
      }

      // Hero slider height
      if (this.settings.type == "hero") {
        let vheight =
          window.innerHeight -
          document.querySelector(".SiteHeader").offsetHeight;
        vheight = vheight - (vheight * 10) / 100;
        this.dom.slide[i].style.minHeight = `${vheight}px`;
      }

      // Create pips
      if (slidesTotal > 1) {
        if (i == 0) {
          this.dom.pips.innerHTML += `<div class="c-slider__pip is-active"></div>`;
        } else {
          this.dom.pips.innerHTML += `<div class="c-slider__pip"></div>`;
        }
      }
    }

    // Reactive slider setup
    if (this.settings.slidesToShow) {
      for (let i = 0; i < this.dom.slide.length; i++) {
        if (this.settings.slidesToShow == 2) {
          this.dom.slide[i].style.flex = "0 0 50%";
          this.dom.slide[i].style.width = "50%";
        } else {
          this.dom.slide[i].style.flex = "0 0 25%";
          this.dom.slide[i].style.width = "25%";
        }

        if (window.jwAtomic.modules.Breakpoint.detail.gtSm) {
          if (this.settings.slidesToShowMd == 4) {
            this.dom.slide[i].style.flex = "0 0 25%";
            this.dom.slide[i].style.width = "25%";
          }
        }
      }
    }

    if (slidesTotal == 1) {
      this.dom.controls.style.display = "none";
    }

    let slides = Array.from(this.el.querySelector(".c-slider__pips").children);

    const slideForward = () => {
      direction = 1;
      sliderNum += 1;
      if (sliderNum >= slidesTotal) sliderNum = 0;
      this.changeSlide(sliderNum, direction);
    };

    const slideBackward = () => {
      direction = 0;
      sliderNum -= 1;
      if (sliderNum < 0) sliderNum = slidesTotal - 1;
      this.changeSlide(sliderNum, direction);
    };

    const setSlide = event => {
      direction = 1;
      if (!event.target.matches("div.c-slider__pip")) return;
      let slide = event.target;
      let prevSlide = sliderNum;
      sliderNum = slides.indexOf(slide);
      if (prevSlide > sliderNum) {
        direction = 0;
      }

      this.changeSlide(sliderNum, direction);
    };

    this.dom.nextButton.addEventListener("click", slideForward);
    this.dom.previousButton.addEventListener("click", slideBackward);
    this.el
      .querySelector(".c-slider__pips")
      .addEventListener("click", setSlide);
  }

  changeSlide(sliderNum, direction) {
    let slidesTotal = this.dom.slide.length;

    if (!this.settings.slidesToShow) {
      for (let i = 0; i < slidesTotal; i++) {
        this.dom.slide[i].classList.remove(
          "is-active",
          "is-active--next",
          "is-active--previous",
          "is-next",
          "is-previous"
        );
      }

      this.dom.slide[sliderNum].classList.add("is-active");
      if (direction == 1)
        this.dom.slide[sliderNum].classList.add("is-active--next");
      if (direction == 0)
        this.dom.slide[sliderNum].classList.add("is-active--previous");
      if (this.dom.slide[sliderNum].nextElementSibling)
        this.dom.slide[sliderNum].nextElementSibling.classList.add("is-next");
      if (this.dom.slide[sliderNum].previousElementSibling)
        this.dom.slide[sliderNum].previousElementSibling.classList.add(
          "is-previous"
        );
    }

    // Reactive slider
    if (this.settings.slidesToShow) {
      let slideWidth = this.dom.slide[sliderNum].offsetWidth;
      let newSlideWidth = slideWidth * this.settings.slidesToShow;
      if (window.jwAtomic.modules.Breakpoint.detail.gtSm) {
        if (this.settings.slidesToShowMd == 4) {
          newSlideWidth = slideWidth * this.settings.slidesToShowMd;
        }
      }
      let transform = sliderNum * newSlideWidth;
      this.dom.slides.style.transform = `translateX(-${transform}px)`;
    }

    // Set pip
    this.el
      .querySelector(".c-slider__pip.is-active")
      .classList.remove("is-active");
    this.el
      .querySelectorAll(".c-slider__pip")
      [sliderNum].classList.add("is-active");
  }
}
