import axios from'axios'

axios.get('https://jsonplaceholder.typicode.com/todes/1')
.then((response) => {
    console.log(response.data);
})