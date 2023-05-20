import { Box } from '@mui/material';
import { Input } from 'antd';
import {
    useEffect,
    useState
} from 'react';
import Browser from 'webextension-polyfill';
import { getSyncStorage } from '../../common/apis';
import { STATUS_TYPES } from '../../common/constants';
import { Piano } from '.';
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
                "& .ReactPiano__NoteLabel": {
                    color: "white"
                },
                "& .ReactPiano__Key--natural": {
                    backgroundColor: "teal"
                },
                "& .ReactPiano__Key--natural.ReactPiano__Key--active": {
                    backgroundColor: "#055353"
                },

                "& .ReactPiano__Key--accidental": {
                    backgroundColor: "#ff7600"
                },
                "& .ReactPiano__Key--accidental.ReactPiano__Key--active": {
                    backgroundColor: "#954e12"
                },
            }]}>
                <Piano />
                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', paddingTop: '30px' }}>
                    <Box sx={{ color: 'black' }}>User keyboard or cursor to play.</Box>
                </Box>
            </Box>
        </Box >
    )
}

export default Body

