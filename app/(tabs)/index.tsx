import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SocialPost() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.userName}>Maryana de Freitas</Text>
      <Image 
        source={{ uri: 'https://scontent.fcgh11-1.fna.fbcdn.net/v/t39.30808-6/342195947_6074982362594157_9195552601933753031_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s206x206&_nc_cat=102&ccb=1-7&_nc_sid=714c7a&_nc_ohc=Umd_1QkivNoQ7kNvgFEVTQT&_nc_zt=23&_nc_ht=scontent.fcgh11-1.fna&_nc_gid=AJOClW5-XGF5YDgxZ4rNXDN&oh=00_AYDmMOivaoZxHv029osHgoxT3X-LGPegauUPIlO7ytu3JQ&oe=6746D88F' }} 
        style={styles.postImage} 
      />
      <Text style={styles.postDescription}>
      Cada instante tem sua magia, e essa foto é só um pedacinho dela. 🌟✨ #VivaOAgora #HistóriasParaLembrar
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    postContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  userName: {
    fontSize: 18,   
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 500,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'justify',
  },
});
