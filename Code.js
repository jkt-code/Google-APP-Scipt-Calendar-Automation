function createDayEvent() {
  var calendar = CalendarApp.getDefaultCalendar();
  var today = new Date();
  today.setDate(today.getDate() - 1);

  for (var i = 0; i< 35 ;i++){
    var eventDate = new Date(today);
    eventDate.setDate(today.getDate() + i);

    var dayNumber = i + 1;
    var eventTitle = "Day " + dayNumber;

    calendar.createAllDayEvent(eventTitle, eventDate);   

    if (dayNumber === 7){
      calendar.createAllDayEvent("NewCastle Vaccine 200 dose", eventDate);
    }
    if (dayNumber === 14){
      calendar.createAllDayEvent("Gumboro Vaccine 200 dose", eventDate);
    }
    if(dayNumber === 18){
      calendar.createAllDayEvent("Gumboro Intermediate (plus) 200 dose", eventDate);
    }
    if (dayNumber === 21){
      calendar.createAllDayEvent("Newcastle Infectious Bronchitis 200 dose", eventDate);
    }
  }
  Logger.log("35 days created");
}

function deleteDayEvent(){
 var calendar = CalendarApp.getDefaultCalendar();
 var today = new Date();
 today.setDate(today.getDate() - 1);

 for (var i=0;i<35;i++){
  var eventDate = new Date(today);
  eventDate.setDate(today.getDate() + i);
  var dayNumber = i+1;
  var eventTitle = "Day " + dayNumber;

  var events =calendar.getEventsForDay(eventDate);
  
  for (var j = 0; j < events.length; j++){
    if (events[j].getTitle() === eventTitle){
      events[j].deleteEvent();
    }

  }
 }
  Logger.log("35 days deleted");
}








