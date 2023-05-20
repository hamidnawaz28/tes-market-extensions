import { Add, Delete } from '@mui/icons-material';
import { Dialog, Box, DialogActions, DialogTitle, DialogContent, TextField } from '@mui/material';
import { PlusOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import {
    useEffect,
    useState
} from 'react';
import Browser from 'webextension-polyfill';
import { addSyncData, getSyncStorage, updateSyncData } from '../../common/apis';
import { Button } from 'antd';

const { Search } = Input;

const Body = ({ title }: any) => {
    const [search, setSearch] = useState('')
    const onSearch = () => { if (search != '') Browser.tabs.create({ url: `https://www.bing.com/?=&=&q=${search}&n=` }) };
    const [show, setShow] = useState(false)
    const [label, setLabel] = useState('')
    const [url, setUrl] = useState('')

    const [bookmarks, setBookmarks] = useState<any>([])

    const getData = async () => {
        const bookmarks = await Browser.bookmarks.getTree()
        setBookmarks(bookmarks?.[0] || {})
    }

    const initData = async () => {
        const bookmark = await getSyncStorage()
        setBookmarks(bookmark)
    }


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
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
            <Box sx={{ width: '50%', margin: "auto", paddingTop: "60px" }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'start',
                    paddingBottom: "20px"
                }}>
                    <Button type="primary" icon={<PlusOutlined />} size={'small'} onClick={handleClickOpen} >
                        Add Bookmark
                    </Button>
                </Box>
                <Box sx={{ paddingBottom: '50px' }}>
                    {
                        bookmarks?.map((el: any, id: number) => {
                            return <Box key={id} sx={{
                                display: "grid",
                                gridTemplateColumns: "25% 65% 10%",
                                width: "100%"
                            }}>
                                <Box sx={[{
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }]} onClick={() => Browser.tabs.create({ url: el.url })}>{el.label}</Box>
                                <Box sx={[{
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }]} onClick={() => Browser.tabs.create({ url: el.url })}>{el.url}</Box>
                                <Box onClick={async () => {
                                    await updateSyncData(el)
                                    await initData()
                                }} sx={[{
                                    '&:hover': {
                                        cursor: 'pointer'
                                    },
                                    display: "flex",
                                    justifyContent: "end"
                                }]}>
                                    <Delete color='error' />
                                </Box>
                            </Box>
                        })
                    }
                </Box>

                {/* <ReactJson src={bookmarks} displayDataTypes={false} displayObjectSize={false} enableClipboard={false} /> */}

            </Box>
            <div>

                <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle>
                        Add Bookmarks
                    </DialogTitle>
                    <DialogContent dividers>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gridGap: "21px"
                        }}>

                            <TextField label="Title" variant="filled" value={label} onChange={(e) => setLabel(e.target.value)} />
                            <TextField label="URL" variant="filled" value={url} onChange={(e) => setUrl(e.target.value)} />
                        </Box>
                    </DialogContent>
                    <DialogActions sx={{ padding: "10px 24px" }}>
                        <Button type="primary" size={'middle'} onClick={async () => {
                            await addSyncData({ label, url })
                            await initData()
                            setLabel('')
                            setUrl('')
                            handleClose()
                        }}>
                            Save
                        </Button>

                    </DialogActions>
                </Dialog>
            </div>

        </Box >
    )
}

export default Body

