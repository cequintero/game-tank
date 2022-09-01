var socket = io.connect('http://localhost:8080', { 'forceNew': false });

socket.on('messages', function(data){
    console.log(data);
    render(data);
})

function render(data){
    var html = data.map(function(elem, index){
        return(`<div>
                <strong>${elem.author}</strong>:
                <em>${elem.text}</em>
                </div<br/>`);
    }).join(" ");

    
    document.getElementById('messages').innerHTML = html;

}

function addMessage(e) {
    var payload = {
        author: document.getElementById('username').value,
        text: document.getElementById('text').value
    };

    socket.emit('new-message', payload);
    return false;
}
