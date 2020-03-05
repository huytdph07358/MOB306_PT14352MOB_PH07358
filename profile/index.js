import React, { useState } from 'react';
import { Text, View, Modal, Button, StyleSheet, TextInput,ImageBackground } from 'react-native';
import IndexItem from './index-item';
export default function Login() {
    const users = [
    ]
    const [userInfo, setUserInfo] = useState(users);
    const [showModal, setShowModal] = useState(true);

    //khai bao +ham thay doi gia tri cua modal;
    const [addTen, setAddTen] = useState('');
    const [addAge, setAddAge] = useState('');

    const setAdd = () => {
        setAddTen('');
        setAddAge('');
    }
     function Submit() {
         if (addAge == '') {
            alert('Vui lòng nhập tuổi');
        }
        else if (isNaN(addAge)) {
            alert("Vui lòng nhập tuổi bằng số");
        }
        else if (addAge < 18) {
            alert('Tuổi phải lớn hơn 18 tuổi');
         }
           else if (addTen == '') {
            alert('Bạn chưa nhập tên');
        
        } else {
            addInfo();
            setShowModal(false);
        }
    }
    //insert
    const addInfo = () => {
        const newAddInfo = {
            name: addTen,
            age: addAge
        };
        let newAddInfoList = users;
        newAddInfoList.push(newAddInfo);
        users.info = newAddInfoList;

        setUserInfo(users);
        setShowModal(false);
        setAdd();
        console.log(users);
    }
    return (        
        <View style={style.mainContainer}>

            <View>
                {userInfo ? <IndexItem data={users} />:null}
            </View>
            
            <Modal
                visible={showModal}> 
                <ImageBackground style={style.bg} source={{ uri: 'http://image.phimmoi.net/film/6113/poster.medium.jpg' }}>
                <Text style={style.textTile} >Mời Nhập Thông Tin</Text>
                <TextInput
                    value={addTen} onChangeText={(value) => setAddTen(value)} 
                    placeholder="Mời Bạn Nhập Tên"
                    style={{ height: 50,  borderWidth: 1,borderColor:'red',backgroundColor:'white', borderRadius: 10, margin: 20 }} />
                <TextInput
                    value={addAge} onChangeText={(value) => setAddAge(value)} 
                    placeholder='Mời Bạn Nhập Tuổi'
                    style={{ height: 50, borderWidth: 1,borderColor:'red',backgroundColor:'white', borderRadius: 10, margin: 20 }} />
                    <View style={{ width: "70%", margin: 10,borderRadius: 200, backgroundColor: "red",marginLeft:50 }}>
                <Button   title='Đăng nhập' onPress={() => { Submit() }}color='#99CCCC' /></View>
                </ImageBackground>
            </Modal>
            
        </View>

    );
}
const style = StyleSheet.create({
    mainContainer: {},
    bg: {
        width: '100%',
        height: '100%',        
    },
    textTile: {
        color:'#CCFF00',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 100
    }
})