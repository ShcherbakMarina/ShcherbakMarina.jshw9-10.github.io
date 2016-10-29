  function changeCheck(el) {
    var input = el.find('input').eq(0);

    if(input.attr('disabled')) {
      return true;
    }

    if(!input.attr('checked')) {
      el.css('background-position', '0 -17px');
      input.attr('checked', true)
    } else {
      el.css('background-position', '0 0');
      input.attr('checked', false)
    }
    return true;
  };
