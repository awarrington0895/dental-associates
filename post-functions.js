const apiRoot = 'http://dental/api';

function deleteEntry(resource, id) {

    url = apiRoot + '/' + resource + '/delete/' + id;

    let requestInfo = {
        method: 'DELETE',
        headers: new Headers()
    }

    fetch(url, requestInfo)
        .then((response) => response.text())
        .then(function(data) {
            console.log(data);
        });

    
}

