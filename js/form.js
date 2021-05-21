class Form {
    constructor(){
    }
    display(){
        var title = createElement('h3');
        title.html("Racing Cars ");
        title.position(140,0);

        var input = createInput("write your name here")
        input.position(140,50);

        var button = createButton('play');
        button.position(250,200);

        button.mousePressed(
            function(){
                input.hide();
                button.hide();
                var name = input.value();
                var greeting = createElement('h3');
                greeting.html("Hello" + name)
                greeting.position(140,170);
            }
        )

    }
}
