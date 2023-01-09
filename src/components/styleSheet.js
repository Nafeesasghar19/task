import {StyleSheet} from  "react-native"


export const homestyle = StyleSheet.create({
    container:{
        flex:1,
    },
  
})

export const headerSheet = StyleSheet.create({
    container:{
       height:60,
       marginTop:30,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'blue'
    },
    text:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold'
    }
  
})


export const inputFieldstyle = StyleSheet.create({
    container:{
       height:50,
       borderRadius:10,
       margin:10,
       paddingHorizontal:12,
       elevation:3,
       backgroundColor:'#fff'
 
    },

  
})

export const tagsStyle = StyleSheet.create({
    tag:{
        backgroundColor: 'blue',
        marginHorizontal:12,
        // width:200,
        justifyContent:'space-between',
        flexDirection:'row',
        borderRadius: 6, 
        padding: 12 
 
    },
    bgImg:{
        height: 100, width: 100,
        alignItems:'center',
        justifyContent:'center'
    },
    closeIcon:  {
        height: 15,
        tintColor: '#fff',
        marginLeft:12,
        width: 15, resizeMode: 'contain'
    }

  
})

// { padding: 6,
//     margin:4,
//     marginHorizontal:12,
//     borderRadius:6,
//     paddingHorizontal:12, backgroundColor: 'grey' }