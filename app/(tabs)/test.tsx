import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import ParallaxScrollView from '../../components/ParallaxScrollView';

export default function myfucntion() {
    return (
        <View style={styles.container}>
        <ParallaxScrollView
            headerImage={<Image source={require('../../assets/images/fit-logo.png')} />}
            headerBackgroundColor={ { dark: 'black', light: 'white' }}
        >
            {/* <Collapsible title="hello world">
                <Text> hello world 1</Text>
                <Text> hello world 2</Text>
                <Text> hello Devin</Text>
            <Text> HELLO  Eva</Text>    
        </Collapsible>
        <ExternalLink href="https://www.baidu.com"> 
            <Text> search Button </Text>
        </ExternalLink>*/}
         <HelloWave/> 
        <ThemedText type="title"> hello world </ThemedText>
        <ThemedText type="subtitle"> hello world </ThemedText>
        <ThemedText type="link"> hello world </ThemedText>
        <ThemedText type="title"> hello world </ThemedText>
        <ThemedText type="subtitle"> hello world </ThemedText>
        <ThemedText type="link"> hello world </ThemedText>
        <View style={{ height: 800 }} />
        <ThemedText type="title"> hello world </ThemedText>
        <ThemedText type="subtitle"> hello world </ThemedText>
        <ThemedText type="link"> hello world </ThemedText>
        <ThemedText type="title"> hello world </ThemedText>
        <ThemedText type="subtitle"> hello world </ThemedText>
        <ThemedText type="link"> hello world </ThemedText>
        <ThemedView style={styles.myContainer} lightColor="blue" darkColor="white" ><Text> hello world </Text></ThemedView>
        </ParallaxScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight ||0,
    },
    myContainer: {
        flexDirection: 'row',
        width: '100%',
    }
});