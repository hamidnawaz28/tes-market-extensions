import { Header, Footer, Body } from './components';
import { Box } from '@mui/material';
import { APP_NAME, HEADER_LINKS, FOOTER_LINKS } from '../common/constants';


const NewTab = () => {
    return <Box>
        <Body title={APP_NAME} />
    </Box>
}

export default NewTab


