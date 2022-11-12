import {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components';
import {DefaultTheme} from '../../shared/theme';

export const withTheme = (component: () => ReactNode) => () => {
    return (
        <ThemeProvider theme={DefaultTheme}>
            {component()}
        </ThemeProvider>
    );
};