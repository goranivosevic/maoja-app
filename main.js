Vue.component('autocomplete-dropdown', {
    template: '#autocomplete-tpl',
    data() {
      return {
        isOpened: false,
        selected: 0,
        search: ''
      }
    },
    props: {
      options: {
        type: Array,
        required: true
      }
    },
    methods: {
      onInput(value) {
        this.isOpened = !!value //(value != '');
        this.selected = 0;
      },
      select() {
        const selectedOption = this.filteredItems[this.selected]
        this.$emit('select-item', selectedOption);
        this.search = selectedOption.name;
        this.isOpened = false;
      },
      onDown() {
        if (!this.isOpened) {
          return;
        }
        this.selected = (this.selected + 1) % this.filteredItems.length;
      },
      onUp() {
        if (!this.isOpened) {
          return;
        }
  
        this.selected = this.selected - 1 < 0 ?
          this.filteredItems.length - 1 :
          this.selected - 1;
      },
      toggle() {
        this.isOpened = !this.isOpened;
        if (this.isOpened) {
          //this.$refs.dropdown.focus();
        }
      }
    },
    computed: {
      filteredItems() {
        const condition = new RegExp(this.search, 'i')
        return this.options.filter(item => item.name.match(condition))
      }
    }
  })
  
  new Vue({
    data: {
      options: [{
        id: 1,
        name: 'Homer Simpson',
        thumbnail: 'http://lorempixel.com/40/40/people/1'
      }, {
        id: 2,
        name: 'Amancio Ortega',
        thumbnail: 'http://lorempixel.com/40/40/people/2'
      }, {
        id: 3,
        name: 'Peter Parker',
        thumbnail: 'http://lorempixel.com/40/40/people/3'
      }, {
        id: 4,
        name: 'John Cena',
        thumbnail: 'http://lorempixel.com/40/40/4'
      }]
    },
    methods: {
      onOptionSelect(option) {
        console.log(option)
      },
    }
  }).$mount('#app')