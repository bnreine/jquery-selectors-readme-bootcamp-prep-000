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

/*
  it('divSelector() should return two divs', function() {
    expect(divSelector().length).toBe(2);
    expect(divSelector()[0].tagName).toEqual("DIV");
  });

+ Write a function `divSelector` that does not accept any parameters. The function
should use a class selector to return the two divs with the class `pics`.
*/