import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Search from '../Components/Search'
import CocktailDetail from '../Components/CocktailDetail'
import Favorites from '../Components/Favorites'
import Test from '../Components/Test'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search'// /!\attention
        }
    },
    CocktailDetail: {
        screen: CocktailDetail
    }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favorites'
    }
  },
  CocktailDetail: {
    screen: CocktailDetail
  }
})

const CocktailTabNavigator = createBottomTabNavigator({
        Test: {
            screen: Test
        },
        Search: {
            screen: SearchStackNavigator,
            navigationOptions: {
                tabBarIcon: () => { // Icon render
                    return <Image
                        source={require('../assets/ic_search.png')}
                        style={styles.icon} // Icon style
                    />
                }
            }
        },
        Favorites: {
            screen: FavoritesStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../assets/ic_favorite.png')}
                        style={styles.icon}
                    />
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#DDDDDD', // ative tab background color
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: false, // hide titles
            showIcon: true // show icons
        }
    }
)

    const styles = StyleSheet.create({
        icon: {
            width: 30,
            height: 30
        }
    })

    export default createAppContainer(CocktailTabNavigator)