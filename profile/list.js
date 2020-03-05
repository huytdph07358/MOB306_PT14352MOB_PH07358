import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Button, Modal } from 'react-native';
import StoryItem from './list-item';
export default function List() {
    const list =
    {
        info: [
            {                
                avatar: "http://image.phimmoi.net/film/9448/poster.medium.jpg",
                name: "One Piece",
                theloai: "truyện tranh",
                tinhtrang: 'chưa Full',
                soluong: "900 chapter",
                id: "One Piece"
            }, {
                avatar: "http://image.phimmoi.net/film/8022/poster.medium.jpg",
                name: "One Punch Man",
                theloai: "truyện tranh",
                tinhtrang: 'Full',
                soluong: "172 chapter",              
                id: "One Punch Man"
            },
            {                
                avatar: "http://image.phimmoi.net/film/7004/poster.medium.jpg",
                name: "Đấu la đại lục",
                theloai: "truyện tranh", 
                tinhtrang: 'Full',
                soluong: "320 chapter",              
                id: "Đấu la đại lục"
            },
            {               
                avatar: "https://upload.wikimedia.org/wikipedia/vi/3/3e/Detective_conan_cover_1.jpg",
                name: "Connan",
                theloai: "truyện tranh",
                tinhtrang: 'chưa Full',
                soluong: "900 chapter",                
                 id: "Connan"
            },
            {                
                avatar: "http://image.phimmoi.net/film/8892/poster.medium.jpg",
                name: "Dr. Stone",   
                theloai: "truyện tranh",
                tinhtrang: 'Full',
                soluong: "140 chapter",                
                id: "Dr. Stone"
            },
            {               
                avatar: "http://image.phimmoi.net/film/6113/poster.medium.jpg",
                name: "Black Clover ",
                theloai: "truyện tranh",
                tinhtrang: 'chưa Full',
                soluong: "324 chapter",                
                 id: "Black Clover"
            },
            {                
                avatar: "http://image.phimmoi.net/film/8509/poster.medium.jpg",
                name: "LƯỠI ĐAO CỦA QUỶ",
                theloai: "truyện tranh", 
                tinhtrang: 'chưa Full',
                soluong: "196 chapter",              
                id: "LƯỠI ĐAO CỦA QUỶ"
            },

        ]
    };

    const [listStory, setListStory] = useState(true);

    const [dataStory, setDataStory] = useState(list);

    const [showModal, setShowModal] = useState(false);

    const [userInfo, setUserInfo] = useState(false);
    const handle_Delete = (id) => {
        let newStorys = dataStory.info;
        newStorys = newStorys.filter((list) => list.id != id);
        list.info = newStorys;
        console.log(list);
        setDataStory(list)
        setListStory();
    }
   
    return (
        <View style={style.profileContainer}>
           <View> 
            <Text>----------</Text>
            <View style={{ width: "60%", margin: 10,borderRadius: 200, backgroundColor: "red",marginLeft:70 }}>
                <Button title='thoát' onPress={()=>{setUserInfo(false)}}/>
                 </View>
                 
                 <Text>---------</Text>     
                <FlatList
                    data={dataStory.info}
                    renderItem={({ item }) => <StoryItem item={item} handle_DeleteItem={handle_Delete} />}
                    keyExtractor={(item, list) => list}
                /> 
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    profileContainer: { width: 600,marginLeft:100
        },
    avatar: {marginLeft:50},
    image: {
        
        width: 300,
        borderRadius: 100
    }
});