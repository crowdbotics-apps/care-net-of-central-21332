import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings136418Navigator from '../features/Settings136418/navigator';
import BlankScreen1136413Navigator from '../features/BlankScreen1136413/navigator';
import BlankScreen0136412Navigator from '../features/BlankScreen0136412/navigator';
import Settings136397Navigator from '../features/Settings136397/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
