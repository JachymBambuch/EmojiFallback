# EmojiFallback
## Vanilla JS and jQuery fallback
[Demo](https://jachymbambuch.github.io/EmojiFallback/dist/)
## How to use it:

Link necessary stylesheet in the head tag.
```
<link rel="stylesheet" href="/css/styles.min.css">
```

Load javascript file.
```
<!-- As Vanilla JavaScript -->
<script src="src/js/functions.min.js"></script>

<!-- As jQuery Plugin -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="src/js/functions.jQuery.min.js"></script>
```

Wrap the emoji into the g-emoji tag and specify the fallback image in the fallback-src attribute.
```
<g-emoji class="g-emoji" alias="Laught" fallback-src="images/1f601.png">
```
