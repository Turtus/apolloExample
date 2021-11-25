import React from 'react';
import {Text, View} from 'react-native';
import RatesData from "./RatesData";
import RatesDataWS from "./RatesDataWS";

function Rates() {

    return (
        <View>
            <Text>Rates</Text>
            <RatesData/>
            <RatesDataWS/>
        </View>
    )
}

export default Rates;
