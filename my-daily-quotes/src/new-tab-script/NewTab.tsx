import { Box } from '@mui/material'
import { useEffect, useState, } from 'react'
import { Divider, Typography } from 'antd';
import { getSyncStorage } from '../common/browerMethods';
import { getUsersData } from '../firebase';
import parse from 'html-react-parser';

const { Text, Title } = Typography;

const NewTab = () => {

    const [quote, setQuote] = useState<any>("")
    const [fromCloud, setFromCloud] = useState(false)
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        const resp: any = await getUsersData()
        if (resp.fromCloud) {
            setFromCloud(true)
            const savedQuote = resp.quote
            setQuote(parse(savedQuote))
        }
        else {
            const savedQuote = await getSyncStorage()
            setQuote(savedQuote)
        }
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {
                loading ? null : fromCloud ? quote : <Box sx={{ width: '100%', padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Box
                        sx={{
                            display: 'grid',
                            placeItems: 'center',
                            pt: 2,
                            pb: 2,
                        }}
                    >
                        <img src={'logo.png'} alt="" width="300px" />
                    </Box>
                    <Divider />
                    <Text>{quote}</Text>
                </Box>

            }
        </>
    )
}

export default NewTab