import React, { useState } from "react";
import {
    Text,
    View,
    Modal,
    TouchableOpacity, StyleSheet
} from "react-native";
import HeaderText from './HeaderText';
import NoteComponent from './NoteComponent';
import CustomButton from './CustomButton';
// import Slider from 'react-native-custom-slider';
// import SnapSlider from '@elselabs/react-native-snap-slider';
import CustomSlider from './CustomSlider';
const ModalContainer = props => {

    const selectState = (value) => {
        console.log(value)
    }
    return (
        <Modal
            animationType={"slide"}
            // transparent={false}
            onRequestClose={props.actionClick}
            transparent={true}
            visible={props.isModal}>
            <TouchableOpacity style={{ flex: 1, opacity: 0 }} onPressOut={props.actionClick} />
            <View style={styles.modal}>
                <HeaderText>
                    {props.modalHeader}
                </HeaderText>
                <HeaderText style={{ fontSize: 17, color: "#5a638b", paddingTop: 10 }}>
                    {props.dietaryDescription}
                </HeaderText>
                <NoteComponent title={props.optionHeader}>
                    {props.optionDescription}
                </NoteComponent>
                <CustomSlider selectState={selectState}/>
                {/* <SnapSlider containerStyle={styles.snapsliderContainer} style={styles.snapslider}
                    itemWrapperStyle={styles.snapsliderItemWrapper}
                    itemStyle={styles.snapsliderItem}
                    items={sliderOptions}
                    labelPosition="bottom"
                    defaultItem={defaultItem}
                    onSlidingComplete={slidingComplete}
                    minimumTrackTintColor="black"
                    maximumTrackTintColor="#464F7A" /> */}

                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly" }}>
                    <CustomButton container_style={{ ...styles.buttonContainer, flex: 3, alignItems: "flex-end", margin: 10 }}
                        buttonStyle={{ backgroundColor: "#464f7a", fontSize: '20' }}
                        data-test="saveComp"
                        title="save"
                        color="#fff"
                        pressHandler={props.actionClick} />
                    <CustomButton container_style={{ ...styles.buttonContainer, flex: 1, alignItems: "flex-start" }}
                        buttonStyle={{ backgroundColor: "#464f7a", paddingHorizontal: 13, paddingVertical: 10, borderRadius: 40 }}
                        data-test="saveComp"
                        title="X"
                        color="#fff"
                        pressHandler={props.actionClick} />
                </View>
            </View>
        </Modal>

    )
};
const styles = StyleSheet.create({

    modal: {
        flex: 3.3,
        paddingHorizontal: 40,
        paddingTop: 40,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#f4f4fc',
    },

    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,

    },
    snapsliderContainer: {

    },
    snapslider: {
        height: 20,
        backgroundColor: '#464F7A',
        // borderWidth: 5,
        // borderColor: '#464F7A',
        // borderRadius: 10,


    },
    snapsliderItemWrapper: {
        alignItems: 'center',
        // justifyContent: 'flex-end',

    },
    snapsliderItem: {
        fontSize: 12,

    },
    sliderContainer: {
        marginTop: 20,
        borderLeftWidth: 10,
        borderRightWidth: 15,
        height: 40,
        paddingBottom: 20,
        borderRadius: 20,
        backgroundColor: '#464F7A',
        borderColor: '#464F7A',

    },
    itemWrapper: {
        marginLeft: 10,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        flexDirection: 'row',
    },

});

export default ModalContainer;
