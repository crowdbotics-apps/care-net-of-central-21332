import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings136513Navigator from '../features/Settings136513/navigator';
import Settings136494Navigator from '../features/Settings136494/navigator';
import Settings136475Navigator from '../features/Settings136475/navigator';
import Settings136456Navigator from '../features/Settings136456/navigator';
import Settings136418Navigator from '../features/Settings136418/navigator';
import BlankScreen1136413Navigator from '../features/BlankScreen1136413/navigator';
import BlankScreen0136412Navigator from '../features/BlankScreen0136412/navigator';
import Settings136397Navigator from '../features/Settings136397/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings136513: { screen: Settings136513Navigator },
Settings136494: { screen: Settings136494Navigator },
Settings136475: { screen: Settings136475Navigator },
Settings136456: { screen: Settings136456Navigator },
Settings136418: { screen: Settings136418Navigator },
BlankScreen1136413: { screen: BlankScreen1136413Navigator },
BlankScreen0136412: { screen: BlankScreen0136412Navigator },
Settings136397: { screen: Settings136397Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
