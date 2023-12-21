import React from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView,Dimensions, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FONTS } from "../constants/theme";
import { Searchbar } from 'react-native-paper';
import OfferCards from "../constants/OfferCards";
import assets from "../constants";
import Carousel from 'react-native-reanimated-carousel';
import DealCard from '../constants/DealCard';

const Home = ({ navigation }) => {
	const [searchQuery, setSearchQuery] = React.useState('');

	const onChangeSearch = query => setSearchQuery(query);

    const width = Dimensions.get('window').width;
	return (
		<ScrollView>
			<SafeAreaView>
				<View style={{ flexDirection: 'row' }}>
					<Entypo name="direction" size={24} color="#CC5500" style={{ marginHorizontal: 15, marginTop: 20 }} />
					<Text style={{ marginTop: 20, marginHorizontal: -10, fontSize: 18 }}>Vgn sothern Avenue</Text>
					<Image style={{ height: 40, width: 40, marginHorizontal: 120, marginTop: 12 }}
						source={require('../assets/images/bruce.png')}></Image>
				</View>
				<Searchbar
					placeholder="Search for dishes,restaurants"
					onChangeText={onChangeSearch}
					value={searchQuery}
					style={{ width: "90%", height: 50, borderRadius: 20, marginHorizontal: 15, marginTop: 20, backgroundColor: "#D3D3D3" }}
				/>
				<View style={{ flexDirection: 'row', height: 100, width: "100%", marginTop: 20, justifyContent: 'space-evenly' }}>
					<TouchableOpacity style={{ height: 100, width: 100, borderRadius: 10 }}
						onPress={() => {
							navigation.navigate("Food")
						}}>


						<Image style={{ height: 84, width: 100, borderRadius: 10 }} source={require('../assets/images/foods.jpg')}></Image>
						<Text style={{ textAlign: 'center', color: '#808080',marginTop:6 }}>Food</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ height: 100, width: 100, borderRadius: 10 }}
						onPress={() => {
							navigation.navigate("DineOut")
						}}>
						<Image style={{ height: 84, width: 100, borderRadius: 10 }} source={require('../assets/images/dinning.jpg')}></Image>
						<Text style={{ textAlign: 'center', color: '#808080' ,marginTop:6}}>Dine Out</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ height: 100, width: 100, borderRadius: 10 }}>
						<Image style={{ height: 84, width: 100, borderRadius: 10 }} source={require('../assets/images/genie.jpg')}></Image>
						<Text style={{ textAlign: 'center', color: '#808080',marginTop:6 }}>Genie</Text>
					</TouchableOpacity>

				</View>
				
				
				
            <Carousel
                loop
                width={width}
                height={width }
                autoPlay={true}
                data={[...new Array(2).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
				index%3 == 0 ? (
                 <DealCard />
				) : <OfferCards/> 
                )}
            />
			

			
      





			</SafeAreaView>
		</ScrollView>
	);
};

export default Home;
