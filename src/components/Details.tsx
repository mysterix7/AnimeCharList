import  React,{FunctionComponent, useEffect, useState} from 'react';
import { Text, View ,FlatList , StyleSheet} from 'react-native';

interface Props {
}
const Details: FunctionComponent<Props>= (props:any) => {

    const {anime,character,quote } = props.route.params.item;
    if(!anime || !character || !quote ){
        return null;
    }
return(
    <View style={styles.detailContainer}> 
    <View style={styles.detailHeader}>
    <Text>
        {character}
    </Text>
    </View>
    <View style={styles.detailQuote}>
        <Text style={{marginBottom:10}}>
            Quote of the character
        </Text>
        <Text>
        {quote}
        </Text>
        
    </View>
    </View>
)

}

const styles = StyleSheet.create({
    detailContainer: {
      display:'flex',
      flex:1,
      alignItems:"center",
      alignContent:'center',
      justifyContent:"center",
      borderWidth:1
    },
    detailHeader:{
        flex:1,
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
    },
    detailQuote :{
        flex:2,
        display:"flex",
        alignContent:"center",
        // justifyContent:"center",
        alignItems:"center"
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
export default Details;