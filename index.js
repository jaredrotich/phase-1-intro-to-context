// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  

  let dataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100],
  ];
  function createEmployeeRecords(dataEmployees) {
    return dataEmployees.map(createEmployeeRecord);
  }
  console.log(createEmployeeRecords(dataEmployees));
  
 
  function createTimeInEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(" ");
  
    employee.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour),
    });
  
    return employee;
  }
  let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3]);
  let updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400");
  
  console.log(updatedBpRecord.timeInEvents[0]);
  
  
  function createTimeOutEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(" ");
  
    employee.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour),
    });
  
    return employee;
  }
  bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3]);
  updatedBpRecord = createTimeOutEvent(bpRecord, "2015-02-28 1700");
  
  console.log(updatedBpRecord.timeOutEvents[0]);
  
  
  function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find((event) => event.date === date);
    let timeOut = employee.timeOutEvents.find((event) => event.date === date);
  
    if (timeIn && timeOut) {
      return (timeOut.hour - timeIn.hour) / 100; 
    } else {
      return 0; 
    }
  }
  
  let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000]);
  let updatedBpRecord1 = createTimeInEvent(cRecord, "0044-03-15 0900");
  let updatedBpRecord2 = createTimeOutEvent(cRecord, "0044-03-15 1100");
  
  console.log(hoursWorkedOnDate(cRecord, "0044-03-15"));
  
 
  function wagesEarnedOnDate(employee, date) {
    return hoursWorkedOnDate(employee, date) * employee.payPerHour;
  }
  
  
  function allWagesFor(employee) {
    return employee.timeInEvents.reduce((total, event) => {
      return total + wagesEarnedOnDate(employee, event.date);
    }, 0);
  }
  
  
  function calculatePayroll(employees) {
    return employees.reduce((total, employee) => {
      return total + allWagesFor(employee);
    }, 0);
  }