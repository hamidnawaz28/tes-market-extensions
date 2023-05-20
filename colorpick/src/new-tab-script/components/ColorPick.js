import { Box } from '@mui/material'
import React, { useState } from 'react'
import { HexColorPicker as Picker } from 'react-colorful'
function App() {
  const [color, setColor] = useState('#ea7e7e')
  return (
    <React.Fragment>
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
        }}
      >
        <Picker color={color} onChange={setColor} />
        <Box
          sx={{
            display: 'grid',
            placeContent: 'center',
            color: 'white',
            backgroundColor: color,
            borderRadius: '10px',
          }}
        >
          <Box>{color}</Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default App
