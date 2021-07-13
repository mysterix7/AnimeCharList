import  React,{FunctionComponent, useEffect, useState} from 'react';
import { Text, View ,FlatList , StyleSheet,TouchableOpacity,Button} from 'react-native';
import { connect } from 'react-redux';
import { push } from '../../redux/actions/arrayOperations';

interface Props {
}
const History: FunctionComponent<Props>= (props:any) => {

    const historyData:Array<any> = props.arrayReducer.historyData

    const renderNativeItem = (item:any) => {
        const {anime,character,quote } = item    

        return (

             <View style={styles.sectionContainer} key ={quote}> 
                <Text>
                    {character}
                </Text>
             </View> 
        )

    }
    return (
        <View>
           {historyData && 
           <FlatList
            data={historyData}
            renderItem={({item}) => renderNativeItem(item)}
            keyExtractor={(item, index) => item.quote+index}
          />}
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
      height:30,
      display:'flex',
      flex:1,
      alignItems:"center",
      alignContent:'center',
      justifyContent:"center",
      borderWidth:1
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

  const mapStateToProps= (state:any) =>{
    return {
        arrayReducer:state.arrayReducer
    };
}

const mapDispatchToProps = (dispatch:any) => {
	return{
        pushArray : (data:Array<any>) =>{
            dispatch(push(data))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(History);