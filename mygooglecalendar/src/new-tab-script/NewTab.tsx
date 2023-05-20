import { Header, Footer, Body } from './components';
import { Box } from '@mui/material';
import { APP_NAME, HEADER_LINKS, FOOTER_LINKS } from '../common/constants';


const NewTab = () => {
    return <Box>
        <Header title={APP_NAME} menues={HEADER_LINKS} />
        <Body title={APP_NAME} />
        <Footer title={APP_NAME} menues={FOOTER_LINKS} />
    </Box>
}

export default NewTab


