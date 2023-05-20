import { Box } from '@mui/material'
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
function CalendarApp() {
  const [value, onChange] = useState(new Date())

  return (
    <React.Fragment>
      <Box
        sx={[
          {
            '& .react-calender': {
              width: '100%',
            },
          },
        ]}
      >
        <Calendar onChange={onChange} value={value} />
      </Box>
    </React.Fragment>
  )
}

export default CalendarApp
