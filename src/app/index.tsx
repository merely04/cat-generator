import {withProviders} from './providers';
import GlobalStyles from './styled';
import MainPage from 'pages';

const App = () => {
    return (
        <>
            <GlobalStyles/>

            <MainPage/>
        </>
    );
};

export default withProviders(App);
