
css('#terminal { font-size: 90%; }')

configure({
  maxIdle: 1000 / 1.61803398875
, speed: 1.61803398875
, showFrameNumber: true
})

$(function() {
  $('<div>'
  +   '<h1>Thailand Code Jom 2013 - Qualification Round (team irb)</h1>'
  +   '<p>Thai Pangsakulyanont (Thai) / Thiwat Rongsirigul (Thi) / Rungroj Maipradit (Ice)</p>'
  + '</div>'
  ).insertBefore('#container')
})

countdown({
  start: 1359872619000
, end: 1359872619000 + 60 * 60 * 1000
, finish: 1359876210000
})

jump([
  [2, 'parenref']
, [187, 'maxprime']
, [316, 'lightpatterns']
, [1005, 'customers']
, [1265, 'ascdesc']
, [1482, 'turnright']
, [2737, 'secondplace']
, [2825, 'gps']
, [3197, 'leakbucket']
, [3420, 'lineprint']
, [4487, 'mutual']
, [6039, 'elements']
])

annotate([
  [142, '`i` is an alias for `cat > input`']
, [148, '`r` is for running ruby code with my codejom library (tubtim) against the input data']
, [182, 'when I download input data, it is automatically copied to input file']
, [183, 'so I can just run the same command']
, [275, 'thanks to the tubtim library I prepared, this task very straightforward']
, [1583, 'should received a string here. accidentally converted to int']
, [1668, 'shouldn\'t have typed the square brackets...']
, [2172, 'can\'t use `p` because I made a variable named p']
, [2185, 'so I used `puts` instead']
, [2191, 'but later found out that I can still use `p`']
, [2339, 'really frustrating!!']
, [2465, 'took 4 minutes to find this bug']
, [2563, 'found this bug by chance']
, [2593, 'finally found it 5 minutes later']
, [2719, 'thanks to Thi for spotting this']
, [3182, 'thanks to Ice for spotting this']
, [3408, 'thanks to Ice again for spotting this']
, [3435, 'at first I thought this was a knapsack problem']
, [3659, 'but it wasn\'t...']
, [3697, 'this is just a normal dynamic programming problem']
, [3885, 'a memoization pattern']
, [3971, 'i think i\'m drunk right now']
, [5120, 'forgot to add `.keys`']
, [5331, 'complex logic here...']
, [5415, 'debugging that missing `.keys`']
, [5867, 'ahh! just thought of a simpler solution...']
, [5959, '...that leads to the root of the problem!']
, [5966, 'took 5 minutes to find that']
, [6810, 'someone spotted that same reagent can be used!']
, [6815, 'so using a Hash won\'t work']
, [6855, 'damn square brackets again']
, [6925, '14 seconds left... download input']
, [6931, 'FINISHED!!']
])






