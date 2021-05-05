import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

class Form extends Component {
    render() {
        const { list } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.label}>List of Tasks you have:</Text>
                </View>
                <View style={{paddingTop: 10}}>
                    <FlatList
                        data={list}
                        renderItem={({item, index}) => 
                            <Text style={[styles.label, {fontSize: 17, fontWeight: 'normal'}]}>{index+1}. {item.task}</Text>}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        marginHorizontal: '10%',
    },  
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 10
    },
    
});

export default Form;