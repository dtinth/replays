
css('#terminal { font-size: 90%; }')

configure({
  maxIdle: 1.61803398875 * 1000
, speed: 1.61803398875
, showFrameNumber: true
})

$(function() {
  $('<div>'
  +   '<h1>Thailand Code Jom 2013 - Final Round (team irb)</h1>'
  +   '<p>Thai Pangsakulyanont (Thai) / Thiwat Rongsirigul (Thi) / Rungroj Maipradit</p>'
  + '</div>'
  ).insertBefore('#container')
})

countdown({
  start: 1360642199000 - 100 * 60 * 1000
, end: 1360642199000
})

jump([
  [1, 'shoryuken']
, [134, 'mrtaxi']
, [310, 'hardlotto']
, [465, 'gmail*']
, [736, 'lightthrough']
, [1254, 'gmail']
, [1361, 'flipnumbers']
, [1738, 'cantenterhouse']
, [2630, 'stars*']
, [3281, 'atm']
, [4289, 'stars*']
, [4498, 'snowtown']
, [4692, 'realprime']
, [5127, 'negthinking*']
, [5803, 'ps']
, [6063, 'crop']
, [6778, 'youtube']
, [8091, 'negthinking*']
, [8413, '1sXk*']
, [9288, 'negthinking']
, [10243, '1sXk']
, [10325, 'codejomerror']
, [11177, 'stars*']
, [11839, 'turn']
])

annotate([
  [1730, 'there is a problem in the test data. Just resubmitting it']
, [3950, 'the algorithm is too slow...']
])







