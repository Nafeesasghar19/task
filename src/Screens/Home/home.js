import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import { homestyle, tagsStyle } from '../../components/styleSheet'
import TextInp from '../../components/TextInput/textInput'
import { Setdata } from '../../redux/actions/useraction/Index'
import { useSelector, useDispatch } from 'react-redux'
import Videos from '../../components/VideoImages/Videos'
const home = ({ navigation }) => {
    const { saveddata } = useSelector(({ _dataReducer }) => _dataReducer);
    const dispatch = useDispatch()
    const [userData, setuserData] = useState("")
    const [data, setdata] = useState([])
    const [resultantData, setresultantData] = useState("")
    const [vidHandle, setvideHandle] = useState(false)

    const _FetchData = (srt) => {
        fetch(`https://api.pexels.com/videos/search?query=${srt}&per_page=1`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: '563492ad6f91700001000001ba2d72cd6b6f47b7bf913724813c22e8',
            },
        }).then(response => response.json())
            .then(json => {
                console.log("jsonnnnn", json)
                if (saveddata == null) {
                    let arr = []
                    arr.push({
                        id: 1,
                        typ: userData,
                        typlist: json.videos[0].video_pictures

                    })
                    Setdata(arr)(dispatch)
                    setuserData("")
                } else {
                    let arr2 = [...saveddata]
                    arr2.push({
                        id: arr2.length + 1,
                        typ: userData,
                        typlist: json.videos[0].video_pictures
                    })
                    Setdata(arr2)(dispatch)
                    setuserData("")

                }

            }).catch((error) => {
                console.log("Error", error)
            });

    }

    const PlayVideo = (a) => {
        console.log("aaaaa", a)
        setvideHandle(true)

    }
    const removeTag = (a) => {
        console.log("aaaaaa", a)
        let res = [...saveddata]
        let b = res.findIndex((item) => item.id == a.id)
        if (b != -1) {
            if (resultantData == a.typ) {
                setresultantData("")
                setdata([])
            }
            res.splice(b, 1)
            Setdata(res)(dispatch)
        }

    }
    return (
        <View style={homestyle.container}>
            <TextInp
                value={userData}
                placeholder={'Type here...'}
                onChangeText={(txt) => {
                    setuserData(txt)
                    if (userData.length >= 3) {
                        setTimeout(() => {
                            _FetchData(txt)
                        }, 1000);
                    }
                }}
            />
            <View>
                <FlatList
                    data={saveddata}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (
                            <View style={tagsStyle.tag} >
                                <TouchableOpacity onPress={() => {
                                    setdata(item)
                                    setresultantData(item.typ)
                                }}>
                                    <Text style={{ color: '#fff' }}>{item.typ}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => removeTag(item)}>
                                    <Image source={require("../../../assets/close.png")} style={tagsStyle.closeIcon} />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
                <FlatList
                    numColumns={3}
                    data={data?.typlist}
                    contentContainerStyle={{ flexGrow: 1 }}
                    renderItem={({ item }) => {
                        return (
                            <Videos
                                item={item}
                                onPress={() => {
                                    PlayVideo()
                                }}
                                modal={vidHandle}
                            />
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default home

const styles = StyleSheet.create({})