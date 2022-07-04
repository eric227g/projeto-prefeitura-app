import { FC } from 'react';
import App from 'pages/home';
import { PropsGroup } from './types';
import Calendar from '../pages/Calendar';
import { Form } from '../pages/Form';

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
    return (
        <Drawer.Group>
            <Drawer.Screen name="home" component={App} />
            <Drawer.Screen name="Calendário" component={Calendar} />
            <Drawer.Screen name="Form" component={Form} />
        </Drawer.Group>
    );
};

export default AppRoutes;