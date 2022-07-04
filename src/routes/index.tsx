import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppRoutes from './app.routes';

const Drawer = createDrawerNavigator();

export const screenOptions = {
    headerStyle: {
        backgroundColor: '#06b6d4',
    },
    headerTintColor: '#fff',
};

export default function Routes() {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                {AppRoutes({ Drawer })}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}