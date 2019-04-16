export let pop_colors_standings = function(standings) {
  let a_div = standings.slice(0, 32).map(item => {
    item['division'] = 'A';
    item['color'] = '#EE82EE';
    return item;
  });
  let b_div = standings.slice(32, 64).map(item => {
    item['division'] = 'B';
    item['color'] = '#FFA500';
    return item;
  });
  let c_div = standings.slice(64, 96).map(item => {
    item['division'] = 'C';
    item['color'] = '#32CD32';
    return item;
  });
  let x_div = standings.slice(96, standings.length + 1).map(item => {
    item['division'] = 'X';
    item['color'] = '#FFFFFF';
    return item;
  });
  let new_standings = a_div.concat(b_div).concat(c_div).concat(x_div);
  return new_standings;
}

export let pop_colors_stats = function(stats) {
  let a_div = stats.slice(0, 32).map(item => {
    item.points[0]['division'] = 'A';
    item.points[0]['color'] = '#EE82EE';
    return item;
  });
  let b_div = stats.slice(32, 64).map(item => {
    item.points[0]['division'] = 'B';
    item.points[0]['color'] = '#FFA500';
    return item;
  });
  let c_div = stats.slice(64, 96).map(item => {
    item.points[0]['division'] = 'C';
    item.points[0]['color'] = '#32CD32';
    return item;
  });
  let x_div = stats.slice(96, stats.length + 1).map(item => {
    item.points[0]['division'] = 'X';
    item.points[0]['color'] = '#FFFFFF';
    return item;
  });
  let new_stats = a_div.concat(b_div).concat(c_div).concat(x_div);
  return new_stats;
}

export let ordinal_suffix_of = function(i) {
  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
}
