import { Box } from '@mui/material';
import { Input } from 'antd';
import {
    useEffect,
    useState
} from 'react';
import Calendar from 'react-calendar';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import Browser from 'webextension-polyfill';
import { Timer } from '.';
const { Search } = Input;



const Body = ({ title }: any) => {
    const [search, setSearch] = useState('')
    const onSearch = () => { if (search != '') Browser.tabs.create({ url: `https://www.bing.com/?=&=&q=${search}&n=` }) };

    const [value, onChange] = useState<any>(new Date());
    const [clock, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
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
            <Box sx={{ width: '50%', margin: "auto", paddingTop: "160px" }}>
                <Box>
                    <Timer />
                </Box>
                {/* <Box>
                    <Calendar onChange={onChange} value={value} />
                </Box>
                <Box>
                    <Clock value={clock} />
                </Box> */}
            </Box>
            <div>
            </div>

        </Box >
    )
}

export default Body

