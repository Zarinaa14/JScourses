// Utils
const baseApiUrl = 'http://localhost:3001';

// Components

//TODO: Make farm and video highlights component related
const Farm = Vue.component('farm', {
  created() {
    this.fetchData()
  },
      
  methods: {
    fetchData() {
      let params = '';
      this.$http.get(`${baseApiUrl}/farms${params}`)
        .then(result => {
          this.farm = result.data;
        })
    }
  },

  data() {
    return {
      farm: {
        cameras: ''
      }
    }
  },

  props: ['farmId'],

  template: `
    <div class="row">
      <div class="col-sm-12">
        <div class="farm-info-text-wrapper mx-auto">
          <h4>{{ farm.name }}</h4></br>
          <span>Камеры установлены: {{ farm.cameras.installation_date }}</span></br>
          <span>Активность: {{ farm.cameras.activity_percentage }}</span></br>
          <span>Органичность продукции: {{ farm.organic_percentage }}</span>
        </div>
      </div>
    </div>`
});

const VideoHighlight = Vue.component('video-highlight', {
  created() {
    this.fetchData()
  },
      
  methods: {
    fetchData() {
      let params = '';
      this.$http.get(`${baseApiUrl}/video-highlights${params}`)
        .then(result => {
            this.video = result.data;
         })
    }
  },

  data() {
    return {
      video: ''
    }
  },

  props:['videoId'],

  template: `
    <div>
      {{ video.title }} ({{ video.duration }})
    </div>
  `
});

const HomeComponent = Vue.component('home-component', {
  // data() {
  //   return 'hello';
  // },
  template: `
    <div>
      <div class="row preorder-row bg-white">
        <div class="col-sm-9 text-center">
          <span class="text-center preorder-row-text">Фермер?</span>
        </div>
        <div class="col-sm-3">
          <div class="mx-auto">
            <button class="btn btn-danger preorder-row-btn">Заказать установку оборудования</button>
          </div>
        </div>
      </div>

      <farm farm-id="rand"></farm>

      <div class="row main-video-highlights bg-white">
        <div class="col-md-8 video-highlight-big bg-light border border-white">
          <video-highlight video-id="rand"></video-highlight>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-sm-12 video-highlight-small bg-light border border-white">
              <video-highlight video-id="rand"></video-highlight>
            </div>
            <div class="col-sm-12 video-highlight-small bg-light border border-white">
              <video-highlight video-id="rand"></video-highlight>
            </div>
          </div>
        </div>
      </div>

      <div class="row bg-white info-block">
        <div class="col-sm-12 text-center">
          <span>Видеоконтроль всех сельскохозяйственных операций</span>
        </div>
      </div>

      <div class="row farms-map-wrapper">
        <div class="col-sm-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37598.00636571453!2d27.4839549!3d53.916190050000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sby!4v1555525064602!5m2!1sen!2sby" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  `
})

// Routes
const routes = [
  { path: '/', component: HomeComponent },
  { path: '/farms', component: Farm }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});


// Main app
const app = new Vue({
  router
}).$mount('#app');
