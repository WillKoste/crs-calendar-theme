import React from 'react';
import PropTypes from 'prop-types'
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import Card from 'components/Card/Card';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

const CalendarEventData = ({event}) => {
	const {title,  start, end, desc} = event;

	const formatDate = (date) => {
		return new Date(date).toLocaleString('en-US', {dateStyle: 'short', timeStyle: 'short'});
	};

	return (
		<GridContainer>
      <GridItem>
        <Card >
          <CardHeader>
          <h2>{title}</h2>
            {formatDate(start)} - {formatDate(end)}      
          </CardHeader>
          <CardBody>
            <p>{desc}</p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
	);
};

CalendarEventData.propTypes = {
  event: PropTypes.object.isRequired,
}

export default CalendarEventData;
