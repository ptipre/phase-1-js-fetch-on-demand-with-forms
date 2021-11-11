const init = () => {

    const form = document.querySelector('form');
    form.addEventListener('submit', e => {

        e.preventDefault();
        let id = e.target.children[1].value;
        
        fetch(`http://localhost:3000/movies/${id}`)
        .then(resp => resp.json())
        .then(data => {

            const title = document.querySelector('h4');
            const summary = document.querySelector('p');

            title.innerText = data.title;
            summary.innerText = data.summary;

            form.reset();

        })
        .catch(error => {
            console.error(error);
            alert('The id you have entered is invalid');
        })
    })

  
}

document.addEventListener('DOMContentLoaded', init);