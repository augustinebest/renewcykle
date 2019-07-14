    const url = 'http://localhost:4000'
    
    let submitButton = document.getElementById('news_button');
    submitButton.addEventListener('click', function(e) {
        let input = document.getElementById('news_input').value;
        e.preventDefault();
        let payload = {
            email: input
        }
        fetch(`/s/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    })