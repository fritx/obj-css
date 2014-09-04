# obj-css

Parse js obj model to css

Roughly an quick inverse of [fritx/css-obj](https://github.com/fritx/css-obj)

## Usage

Source:

```js
[
  [
    '.hidden', {
      'display': 'none'
    }
  ],
  [
    'a:hover, .btn.active', {
      'display': 'block',
      'color': 'yellow'
    }
  ]
]
```

Parsing:

```js
var parseCss = require('obj-css')
parseCss(cssObj, function(err, css){
  console.log(css)
})
```

Outputs:

```css
.hidden {
  display: none;
}
a:hover, .btn.active {
  display: block;
  color: yellow;
}
```