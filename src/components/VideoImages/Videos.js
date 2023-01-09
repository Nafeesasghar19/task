import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, Modal } from 'react-native'
import React from 'react'
import PlayIcon from "react-native-vector-icons/AntDesign"
import { tagsStyle } from '../styleSheet'
import { Video } from 'expo-av';

const Videos = ({ item, onPress, modal }) => {


    return (
        <>
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <ImageBackground borderRadius={10} source={{ uri: item.picture }} style={tagsStyle.bgImg}>
                    <PlayIcon name='play' size={32} color="white" />
                </ImageBackground>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                visible={modal}>
                <View style={{ flex: 1, backgroundColor: 'black' }}>
                    <Video
                        source={{ uri: 'https://www.pexels.com/video/drone-view-of-big-waves-rushing-to-the-shore-3571264/' }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        style={{ height: 200, width: 300 }}
                    />
                </View>
            </Modal>
        </>

    )
}

export default Videos

const styles = StyleSheet.create({
    container: { margin: 12, flex: 1 },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})