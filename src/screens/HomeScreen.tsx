import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const technologies = [
  { src: require('../../assets/img/tech/html.png'), alt: 'Logo HTML5' },
  { src: require('../../assets/img/tech/css.png'), alt: 'Logo CSS' },
  { src: require('../../assets/img/tech/javascript.png'), alt: 'Logo JavaScript' },
  { src: require('../../assets/img/tech/typescript.png'), alt: 'Logo TypeScript' },
  { src: require('../../assets/img/tech/angular.png'), alt: 'Logo Angular' },
  { src: require('../../assets/img/tech/react.png'), alt: 'Logo React Native' },
  { src: require('../../assets/img/tech/nodejs.png'), alt: 'Logo NodeJs' },
  { src: require('../../assets/img/tech/java.png'), alt: 'Logo Java' },
  { src: require('../../assets/img/tech/spring.png'), alt: 'Logo Spring' },
  { src: require('../../assets/img/tech/bootstrap.png'), alt: 'Logo Bootstrap' },
  { src: require('../../assets/img/tech/tailwind.png'), alt: 'Logo Tailwind' },
];

export default function HomeScreen({navigation}:any) {
  function navToProjetos() {
    navigation.navigate('Projetos'); 
  }
  const openYouTubeLink = () => {
    Linking.openURL('https://www.youtube.com/watch?v=HnvNC8qgTS4'); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>
          <Text style={styles.bold}>Soluções Criativas &</Text> Desenvolvimento Full Stack
        </Text>
        <Text style={styles.description}>
          Ernandes Neponuceno, Brasília-DF, Desenvolvedor Full Stack.
        </Text>
        <TouchableOpacity style={styles.primaryButton} onPress={navToProjetos}>
          <Text style={styles.buttonText}>Ver Projetos</Text>
          <MaterialIcons name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer} onPress={openYouTubeLink}>
          <Image
            source={require('../../assets/img/capa.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.technologiesSection}>
          <Text style={styles.sectionTitle}>
            Conhecimento nas principais tecnologias do mercado
          </Text>
          <FlatList
            data={technologies}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.technologyItem}>
                <Image source={item.src} style={styles.technologyLogo} />
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  mainContent: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '200',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  primaryButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  technologiesSection: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  technologyItem: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
  },
  technologyLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
