function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  return $('img:last')
}

/*
  it('lastImageSelector() should return the last image', function() {
    expect(lastImageSelector().length).toBe(1);
    expect(lastImageSelector().attr('src')).toEqual("https://s3.amazonaws.com/after-school-assets/confused.gif");
  });

+ Write a function `lastImageSelector` that does not accept any parameters. The
function should use the last jQuery selector to return the last image in
`index.html`.
*/