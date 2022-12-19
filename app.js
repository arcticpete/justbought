import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();

async function getOrder() {
    try {
      const response = await axios({
        method: 'get',
        url: `https://api.bigcommerce.com/stores/${process.env.STORE_HASH}/v2/orders?sort=date_created:desc`,
        headers: {
            'X-Auth-Token': process.env.ACCESS_TOKEN
        }
      });
      const {data} = response
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

getOrder();

// console.log(new Date().getTime())
