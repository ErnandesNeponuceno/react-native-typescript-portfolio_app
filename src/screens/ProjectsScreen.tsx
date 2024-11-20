import React from 'react';
import { View, Text, StyleSheet, Linking, Image, TouchableOpacity, FlatList } from 'react-native';

const projects = [
  {
    coverSrc: require('../../assets/img/projects/3.png'),
    title: 'Projeto Clínica Odonto +',
    description: 'Site completo para uma clínica de odontologia.',
    features: [
      'Site completo com 4 páginas responsivas.',
      'Validação de campos de formulários.',
      'Uso de Angular e TypeScript para elementos inteligentes.',
    ],
    technologies: [
      require('../../assets/img/tech/angular.png'),
      require('../../assets/img/tech/typescript.png'),
      require('../../assets/img/tech/css.png'),
    ],
    previewLink: 'https://angular-typescript-css-site-clinica.vercel.app/home',
    repoLink: 'https://github.com/ErnandesNeponuceno/angular-typescript-css-site-clinica',
  },
  {
    coverSrc: require('../../assets/img/projects/1.png'),
    title: 'Cafeteria Del Grano',
    description: 'Projeto de uma cafeteria com cardápio.',
    features: [
      'Exibição de diferentes tipos de cafés em cards.',
      'Carregamento dinâmico de dados a partir de um arquivo JSON.',
      'Modal para detalhes do produto.',
    ],
    technologies: [
      require('../../assets/img/tech/javascript.png'),
      require('../../assets/img/tech/bootstrap.png'),
      require('../../assets/img/tech/css.png'),
    ],
    previewLink: 'https://javascript-bootstrap-css-cafeteria.vercel.app/',
    repoLink: 'https://github.com/ErnandesNeponuceno/javascript-bootstrap-css-cafeteria',
  },
  {
    coverSrc: require('../../assets/img/projects/2.png'),
    title: 'PlayStation Store',
    description: 'Projeto de clone fiel da PS Store com Angular.',
    features: [
      'Clone fiel da página PS Store.',
      'Criação de elementos dinamicamente com a diretiva NgFor.',
      'Utilização da biblioteca Swiper.',
    ],
    technologies: [
      require('../../assets/img/tech/angular.png'),
      require('../../assets/img/tech/typescript.png'),
      require('../../assets/img/tech/css.png'),
    ],
    previewLink: 'https://angular-ps-store-smi3.vercel.app/',
    repoLink: 'https://github.com/ErnandesNeponuceno/angular-ps-store',
  },
];

export default function ProjectsScreen() {

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  const renderProjectItem = ({ item }: { item: typeof projects[0] }) => (
    <View style={styles.card}>  
      <Image source={item.coverSrc} style={styles.coverImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        
        {item.features.map((feature, index) => (
          <Text key={index} style={styles.feature}>
            • {feature}
          </Text>
        ))}

        <View style={styles.technologies}>
          {item.technologies.map((tech, index) => (
            <Image key={index} source={tech} style={styles.techIcon} />
          ))}
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={() => openLink(item.previewLink)}
          >
            <Text style={styles.buttonText}>Prévia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => openLink(item.repoLink)}
          >
            <Text style={styles.buttonText}>Repositório</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={projects}
      renderItem={renderProjectItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
  },
  coverImage: {
    width: '100%',
    height: 250,
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  feature: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  techIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  primaryButton: {
    backgroundColor: '#333',
  },
  secondaryButton: {
    backgroundColor: '#555',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  }
});
