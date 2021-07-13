import  React,{FunctionComponent, useEffect, useState} from 'react';
import { Text, View ,FlatList , StyleSheet,TouchableOpacity,Button,ActivityIndicator ,ScrollView,TextInput} from 'react-native';
import { connect } from 'react-redux';
import { push } from '../../redux/actions/arrayOperations';

type TProps = any;
const HomeScreen: FunctionComponent<TProps>= (props:any) => {
    const [animeList,setAnimeList] = useState<Array<any>>([]);
    const [masterList,setMasterList] = useState<Array<any>>([]);
    const [loading,setLoading] = useState<Boolean>(false)
    const [page,setPage] = useState(0);
    const [searchText,setSearchText] = useState<string>('')
    const loadDataApi = async () =>{
        setPage(page+1);
        setLoading(true);
        const url = `https://animechan.vercel.app/api/quotes/anime?title=naruto&page=${page}`
        try{
            const response = await fetch(url);
            let  animeListServer = await response.json()
            animeListServer= animeList.concat(animeListServer)
            setAnimeList(animeListServer);
            setMasterList(animeListServer)
            setLoading(false)
        }catch(err){
            setLoading(false)
            console.log("error",err);
        }
    }
    useEffect(()=>{

        loadDataApi();
        
    },[])

    const onPressItem = (item:any) => {
        props.pushToHistoryArray(item)
        props.navigation.navigate('Detail', {item: item})

      }
    const searchFilterFunction = (text:string) => {
      if(text){
        // setSearchText(text)
        const filterArray = animeList.filter(item =>{
          return item.character.includes(text) 
        })
        setAnimeList(filterArray)
      }else{
        setSearchText('')
        setAnimeList(masterList)
      }

    }  
    const onEndReached = async () =>{
              if(!searchText){
                await loadDataApi(); 
              }
               
    }
    function updateSearch (text:string):any {
      setSearchText(text)
    }

    //TODO: implement the search functionality
    // const renderHeader = ()   => {    
    //   return (  
    //     <ScrollView keyboardShouldPersistTaps="always">
    //       <TextInput
    //       placeholder="Search"
    //       onChangeText={(text)=>{updateSearch(text)}}
    //       onEndEditing={() => searchFilterFunction(searchText)}
    //       defaultValue={searchText}     
    //       // autoFocus={true}       
    //             />
    //     </ScrollView>
    //   );  
    // };
    const renderFooter = () => {
      return loading ? (
        <View >
          <ActivityIndicator animating color="#00ff00" size="large" />
        </View>
      ) : null;
    };
    const renderNativeItem = (item:any) => {
        const {anime,character,quote } = item    

        return (
            <TouchableOpacity
                style={styles.sectionContainer}
              onPress={() => onPressItem(item)}
              key={quote}
            >

                <Text>
                  Anime Character name:   {character}
                </Text>

            </TouchableOpacity>
        )

    }
    return (
        <View>
           <Button
            title="History"
            onPress={() => {props.navigation.navigate('History')}}
            />
           <FlatList
            data={animeList}
            renderItem={({item}) => renderNativeItem(item)}
            keyExtractor={(item, index) => item.quote+index}
            // ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
             onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
      height:160,
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
        pushToHistoryArray : (data:Array<any>) =>{
            dispatch(push(data))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);