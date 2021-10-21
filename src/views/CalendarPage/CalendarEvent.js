import React from 'react';
import PropTypes from 'prop-types'

const CalendarEvent = ({event}) => {
	const {title, desc} = event;
	return (
		<span>
			<strong>{title}</strong>
			{desc ? `: ${desc}` : null}
		</span>
	);
};

CalendarEvent.propTypes = {
  event: PropTypes.object.isRequired,
}

export default CalendarEvent;
