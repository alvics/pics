import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID f4a0afe280c9c4f35a50adf614cd57434ebca86a60c914dca0d637515d8220cc'
  }
});


