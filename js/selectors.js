function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('#baby-ninja');
}

function divSelector() {
  return $('div.pics');
}

function firstListItem() {
  return $('#pic-list:first-child');
}

/*
  it('firstListItem() should return the first list item in the unordered list', function() {
    expect(firstListItem().length).toBe(1);
    expect(firstListItem()[0].children[0].src).toEqual('https://s3.amazonaws.com/after-school-assets/awesome.jpg');
  });

});

+ Write a function `firstListItem` that does not accept any parameters. The
function should use a first-child selector to return the first list item in the
`ul` with the ID `pic-list`.

*/