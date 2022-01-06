<template>
  <div class="container">
    <div class="columns">
      <div class="column is-1">
        <div class="img-zoom-item">
          <img
            v-for="(im, index) in img"
            :key="index"
            @click="shangimg(im.imgs)"
            id="momo"
            :src="im.imgs"
            alt="Girl"
          />
        </div>
      </div>

      <div class="column is-5" @mouseout="clearopacityz">
        <div class="img-zoom-container ">
          <img
            id="momo"
            ref="imgtopz"
            @load="imageZoomz"
            :src="image"
            alt="Girl"
            @mousemove="moveLensz"
            @touchmove="moveLensz"
          />
        </div>
      </div>

      <div class="column is-5">
        <div class="img-zoom-result" ref="resulz"></div>
      </div>

      <div class="column is-1"></div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const img = ref([
      { imgs: require("../assets/blog/blog-1.jpg") },
      { imgs: require("../assets/blog/blog-2.jpg") },
      { imgs: require("../assets/blog/blog-3.jpg") },
      { imgs: require("../assets/blog/blog-4.jpg") },
      { imgs: require("../assets/blog/blog-5.jpg") },
    ]);
    const image = ref(img.value[0].imgs);
    const resultez = ref("");
    const lensz = ref("");
    const imgz = ref("");
    const resultz = ref("");
    const cxz = ref("");
    const cyz = ref("");
    const imgtopz = ref(null);
    const resulz = ref(null);

    const shangimg = (index) => {
      if (image.value != index) {
        lensz.value.style.display = "none";
        image.value = index;
      } else return;
    };

    onMounted(() => {
      // Logs: `imgtopz resulz refs`
      console.log(imgtopz.value.src);
      console.log(resulz.value.textContent);
    });
    const imageZoomz = () => {
      imgz.value = imgtopz.value;
      resultz.value = resulz.value;
      /*create lens:*/
      lensz.value = document.createElement("DIV");
      lensz.value.setAttribute("class", "img-zoom-lens");
      /*insert lens:*/
      imgz.value.parentElement.insertBefore(lensz.value, imgz.value);
      /*calculate the ratio between result DIV and lens:*/
      cxz.value = resultz.value.offsetWidth / lensz.value.offsetWidth;
      cyz.value = resultz.value.offsetHeight / lensz.value.offsetHeight;
      /*set background properties for the result DIV:*/
      resultz.value.style.backgroundImage = "url('" + imgz.value.src + "')";
      resultz.value.style.backgroundSize =
        imgz.value.width * cxz.value +
        "px " +
        imgz.value.height * cyz.value +
        "px";

      lensz.value.addEventListener("mousemove", moveLensz, { passive: true });

      lensz.value.addEventListener("touchmove", moveLensz, { passive: true });
    };
    const moveLensz = (e) => {
      var pos, x, y;

      pos = getCursorPosz(e);
      /*calculate the position of the lens:*/
      x = pos.x - lensz.value.offsetWidth / 2;
      y = pos.y - lensz.value.offsetHeight / 2;
      /*prevent the lens from being positioned outside the image:*/
      if (x > imgz.value.width - lensz.value.offsetWidth) {
        x = imgz.value.width - lensz.value.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > imgz.value.height - lensz.value.offsetHeight) {
        y = imgz.value.height - lensz.value.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      /*set the position of the lens:*/
      lensz.value.style.left = x + "px";
      lensz.value.style.top = y + "px";
      /*display what the lens "sees":*/
      resultz.value.style.opacity = 1;
      resultz.value.style.position = "relative";
      resultz.value.style.backgroundPosition =
        "-" + x * cxz.value + "px -" + y * cyz.value + "px";
    };
    const clearopacityz = () => {
      resultz.value.style.opacity = 0;
      resultz.value.style.position = "absolute";
    };
    const getCursorPosz = (e) => {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = imgz.value.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    };

    //-imageZoom--------imageZoom---------imageZoom--//

    return {
      resultez,
      lensz,
      imgz,
      resultz,
      cxz,
      cyz,
      imgtopz,
      resulz,
      imageZoomz,
      img,
      moveLensz,
      clearopacityz,
      getCursorPosz,
      image,
      shangimg,
    };
  },
};
</script>

<style>
.flex-2-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.item-1-flex {
  flex: 40%;
}
.item-2-flex {
  flex: 60%;
}

.item-12-flex {
  flex: 100%;
}

.product__details__text {
  z-index: 100;
}
.img-zoom-item {
  position: relative;
  overflow: hidden;
}
.img-zoom-item img {
  height: 50px;
  width: 50px;
  display: block;
  border-radius: 50%;
  cursor: pointer;
}

.column {
  position: relative !important ;
}
.img-zoom-container {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 300px;
  display: block;
}
.img-zoom-container img {
  width: 100%;
  height: auto;
}

.img-zoom-lens {
  display: block;
  position: absolute;
  border: 1px solid #d4d4d4;
  /*set the size of the lens:*/
  width: 200px;
  height: 200px;
}
.img-zoom-lens-remove {
  border: 0px;
}

.img-zoom-result {
  position: absolute;
  border: 1px solid #d4d4d4;
  /*set the size of the result div:*/
  width: 100%;
  height: 100%;
  max-block-size: 400px;
  opacity: 0;
  transition: 0.8s ease;
  /*clear: both;*/
  background-repeat: no-repeat;
}

#descreption {
  position: relative;
  z-index: 1000;
}
.img-zoom-container img:hover .img-zoom-result {
  opacity: 1 !important;
}
/*zome mobaile*/

.img-magnifier-container {
  display: none;
  position: relative;
  width: 100%;

  height: 100%;
}
.img-magnifier-container img {
  width: 100%;
  height: 100%;
}

.img-magnifier-glass {
  position: absolute;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  cursor: none;
  /*Set the size of the magnifier glass:*/
  width: 200px;
  height: 200px;
  display: block;
}
.row-img img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #cecece;
  cursor: pointer;
}
.row-img {
  margin-inline-start: 3px;
}
.row {
  position: relative;
}

.active {
  padding: 1em;
  border: 1px solid rgb(9, 160, 67);
}

@media screen and (max-width: 769px) {
  .row {
    display: flex;
  }

  .img-zoom-item img {
    height: 25px;
    width: 25px;
    display: inline-block;
    margin-inline-end: 15px;
  }
  .img-magnifier-container {
    display: block;
  }

  .img-zoom-container {
    display: none;
  }
  .flex-2-item {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
