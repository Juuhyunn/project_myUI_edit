import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { LayOut } from 'features/common';
// 추가
// yarn add @fullcalendar/react
// yarn add @fullcalendar/daygrid
// yarn add @fullcalendar/timegrid
// yarn add @fullcalendar/interaction


const Calendar = () => {
  const events = [
    {
      id: 1,
      title: 'gym',
      start: '2021-11-03T10:00:00',
      end: '2021-11-03T12:00:00',
      color: "#99ccff",
      textColor: "black"
    },
    {
      id: 2,
      title: 'project 완성',
      start: '2021-11-04T13:00:00',
      end: '2021-11-04T18:00:00',
      color: "#b266ff",
      textColor: "black"
    },
    { id: 3, title: 'ㅇㅇ시험 접수 기간', start: '2021-10-31', end: '2021-11-04' },
    {
      id: 4,
      title: '강남역 미팅',
      start: '2021-11-04T09:00:00',
      end: '2021-11-04T11:00:00',
    },
  ];
  
  return (
    <LayOut>
    <div className="App" style={{width:"50%"}}>
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventColor="wheat"
      nowIndicator
      dateClick={(e) => console.log(e.dateStr)}
      eventClick={(e) => console.log(e.event.id)}
    />
  </div>
  </LayOut>
);
}

export default Calendar