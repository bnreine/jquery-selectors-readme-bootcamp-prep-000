function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('#baby-ninja');
}

/*
  it('ninjaBabySelector() should return the image of the ninja baby', function() {
    expect(ninjaBabySelector().length).toBe(1);
    expect(ninjaBabySelector().attr('src')).toEqual("https://s3.amazonaws.com/after-school-assets/baby-ninja.gif");
  });

+ Write a function `ninjaBabySelector` that does not accept any parameters. The
function should use an ID selector to return the ninja baby image.
*/