var actors = [{
    'character': 'James Tiberius Kirk',
    'actor': 'William Shanter'
}, {
    'character': 'Spock',
    'actor': 'Leonard Nimoy'
}, {
    'character': 'Leonard McCoy',
    'actor': 'DeForest Kelley'
}, ];

function showParam(x) {
    alert(actors[x].actor)
}

function show_actors() {


    var i, actor, span, button;
    for (i in actors) {
        actor = actors[i];

        span = document.createElement('span');
        span.style.color = "#eee";
        span.style.padding = '10px';
        span.style.border = '1px solid #eee';
        span.style.margin = '10px';
        span.innerHTML = actor.character

        button = document.createElement('input');
        button.name = actor.character + '_' + actor.actor;
        button.type = 'button';
        button.value = 'actor?';
        button.id = actor.actor;
        button.onclick = (function(opt) {
            return function() {
                showParam(opt);
            };
        })(i);

        span.appendChild(button);

        document.getElementById('actor_holder').appendChild(span);
    }
}
