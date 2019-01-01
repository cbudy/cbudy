import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../components/Login'
import Signup from '../components/Signup'
import Main from "../components/Main";

const AppNavigation = createStackNavigator({
    
    main: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    signUp: {
        screen: Signup,
        navigationOptions: {
            header: null
        }
    },
});

export default createAppContainer(AppNavigation);
