import { Box } from '@mui/material';
import { Input } from 'antd';
import {
    useEffect,
    useState
} from 'react';
import Browser from 'webextension-polyfill';
import { getSyncStorage, getLocalStorage, updateLocalData } from '../../common/apis';
import { STATUS_TYPES, STATUS_TIMES } from '../../common/constants';
const { Search } = Input;

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

const Body = ({ title }: any) => {
    const [search, setSearch] = useState('')
    const onSearch = () => { if (search != '') Browser.tabs.create({ url: `https://www.bing.com/?=&=&q=${search}&n=` }) };
    const [time, setTime] = useState(0)
    const [status, setStatus] = useState(STATUS_TYPES.REST)
    const [loading, setLoading] = useState(true)


    const initData = async () => {
        await updateLocalData()
        const data = await getLocalStorage()

        setStatus(data.status)
        const currentTime = new Date().getTime()
        if (data.status == STATUS_TYPES.REST) {
            setTime(STATUS_TIMES.REST - (currentTime - data.time))
        } else {
            setTime(STATUS_TIMES.WORK - (currentTime - data.time))
        }
        setLoading(false)
    }


    useEffect(() => {
        setInterval(initData, 30000)
        initData()
    }, [])

    return (
        <Box>
            <Box sx={{
                display: "flex",
                width: "50%",
                margin: "auto",
                gridGap: "20px",
                paddingTop: "10%",
                alignItems: "baseline"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <img src="logo.png" height={'35px'} alt="" />
                    <Box sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>{title}</Box>
                </Box>
                <Search
                    placeholder="Search"
                    size="large"
                    value={search}
                    enterButton="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    onSearch={onSearch}
                />
            </Box>
            <Box sx={{ width: '50%', margin: "auto", paddingTop: "160px", display: "grid", gridTemplateColumns: "70% 30%", justifyContent: 'space-between' }}>

                <Box sx={cardStyle}>
                    <Box sx={numberStyles}>
                        {Math.ceil(time / (1000 * 60))}
                    </Box>
                    <Box sx={textStyles}>Minutes left to {status == STATUS_TYPES.REST ? "work" : "rest"}</Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: 'right'
                }}>
                    <Box sx={{
                        borderRadius: '50%',
                        color: loading ? 'black' : "white",
                        fontSize: '20',
                        backgroundColor: loading ? "white" : status == STATUS_TYPES.REST ? "#db6e6e" : '#598159',
                        width: "100px",
                        height: "100px",
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: 'center',
                        border: loading ? '1px solid grey' : "none"
                    }}>
                        <Box>
                            {
                                loading ? "Loading" : status == STATUS_TYPES.REST ? "REST" : "WORK"
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
            <div>
            </div>

        </Box >
    )
}

export default Body

