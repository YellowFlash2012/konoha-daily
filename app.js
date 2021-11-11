const url = 'https://jsonplaceholder.typicode.com/posts'
const grid = document.querySelector('.user-grid');
const users = document.querySelectorAll('.user');
const user_num = document.querySelector('a').value;
const title = document.querySelector('.title');
const body = document.querySelector('.body');


fetch(url)
    .then(res => res.json())
    .then(data => {
        let user_id = data[0].userId;
        let post_title = data[0].title;
        let post_content = data[0].body;


        users.forEach((user) => {
            
            user.addEventListener('click', () => {
                
                if (user_id == user.innerText) {
                    title.innerText = post_title;
                    body.innerText = post_content;
                }
                  
            })
        })
    })

