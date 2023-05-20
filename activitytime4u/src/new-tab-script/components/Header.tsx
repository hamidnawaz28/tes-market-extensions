import { Box, Tooltip } from '@mui/material'
import Browser from 'webextension-polyfill'
import { APP_URL } from '../../common/constants'
const Header = ({ title, menues }: any) => {
    return (
        <Box sx={{
            borderBottom: '1px solid #e1e1e1', display: "flex", justifyContent: "left", alignItems: 'center', paddingBottom: '5px', position: "fixed",
            top: 0,
            width: "100%",
        }}>
            <Box sx={[{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gridGap: "10px",
            }]} >
                <img src="logo.png" height={'35px'} alt="" />
                <Box>{title}</Box>
            </Box>

            <Box sx={{
                display: "flex",
                gridGap: "66px",
                padding: "0px 64px"
            }}>
                {
                    menues.map((el: any, id: number) => {
                        return <Tooltip title={`Go to ${el.label}`} key={id}>
                            <Box onClick={() => Browser.tabs.create({ url: el.url })} sx={[{
                                color: "#333",
                                fontSize: "14px",
                                "&:hover": {
                                    cursor: "pointer"
                                }
                            }]}>{el.label}</Box>
                        </Tooltip>
                    })
                }
            </Box>
        </Box >
    )
}

export default Header