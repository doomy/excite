# Excite - Simple HTML5 responsive template

Minimalistic and clean. Mobile-ready.

## Demo

You can see the template in action [here](http://showcase.blanktopus.com/excite)

### Usage

Use it as you would any regular html template. Note the following part that affects images cycling in the header part:
 
    <script>
        var slideshow = new Slideshow({
            tickInterval: 5000,
            transitionTime: 500,
            backgroundElementId: "headerBackground"
        });
        slideshow.setImages(['img/slideshow/001.jpg', 'img/slideshow/004.jpg']);
        setTimeout(
            function() {
                slideshow.run()
            }, 5000);
    </script>

The interval and time settings are in miliseconds.

## License
I don't care. Use it at will. It'd be nice to keep the image author credits in the footer, should you decide to keep the default header image. 