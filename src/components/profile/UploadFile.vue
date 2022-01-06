<template >
   <div class="up">
    <div class="container" id="uploadApp">
 
      <!--div v-if="successAlert" class="alert is-primary alert-dismissible">
        <a
          href="#"
          class="close"
          aria-label="close"
          @click="successAlert = false"
          >&times;</a
        >
        {{ successMessage }}
      </div>

      <div v-if="errorAlert" class="alert alert-danger alert-dismissible">
        <a href="#" class="close" aria-label="close" @click="errorAlert = false"
          >&times;</a
        >
        {{ errorMessage }}
      </div-->

      <div class="panel panel-default">
   
        <div class="panel-body">
          <div class="">
            <div class="">
              <div
                class="photo-uploader__wrapper"
                :class="{ 'photo-uploader__wrapper--drag': isDragStarted }"
              >
                <input
                  class="photo-uploader__input"
                  type="file"
                  ref="file"
                  @change="sfile"
                  multiple
                  @dragenter="isDragStarted = true"
                  @dragleave="isDragStarted = false"
                />
                <span v-if="!isDragStarted">
                  <span @click="$refs.file.click()" class="button is-primary">
                    <fa icon="user-secret" /> اختيار صور من الجهاز
                  </span>
                </span>
                <span v-if="isDragStarted" class="">
                  <img
                    src="../../assets/images/upload.svg"
                    class="button is-primary photo-uploader__icon"
                    alt="Загрузите фото"
                  />
               
                </span>
              </div>

              <br />
              <div v-if="photoallsshow" class="imgs">
                <div
                  class="imgs"
                  v-for="(imgss, index) in photoalls"
                  :key="index"
                >
                  <img :src="imgss" alt="fr" />

                  <button
                    @click="deleteImage(photoalls, index)"
                    class="delete"
                  ></button>
                </div>
              </div>

              <br />
              <div v-if="showProgress" class="prog">
                <div class="proga"></div>
                <div
                  v-bind:style="{ width: progress + '%' }"
                  class="progs"
                ></div>
                <div class="numberprogress">{{ progress }}%</div>
              </div>
              <br />
            </div>
            <div class="">
              <button
                type="button"
                @click="uploadImage"
                class="button is-primary"
              >
                Upload Image
              </button>
            </div>
          </div>
          <br />

          <br />
          <div v-html="uploadedImage" align="center"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref , onMounted} from 'vue';
  import { getDatabase , ref as dbRef , push ,set} from "firebase/database";// 
 import { getStorage, ref as seRef , uploadBytes} from "firebase/storage"; //
export default {
    name:'uploadfile',
    setup(){
        const file = ref(null);

         onMounted(() => {
             
         });
           
           const uploaded = () => {
              
           };
 
         return {file,uploaded}
      
    },  data() {
    return {
      isDragStarted: false,
      hide: false,
      file: "",
      successAlert: false,
      errorAlert: false,
      uploadedImage: "",
      successMessage: "",
      errorMessage: "",
      img: "", 
      imagereturn: [],
      imgurl: "",
      progress: 0,
      showProgress:false, 
      files: [],
      users: [],
      isSuccess: false,
      isDanger: false,
      showSuccess: false,
      showDanger: false,
      messagealert: "",
      imageblob: [],
      photoalls: [],
      photoallsshow: false,
      list: 0,
      storage:null,
      database :null,
      databaseReference :null,

    };
  }, mounted(){
         this.storage  = getStorage(); 
         
           
  },
  methods: {
    sfile: function() {
         const database = getDatabase();
       const databaseReference = dbRef(database ,'files');     
     

       this.imageblob = [];
       this.showProgress = false;
    //  this.photoalls = [];

      const photoallss = [];

      this.files = this.$refs.file.files;
      
      for (let i = 0; i < this.files.length; i++) {

        
        photoallss.push(URL.createObjectURL(this.files[i]));

        this.checkIfImageExists(photoallss[i], (exists) => {

          if (exists) {
     
            const size =   this.files[i].size ;
              
            if (size < 8388608) { 

              this.imageblob.push(this.files[i]);
              this.photoalls.push(URL.createObjectURL(this.files[i]));


           
              const spaceRef = seRef(this.storage, "files/" + this.files[i].name ); 
                     uploadBytes(spaceRef,this.files[i]).then((snapshot)=>{
                        alert(snapshot);
                        var newfileRef = push(databaseReference);
                        set(newfileRef ,  {
                               "name" : this.files[i].name ,
                        });
                     });


 
            } else console.error("حجم الصورة كبير");
          } else {
               console.error("Image does not exists.");
               //this.photoalls.push(URL.createObjectURL(this.files[i]));
          }
        });
      }
      
      this.photoallsshow = true;
      this.isDragStarted = false;
    },

    checkIfImageExists: function(url, callback) {

      const img = new Image();

      img.src = url;

      if (img.complete) {
        callback(true);
      } else {
        img.onload = () => {
          callback(true);
        };
        img.onerror = () => {
          callback(false);
        };
      }
    },
    deleteImage: function(img, e) {
      
      img.splice(e, 1);
    },


  },

    
}
</script>


<style lang="scss">
.prog {
  display: block;

  width: 100%;
  height: 10px;
  position: relative;
}
.progs {
  display: block;
  background: #46ccad;
  height: 10px;
  position: absolute;
  top: 0;
}
.proga {
  display: block;
  background: #d6d1d1;
  width: 100%;
  height: 10px;
  position: relative;
  top: 0;
}
.numberprogress {
  position: absolute;
  left: 50%;
  right: 50%;
  font-size: 10px;
  height: 5px;
  top: -2px;
}
.imageUpload {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
}
.imageUpload img {
  width: 100px;
  height: 100px;
  margin: 4px;
  border-radius: 3px;
}
.imgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
  margin: 10px;
}
.imgs img {
  width: 200px;
  height: auto;
}

.photo-uploader {
  &__wrapper {
    position: relative;
    text-align: center;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px dotted #3e8ed0;
    border-radius: 10px;
    color: rgba(#000, 0.5);

    &--drag {
      color: rgba(#fff, 0);
      border-color: #00d1b2;
    }
  }

  &__input {
    cursor: pointer;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0;
  }

  &__photos {
    display: flex;
    margin-top: 20px;
  }

  &__icon {
    opacity: 0.7;
    width: 50px;
  }
}

@media screen and (max-width: 769px) {
  .imgs img {
    width: 100%;
    height: auto;
  }
}
</style>
