const getEmployerRole = (employeeName, employees) => {
  const jobs = Object.values(employees)
    .filter(i => i.name === employeeName)
    .map(x => x.role);
  return jobs.toString();
};

module.exports = getEmployerRole;
