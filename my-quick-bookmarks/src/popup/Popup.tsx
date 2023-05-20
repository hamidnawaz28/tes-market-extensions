
import { Box } from '@mui/material';
import { Typography, Divider } from 'antd';
import { useEffect, useState } from 'react';
import Browser from 'webextension-polyfill';
import ReactJson from 'react-json-view'

const { Text, Title } = Typography;

const Popup = () => {
    const [bookmarks, setBookmarks] = useState<any>({})

    const getData = async () => {
        const bookmarks = await Browser.bookmarks.getTree()
        setBookmarks(bookmarks?.[0] || {})
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
                    My quick bookmarks
                </Title>
            </Box>

            <Divider />

            <ReactJson src={bookmarks} displayDataTypes={false} displayObjectSize={false} enableClipboard={false} />
        </Box>
    )
}

export default Popup