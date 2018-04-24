import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


const MyStatusBar = ({ backgroundColor, ...props}) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOption: {
      tabBarLabel: 'Deck List'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOption: {
      tabBarLabel: 'New Deck'
    }
  },
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetail: {
    screen: DeckDetail,
  },
  NewQuestion: {
    screen: NewQuestion,
  },
  Quiz: {
    screen: Quiz,
  }
}, {
  headerMode: 'none'
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MyStatusBar backgroundColor={'black'}/>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
