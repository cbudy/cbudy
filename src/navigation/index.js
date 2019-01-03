import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../components/Login'
import Signup from '../components/Signup'
import Main from "../components/Main";
import  Home from '../components/Home'

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
    home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
});

export default createAppContainer(AppNavigation);
