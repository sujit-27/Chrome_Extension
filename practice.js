let myLeads = `["www.ilead.com"]`

myLeads = JSON.parse(myLeads)

myLeads.push("Helloo!")

myLeads = JSON.stringify(myLeads)

console.log(myLeads);
console.log(typeof myLeads);

