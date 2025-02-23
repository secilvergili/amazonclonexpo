import { ScrollView, StyleSheet, Text, View } from 'react-native';


const ProductsScreen = () => {
  return (
  <ScrollView>
    <Text></Text>

      <Text></Text>

      {ProductData.map((item) => (
        <View>
          <View>
            <Image />
          </View>

          <View>
            <Text></Text>
            <Text></Text>

            <View>
              <Text></Text>
              {getRating(item.rating)}
              <Text></Text>
        </View>

        <View>
          <Text style={styles.cashback}></Text>
          <Text style={styles.crossOut}> {item.crossOutText} </Text>
        </View>

        <Text style={styles.cashback}>
        Up to 5% cashback with Amazon Pay Credit Card
        </Text>

        <Image source={PrimeLogo} style={styles.logo}/>

        <Text style={styles.cashback }>
        FREE Delivery by {item.deliveryBy}
      </Text>
        </View>
        </View>
      ))}
        
  </ScrollView>
);
};

export default ProductsScreen;

const styles = StyleSheet.create({});