import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, Alert, Image, Modal,ImageBackground } from 'react-native';

export default function storyItem({ item, handle_DeleteItem }) {
    const [showModal, setShowModal] = useState(false);
    const Xoa = (id, handle_DeleteItem) => {
        return Alert.alert(
            'Delete', 
            `bạn có muốn xóa ${id} không?`, 
            [
                {
                    text: 'Có',
                    onPress: () => { handle_DeleteItem(id) }
                },
                {
                    text: 'Không',
                    onPress: () => { }
                }
            ],
            { cancleable: false } 
        )
    };
    return (  
        <View style={style.row}>           
            <View>
                <Image style={{ width: 80, height: 80, borderRadius: 50 }}
                source={{ uri: item.avatar }}
                     />
            </View>
            <Text>     </Text>
            <View>
                <Text style={style.textTile} >{`Name: ${item.name}`} </Text>
                <Text style={style.textTile}>{`Thể Loại: ${item.theloai}`}</Text>
                <Text style={style.textTile}>{`Tình trạng:${item.tinhtrang}`}</Text>
                <Text style={style.textTile}>{`Số lượng: ${item.soluong}`}</Text>              
            </View>            
            <View>
                <Modal visible={showModal}>
                <ImageBackground style={style.bg} source={{ uri: 'https://indainam.com/wp-content/uploads/2017/10/mau-background-don-gian-768x480.jpg' }}>
                    <View>
                        <View>
                            <Text style={style.textTile}>{`Số lượng: ${item.soluong}`}</Text>
                            <Text></Text>
                            <Text style={style.textTile}>{`Name: ${item.name}`}</Text>
                            <Text></Text>
                            <Text style={style.textTile}>{`Thể Loại: ${item.theloai}`}</Text>
                            <Text></Text>
                            <Text style={style.textTile}>{`Tình trạng:${item.tinhtrang}`}</Text>
                        </View>
                        <View style={{ width: "70%", margin: 10, backgroundColor: "red",marginLeft:60}}>
                        <Button
                            title='Thoát' onPress={()=>{setShowModal(false)}}
                        /></View>
                    </View>
                    </ImageBackground>
                </Modal>
            </View>
            <Text>          </Text>
            <View>  
                <Button title='Chi tiết' onPress={() => { setShowModal(true) }} /> 
                <Text>           </Text>
                <Button title='Xóa' onPress={() => { Xoa(item.id, handle_DeleteItem) }} color='orange' />
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    bg: {
        width: '100%',
        height: '100%',
        
    },
    textTile: {
        color:'#990099',
        textAlign: 'center',
       

    },
    row: {

        width:500,
        marginLeft:60,
        alignItems: "center",
        flexDirection: 'row',
        padding: 25,
    }
});
