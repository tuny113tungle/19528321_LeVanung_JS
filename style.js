
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    addTask: {
        paddingHorizontal: 30,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        alignItems: 'center',

        
    },
    input: {
        height: 44,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#d8bfd8',
        paddingHorizontal: 20,
        paddingVertical: 10,

    },

    dauCong: {
        width: 50,
        height: 45,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,

    },

    dCText : {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
    }



  
    
})

export default styles;