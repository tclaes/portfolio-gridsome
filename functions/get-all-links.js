const sendQuery = require('./utils/send-query');

const LOAD_ALL_LINKS = `
  query {
    allNavItems {
      data {
        text
      }
    }
  }
`;

exports.handler = async () => {
  const { data } = await sendQuery(LOAD_ALL_LINKS);

    if (errors) {
      return {
        statusCode: 500,
        body: JSON.stringify(errors),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ links: data.allNavItems.data }),
    };
}

