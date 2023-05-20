import { Box } from '@mui/material'
import { Button, Input } from 'antd'
import { QRCodeCanvas } from 'qrcode.react'
import React, { useEffect, useState } from 'react'

const { TextArea } = Input

function App() {
  const [inputValue, setInputValue] = useState('https://www.google.com/')
  const [tempVal, setTempVal] = useState('https://www.google.com/')
  const [refreshQr, setRefreshQr] = useState(false)

  const generateQrHandle = () => {
    setRefreshQr(true)
  }

  useEffect(() => {
    if (refreshQr) {
      setInputValue(tempVal)
      setRefreshQr(false)
    }
  }, [refreshQr, tempVal])

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '10px',
          width: '500px',
          margin: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gridGap: '20px', width: '100%' }}>
          <Box>Enter any text or URL to encode</Box>
          <TextArea
            value={tempVal}
            onChange={(e) => setTempVal(e.target.value)}
            placeholder="Enter Here"
            rows={5}
            sx={{ width: '100%' }}
          />
          <Button onClick={generateQrHandle} type="primary" sx={{ width: '100%' }}>
            Generate
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <QRCodeCanvas value={inputValue} />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default App
