const joinNames = namesObj => {
  const names = Object.values(namesObj).map(i => i.name);
  names.splice(names.length - 1, 0, "&");
  return names.join(", ").replace(", &,", " &");
};

module.exports = joinNames;
