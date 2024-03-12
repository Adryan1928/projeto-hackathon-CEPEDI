import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { ReportMap } from '../screens/ReportMap';

type AppTabsParamList = {
  Home: undefined;
  ReportMap: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<AppTabsParamList>();

export default function AppTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ReportMap" component={ReportMap} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
