var _ = require('underscore')

module.exports = parseCss

function parseCss(list, cb){
  var err = null
  var blocks = []

  _.each(list, function(item){
    var selector = item[0]
    var attrs = item[1]

    var block = [
      selector + ' {',
      _.reduce(_.pairs(attrs), function(arr, pair){
        arr.push('  ' + pair[0] + ': ' + pair[1] + ';')
        return arr
      }, []).join('\n'),
      '}'
    ].join('\n')
    blocks.push(block)
  })

  var css = blocks.join('\n')
  cb(err, css)
}