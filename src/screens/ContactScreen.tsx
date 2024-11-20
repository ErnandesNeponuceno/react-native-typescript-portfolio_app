import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ContactScreen() {
  const openGitHub = () => {
    Linking.openURL('https://github.com/ernandesneponuceno');
  };

  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/ernandes-neponuceno/');
  };

  const openWhatsApp = () => {
    Linking.openURL('https://wa.me/5561995713388');
  };

  const openEmail = () => {
    Linking.openURL('mailto:ernandes.nep@gmail.com');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerPhoto}>
        <Image
          source={require('../../assets/img/perfil/ernandes2.png')} 
          style={styles.photo}
        />
      </View>
      <Text style={styles.title}>Contate-me</Text>
      <Text style={styles.description}>
        Estou disponível para novas conexões. Contate-me via e-mail e conecte-se comigo através
        das minhas redes sociais.
      </Text>

      <View style={styles.socialLinks}>
        <TouchableOpacity style={styles.socialButton} onPress={openGitHub}>
          <MaterialIcons name="code" size={24} color="#333" />
          <Text style={styles.socialText}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={openLinkedIn}>
          <MaterialIcons name="business-center" size={24} color="#0077b5" />
          <Text style={styles.socialText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={openWhatsApp}>
          <MaterialIcons name="chat" size={24} color="#25D366" />
          <Text style={styles.socialText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.emailButton} onPress={openEmail}>
        <MaterialIcons name="email" size={24} color="#fff" />
        <Text style={styles.emailText}>ernandes.nep@gmail.com</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  containerPhoto:{
    alignItems: 'center',
    marginBottom: 10
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  socialButton: {
    alignItems: 'center',
  },
  socialText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  emailButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    alignSelf: 'center',
  },
  emailText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});
