import React, {useState} from 'react'
import {Calendar, Views, momentLocalizer} from 'react-big-calendar'
import { eventData } from './eventsData'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEvent from './CalendarEvent'
import CalendarEventData from './CalendarEventData'
import moment from 'moment'
const localizer = momentLocalizer(moment)

const CalendarPage = () => {
  const [currentEvent, setCurrentEvent] = useState(null)
  
  return (
    <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12} lg={8}>
      <Calendar
					components={{
						event: CalendarEvent,
						agenda: {
							event: CalendarEvent
						}
					}}
					localizer={localizer}
					events={eventData}
					style={{height: 600}}
					className='calendar'
					startAccessor='start'
					endAccessor='end'
					defaultView={Views.MONTH}
					onSelectEvent={(e) => setCurrentEvent(e)}
					step={60}
				/>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} lg={4}>
      {currentEvent ? <CalendarEventData event={currentEvent} /> : <h3>Click on an event to view more!</h3>}
      </GridItem>
      </GridContainer>
    </div>
  )
}

export default CalendarPage
