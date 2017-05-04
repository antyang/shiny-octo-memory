function urlSlug(title) {
  var newTitle = title.split(' ');

  return newTitle.reduce(function(acc, curr) {
    var newCurr = curr.toLowerCase();
    acc.push(newCurr);
    return acc;
  }, []).join('-');
}

console.log(urlSlug('Transform thIs tO Slug CASE'));
