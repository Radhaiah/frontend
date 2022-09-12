import {
  Calendar,
  CalendarBody,
  CalendarHeader,
  CalendarGrid,
  Appointment,
  useCalendar,
} from 'react-hook-calendar';

// Your calendar would probably take these through props in the real world
const appointments = [
  { start: new Date(2022, 3, 21, 12, 0, 0), end: new Date(2022, 3, 21, 14, 30, 0), title: 'Ap. 1' },
  { start: new Date(2022, 3, 25, 10, 0, 0), end: new Date(2022, 3, 25, 17, 15, 0), title: 'Ap. 1' },
];

const MyCalendar=()=> {
  return (
    <Calendar
      view="month"
      timeStart="8:00"
      timeEnd="20:00"
      className="bg-white rounded-md border border-gray-100" // some pseudo tailwind classes
    >
      {/*Our Custom Component defined below*/}
      <TodayButton />
      <CalendarHeader>
        {({ date }) => (
          <div className="flex justify-center items-center">
            <div className="text-2xl">{date.getDate()}</div>
            <div className="text-gray-800">
              {Intl.DateTimeFormat('en-us', { weekday: 'long' }).format(date)}
            </div>
          </div>
        )}
      </CalendarHeader>
      <CalendarBody>
        <CalendarGrid className="border-gray-100 border-t border-l" />
        {appointments.map(appointment => (
          <Appointment
            start={appointment.start}
            end={appointment.end}
            className="bg-blue-500 rounded-md"
          >
            <div className="text-bold text-white">{appointment.title}</div>
          </Appointment>
        ))}
      </CalendarBody>
    </Calendar>
  );
}

// You can use the hooks to build components that interact with the calendar
function TodayButton() {
  const { setDate } = useCalendar();

  return (
    <button className="rounded-md bg-blue-500 text-white" onClick={() => setDate(new Date())}>
      Today
    </button>
  );
}
export default MyCalendar