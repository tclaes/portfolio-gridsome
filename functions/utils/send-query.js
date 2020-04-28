const axios = require('axios');

module.exports = async function(query, variables = {}) {
    const result = await axios({
      url: 'https://graphql.fauna.com/graphql',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GRIDSOME_FAUNA_SERVER_SECRET}`,
      },
      data: {
        query,
        variables,
      },
    });
    return result.data;
}