
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Divider, Typography } from 'antd';
import { Box, Button } from '@mui/material';
import { setSyncStorage } from '../common/browerMethods';

const { Text, Title } = Typography;

const Popup = () => {

    const [quote, setQuote] = useState("")
    const getData = async () => {
        const response: any = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', { headers: { 'X-Api-Key': 'C5swzmqRIYiU8M6D0ahveg==9OZg4VXvXsJf0Vx6' } })
        setQuote(response?.data?.[0]?.quote || "")
    }

    const generateQuoteHandle = async () => {

        getData()
    }

    const saveQuoteHandle = async () => {
        await setSyncStorage(quote)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Box sx={{ width: '500px', padding: 2 }}>
            <Box
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                    pt: 2,
                    pb: 2,
                }}
            >
                <img src={'logo.png'} alt="" width="200px" />
                <Title>
                    Quote Generator
                </Title>
            </Box>
            <Text>{quote}</Text>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Button onClick={generateQuoteHandle} color='primary' variant='contained'>Generate Quote</Button>
                <Button onClick={saveQuoteHandle} color='primary' variant='contained'>Save Quote</Button>
            </Box>
        </Box>
    )
}

export default Popup