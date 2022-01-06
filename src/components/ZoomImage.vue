<template>
  <div class="container">
    <section class="section">
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

        <div class="column is-5">
          <div class="img-zoom-container " @mouseout="clearopacityz">
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

          <div class="img-magnifier-container ">
            <img
              id="myimage"
              :src="image"
              ref="imgmobaile"
              @load="magnify"
              @mousemove="moveMagnifier"
              @touchmove="moveMagnifier"
            />
          </div>
        </div>

        <div class="column is-5">
          <div class="img-zoom-result" ref="resulz"></div>

          <div class="product__details__text">
            <div class="content">
              <h1>product d_etails rating</h1>
              <div class="block product__details__rating">
                <span class=" has-text-warning">
                  <fa icon="star"></fa>
                </span>
                <span class=" has-text-warning">
                  <fa icon="star"></fa>
                </span>
                <span class=" has-text-warning">
                  <fa icon="star"></fa>
                </span>
                <span class=" has-text-warning">
                  <fa icon="star"></fa>
                </span>
                <span class=" has-text-warning">
                  <fa :icon="['fas', 'star-half']"></fa>
                </span>
                <span> (18 reviews)</span>
              </div>
              <h3>$50.00</h3>

              <div class="block flex-2-item">
                <div class="item-12-flex">
                  <div class="nav">
                    <div>
                      <input type="number" class="input" value="1" min="1" />
                    </div>
                    <div>
                      <a href="#" class="primary-btn">ADD TO CARD</a>
                      <a href="#" class="heart-icon">
                        <fa :icon="['fas', 'heart']"></fa>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="block flex-2-item">
                <div class="item-1-flex">
                  <b>Availability</b>
                </div>
                <div class="item-2-flex">
                  <span>In Stock</span>
                </div>
              </div>
              <div class="block flex-2-item">
                <div class="item-1-flex">
                  <b>Shipping</b>
                </div>
                <div class="item-2-flex">
                  <span>01 day shipping. <samp>Free pickup today</samp></span>
                </div>
              </div>
              <div class="block flex-2-item">
                <div class="item-1-flex">
                  <b>Weight</b>
                </div>
                <div class="item-2-flex">
                  <span>0.5 kg</span>
                </div>
              </div>
              <div class="block flex-2-item">
                <div class="item-1-flex">
                  <b>Share on</b>
                </div>
                <div class="item-2-flex">
                  <span class="icon is-large fa-2x  has-text-info">
                    <fa :icon="['fab', 'twitter']"></fa>
                  </span>
                  <span class="icon is-large fa-2x  has-text-link">
                    <fa :icon="['fab', 'facebook']"></fa>
                  </span>
                  <span class="icon is-large fa-2x  has-text-warning">
                    <fa :icon="['fab', 'instagram']"></fa>
                  </span>
                  <span class="icon is-large    fa-2x  has-text-danger">
                    <fa :icon="['fab', 'pinterest']"></fa>
                  </span>
                </div>
              </div>

              <p>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Proin eget tortor risus.
              </p>
            </div>
          </div>
        </div>

        <div class="column is-1"></div>
      </div>
    </section>
  </div>
</template>
<script>
import { computed, ref, onMounted } from "vue";
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
    const zoom = ref(2);

    const imgmobaile = ref(null);
    const imgmob = ref("");
    const glass = ref("");
    const h = ref("");
    const w = ref("");
    const bw = ref("");
    const wit = ref(screen.width);
    const witW = computed(() => {
      console.log(wit.value);
      return wit.value;
    });

    const shangimg = (index) => {
      if (image.value !== index) {
        image.value = index;
      } else return;
    };

    onMounted(() => {
      witW.value;
    });
    const imageZoomz = () => {
      if (witW.value >= 676) {
        var myobj = document.querySelectorAll(".img-zoom-lens");
        if (myobj.length > 0) {
          myobj[0].remove();
        }

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
      } else return false;
      //
    };
    const moveLensz = (e) => {
      if (witW.value >= 676) {
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
      } else return;
    };
    const clearopacityz = () => {
      if (witW.value >= 676) {
        resultz.value.style.opacity = 0;
        resultz.value.style.position = "absolute";
      } else return;
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

    const magnify = () => {
      var magnifier = document.querySelectorAll(".img-magnifier-glass");
      if (magnifier.length > 0) {
        magnifier[0].remove();
      }

      imgmob.value = imgmobaile.value;
      /*create magnifier glass:*/
      glass.value = document.createElement("DIV");
      glass.value.setAttribute("class", "img-magnifier-glass");
      /*insert magnifier glass.value:*/
      imgmob.value.parentElement.insertBefore(glass.value, imgmob.value);
      //console.log(glass.value);console.log( imgmob.value);
      /*set background properties for the magnifier glass.value:*/
      glass.value.style.backgroundImage = "url('" + imgmob.value.src + "')";
      glass.value.style.backgroundRepeat = "no-repeat";
      glass.value.style.backgroundSize =
        imgmob.value.width * zoom.value +
        "px " +
        imgmob.value.height * zoom.value +
        "px";
      bw.value = 3;
      w.value = glass.value.offsetWidth / 2;
      h.value = glass.value.offsetHeight / 2;
      /*execute a function when someone moves the magnifier glass.value over the image:*/
      glass.value.addEventListener("mousemove", moveMagnifier, {
        passive: true,
      });

      /*and also for touch screens:*/
      glass.value.addEventListener("touchmove", moveMagnifier, {
        passive: true,
      });
    };
    const moveMagnifier = (e) => {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      //e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPoss(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass.value from being positioned outside the image:*/
      if (x > imgmob.value.width - w.value / zoom.value) {
        x = imgmob.value.width - w.value / zoom.value;
      }
      if (x < w.value / zoom.value) {
        x = w.value / zoom.value;
      }
      if (y > imgmob.value.height - h.value / zoom.value) {
        y = imgmob.value.height - h.value / zoom.value;
      }
      if (y < h.value / zoom.value) {
        y = h.value / zoom.value;
      }
      /*set the position of the magnifier glass.value:*/
      glass.value.style.left = x - w.value + "px";
      glass.value.style.top = y - h.value + "px";
      /*display what the magnifier glass.value "sees":*/
      glass.value.style.backgroundPosition =
        "-" +
        (x * zoom.value - w.value + bw.value) +
        "px -" +
        (y * zoom.value - h.value + bw.value) +
        "px";
    };
    const getCursorPoss = (e) => {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = imgmob.value.getBoundingClientRect();
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
      zoom,
      imgmob,
      glass,
      h,
      w,
      bw,
      magnify,
      moveMagnifier,
      getCursorPoss,
      imgmobaile,
      witW,
      wit,
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
  border: 4px solid #e3e3e3;
  border-radius: 5px;
  cursor: none;
  /*Set the size of the magnifier glass:*/
  display: block;
  width: 200px !important;
  height: 200px !important;
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
  .img-magnifier-glass {
    width: 280px !important;
    height: 280px !important;
  }
}

/*-------- */
@media only screen and (min-width: 467px) and (max-width: 769px) {
  .img-magnifier-glass {
    width: 200px !important;
    height: 200px !important;
  }
}
@media only screen and (max-width: 467px) {
  .img-magnifier-glass {
    width: 150px !important;
    height: 150px !important;
  }
}
</style>
