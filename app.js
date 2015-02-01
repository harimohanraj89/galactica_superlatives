var students = [
  {
    name: 'Sam',
    superlative: 'Most Gigs Played During A WDI'
  },
  {
    name: 'Alex',
    superlative: 'Most Devilish'
  },
  {
    name: 'Matt',
    superlative: 'Smallest Carbon Footprint'
  },
  {
    name: 'Lauren',
    superlative: 'Highest Pixel-To-Art Ratio'
  },
  {
    name: 'Luis',
    superlative: 'Most Likely To Survive A Fall Out Of A Window'
  },
  {
    name: 'Sheri',
    superlative: 'Highest Number Of LinkedIn Contacts'
  },
  {
    name: 'Aaron',
    superlative: 'Top Candidate To Take The Fashion Tech Indstry By Storm'
  },
  {
    name: 'Will',
    superlative: 'Swiftest Coder'
  },
  {
    name: 'Caroline',
    superlative: 'Most Seats Used During WDI'
  },
  {
    name: 'Nidhi',
    superlative: 'Maximum Clocked Freelance Hours'
  },
  {
    name: 'Ian',
    superlative: 'Most Diversely Colored Wardrobe'
  },
  {
    name: 'Amanda',
    superlative: 'Most Likely To Run A Marathon The Day After Class'
  },
  {
    name: 'Jamie',
    superlative: 'Tubthumping Award'
  },
  {
    name: 'Emily',
    superlative: 'Highest Question Count At Lunch Panels'
  },
  {
    name: 'David',
    superlative: 'Most Time Spent In Outer Space'
  },
  {
    name: 'Margaret',
    superlative: 'Most Likely To Catch \'Em All'
  },
  {
    name: 'Trish',
    superlative: 'Most College Education Received During A WDI'
  },
  {
    name: 'Ross',
    superlative: 'Best Beard'
  },
  {
    name: 'Mike',
    superlative: 'Most Brahs, Brah'
  },
  {
    name: 'Tony',
    superlative: 'Most Tests Written During WDI'
  },
  {
    name: 'Jackson',
    superlative: 'First In The Lunch Line'
  }
];

var index = -1;

var colors = [
  'steelblue',
  'palevioletred',
  'seagreen',
  'lightsalmon',
  'indianred',
  'teal',
  'mediumpurple',
  'burlywood',
  'lightskyblue'
];

var color;

$(function() {
  console.log('Loaded bro.');
  $(window).on('keypress', function(e) {
    console.log(e.which);
    if (e.which === 13) {
      nextStudent();
    }
    else if (e.which === 98) {
      index = Math.max(index - 1, 0);
      showInfo(students[index].name, students[index].superlative);
    }
  });
});

function nextStudent() {
  index++;
  if (index >= students.length) {
    showInfo("Congratulations from HMH Industries", "You may now start slow clapping");
    $('#image').attr('src', 'images/All.jpg');
  }
  else {
    showInfo(students[index].name, students[index].superlative);
  }
}

function showInfo(name, superlative) {
  var oldColor = color;
  while (oldColor === color) {
    color = colors[Math.floor(Math.random()*colors.length)];
  }
  $('body').css('background', color);
  $('#name').hide().text(name).fadeIn(1000);
  $('#image').hide().attr('src', 'images/' + name + '.jpg').fadeIn(1000);
  $('#superlative').hide().text(superlative);

  setTimeout(function() {
    $('#superlative').fadeIn(1000);
  }, 2000);
}
