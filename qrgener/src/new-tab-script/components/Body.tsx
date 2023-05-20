import { Box } from '@mui/material';
import { Input } from 'antd';
import {
    useEffect,
    useState
} from 'react';
import Browser from 'webextension-polyfill';
import { getSyncStorage } from '../../common/apis';
import { STATUS_TYPES } from '../../common/constants';
import { QREncode } from '.';
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
                width: '50%', margin: "auto", paddingTop: "80px",

            }]}>
                <QREncode />
            </Box>
        </Box >
    )
}

export default Body

