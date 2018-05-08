# Gene's Restaurant List - Stuttgart

## Udacity Full Stack Web Developer
## Project 5 - Neighbourhood Map

>by Gene Ting-Chun Kao

### Demo website

https://genekao.github.io/neighbourhood-map/

### About 
This is a single page application featuring a map of listing my favourite restaurants in Stuttgart 
using Google Maps API together with Foursquare API. The application is responsive and 
has a hamburger icon on the top left corner, which expends a menu bar for extra functionality to search
and author's info. You will see street panorama view by clicking the list on the menu bar. 
While clicking the marker on the map, you will see general information provided by 
FourSquare and an extra comment from me. 

### What you need to know to read the code. 
- JavaScript
- HTML
- CSS
- [Bootstrap 4](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
- [jQuery](https://jquery.com/)
- [KnockoutJS](http://knockoutjs.com/)
- [Google Maps API](https://developers.google.com/maps/documentation/)
- [Foursquare API](https://developer.foursquare.com/)

### Code style

For HTML, CSS and JavaScript code style, 
[Udacity Frontend Nanodegree Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
is used. 

### To run the code 

``` shell
$ git clone https://github.com/GeneKao/neighbourhood-map.git
$ cd neighbourhood-map
$ python3 -m http.server #(Or simply opne index.html in a web browser.)
```

After cloning the repo, you will have to insert your own Google Map API key manually 
at the end of [index.html](./index.html).  

``` javascript
<script async defer
    src="https://maps.googleapis.com/maps/api/js?libraries=places,geometry&key=YOUR_KEY_HERE&v=3&callback=initMap">
</script>
```
Replace **YOUR_KEY_HERE** with your own API key.  




