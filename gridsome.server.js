const sendQuery = require('./functions/utils/send-query');

const LOAD_ALL_LINKS = `
  query {
    allNavItems {
      data {
        text
      }
    }
  }
`;

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await sendQuery(LOAD_ALL_LINKS);
  
    const collection = actions.addCollection({
      typeName: 'MenuItems'
    })

    for (item of data.allNavItems.data) {
      collection.addNode({
        text: item.text,
      });
    }

  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
