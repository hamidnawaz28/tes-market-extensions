import { Box } from '@mui/material';
import { Input } from 'antd';
import {
    useEffect,
    useState
} from 'react';
import Browser from 'webextension-polyfill';
import { getSyncStorage } from '../../common/apis';
import { STATUS_TYPES } from '../../common/constants';
import { Calender } from '.';
const { Search } = Input;



const Body = ({ title }: any) => {
    const [search, setSearch] = useState('')
    const onSearch = () => { if (search != '') Browser.tabs.create({ url: `https://www.bing.com/?=&=&q=${search}&n=` }) };


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
            <Box sx={[{
                width: '50%', margin: "auto", paddingTop: "160px",
                '& .react-calender': {
                    width: '100%',
                },
            }]}>
                <Calender />
            </Box>
        </Box >
    )
}

export default Body

