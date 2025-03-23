import openApiDocs from '@api/open-api-docs';
import dotenv from 'dotenv';
// console.log("🚀 ~ openApiDocs:", openApiDocs.)

// Load environment variables from .env file
dotenv.config();

// Get the API token from environment variables
const apiToken = process.env.GUESTY_API_TOKEN;

if (!apiToken) {
  throw new Error('GUESTY_API_TOKEN is not set in environment variables');
}

// Set up authentication with your Guesty API token
openApiDocs.default.auth(apiToken);

openApiDocs.default.getListings({
//   viewId: 'null',
  q: 'awesome',
//   city: 'null',
//   active: 'true',
//   pmsActive: 'true',
//   integrationId: 'null',
//   listed: 'true',
//   available: '',
//   ignoreFlexibleBlocks: 'false',
//   tags: 'null',
//   fields: 'null',
  sort: 'title',
  limit: '25',
  skip: '0'
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));