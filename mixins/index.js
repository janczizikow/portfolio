export const hypernate = {
  methods: {
    hypernate(str) {
      if (typeof str === 'string') {
        return str.split(/(?=[A-Z])/).join('-').toLowerCase();
      }
      console.warn('Function hypernate expects String as a parameter!!');
      return null;
    }
  }
};

export const parametize = {
  methods: {
    parametize(str) {
      if (typeof str === 'string') {
        return str.toLowerCase().replace(/\W+/g, '-');
      }
      console.warn('Function parametize expects String as a parameter!!');
      return null;
    }
  }
};