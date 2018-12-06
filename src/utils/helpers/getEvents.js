const TOOL_KIT = {
  getClass: (c) => document.getElementsByClassName(c),
  getByClass: (c) => {
    const ELEMENTS = toolKit.getClass(c);
    return (index) => {
      return (props) => ELEMENTS[index || 0][props];
    }
  },
  getByQuery: (q) => {
    const EL = document.querySelector(q);
    return (prop) => EL[prop];
  }
};

const SITES = () => {
  const sites = {
    'catracaLivre': [
      {
        field: 'period',
        query: '.dia-fixo__periodo',
      }, {
        field: 'day',
        query: '.dia-fixo__dia',
      }, {
        field: 'dayWeeks',
        query: '.dia-fixo__semana',
      }, {
        field: 'hour',
        query: '.dia-fixo__horario',
      }, {
        field: 'local',
        query: '.local__endereco',
      }, {
        field: 'linkMaps',
        query: '.local > a',
      }, {
        field: 'free',
        query: '',
      }, {
        field: 'prices',
        query: 'div[class*="box--footer"] div:first-child'
      }, {
        field: 'Buy',
        query: 'div[class*="box--footer"] div:last-child a'
      }
    ]
  }
}
