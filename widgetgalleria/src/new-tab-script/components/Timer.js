import Timer from '@amplication/react-compound-timer'
import { Box } from '@mui/material'
import { Button } from 'antd'
import React from 'react'

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '150px',
  border: '1px solid #f1f1f1',
  borderRadius: '10px',
}
const numberStyles = {
  fontSize: '30px',
}
const textStyles = {
  paddingTop: '30px',
}
const TimerCom = () => {
  return (
    <React.Fragment>
      <Timer initialTime={0} startImmediately={false}>
        {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
          <Box sx={{}}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4,1fr)',
                alignItems: 'end',
                gridGap: '40px',
              }}
            >
              <Box sx={cardStyle}>
                <Box sx={numberStyles}>
                  <Timer.Days />
                </Box>
                <Box sx={textStyles}>Days</Box>
              </Box>
              <Box sx={cardStyle}>
                <Box sx={numberStyles}>
                  <Timer.Hours />
                </Box>
                <Box sx={textStyles}>Hours</Box>
              </Box>
              <Box sx={cardStyle}>
                <Box sx={numberStyles}>
                  <Timer.Minutes />
                </Box>
                <Box sx={textStyles}>Minutes</Box>
              </Box>
              <Box sx={cardStyle}>
                <Box sx={numberStyles}>
                  <Timer.Seconds />
                </Box>
                <Box sx={textStyles}>Seconds</Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gridGap: '5px',
                justifyContent: 'center',
                paddingTop: '20px',
              }}
            >
              <Button onClick={start} type="primary">
                Start
              </Button>
              <Button onClick={pause} type="primary">
                Pause
              </Button>
              <Button onClick={resume} type="primary">
                Resume
              </Button>
              <Button onClick={stop} type="primary">
                Stop
              </Button>
              <Button onClick={reset} type="primary">
                Reset
              </Button>
            </Box>
          </Box>
        )}
      </Timer>
    </React.Fragment>
  )
}

export default TimerCom
