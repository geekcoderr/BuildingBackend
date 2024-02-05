const axios=require('axios');


const dataPost={
    title: 'Doraemon',
    body: 'Doracake',
    userId: 1,
    id:1,
}

axios.post('https://jsonplaceholder.typicode.com/posts',dataPost)
.then(response=>{
    console.log(response.data);
})
.catch(error=>{
    console.log('Posting Error : ',error);
})
axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(response=>{
    console.log(response.data);
})
.catch(error=>{
    console.error('Error is : ',error);
})