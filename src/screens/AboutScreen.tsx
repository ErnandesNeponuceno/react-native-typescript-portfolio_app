import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';

export default function AboutScreen() {

  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/ernandes-neponuceno/');
  };

  const openResume = () => {
    Linking.openURL('https://drive.google.com/file/d/1KcwY1O_E80eVEI2ppDM4eX6y0Ht1cx-c/view?usp=sharing');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.introSection}>
      <Image
        source={require('../../assets/img/perfil/ernandes.png')} 
        style={styles.photo}
      />
      <Text style={styles.introText}>
        Ernandes Neponuceno. Sou natural do Maranhão e apaixonado por artes, tecnologia e ficção científica. 
        Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e cursos para Desenvolvimento Full Stack 
        (JavaScript, TypeScript, Angular, Spring Boot, Java e React Native). 
        Com a realização de projetos práticos, adquiri conhecimento extra em Tailwind, Bootstrap,
        conceitos essenciais de Python, bancos de dados (SQL), 
        sistema de controle de versionamento Git e GitHub e metodologias ágeis como Scrum e Kanban.
      </Text>
       <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={openLinkedIn}>
            <Text style={styles.buttonText}>Conecte-se Comigo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openResume}>
            <Text style={styles.buttonText}>Currículo</Text>
          </TouchableOpacity>
        </View>
    </View>
    {/* Formação */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Formação</Text>
      <View style={styles.sectionContent}>
        <Text style={styles.itemTitle}>Análise e Desenvolvimento de Sistemas</Text>
        <Text style={styles.itemSubtitle}>Gran Faculdade</Text>
        <Text style={styles.itemText}>Mar 2023 - Atualmente</Text>
      </View>
      <View style={styles.sectionContent}>
        <Text style={styles.itemTitle}>Arquitetura e Urbanismo</Text>
        <Text style={styles.itemSubtitle}>Universidade do Distrito Federal - UDF</Text>
        <Text style={styles.itemText}>Jun 2018 - Jun 2024</Text>
      </View>
    </View>
    {/* Experiência */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Experiências</Text>
      <View style={styles.sectionContent}>
        <Text style={styles.itemTitle}>Gran Educação e Tecnologia</Text>
        <Text style={styles.itemSubtitle}>Analista</Text>
        <Text style={styles.itemText}>
          Desenvolvi habilidades e conhecimentos em Salesforce, incluindo Sales Cloud, Service Cloud, 
          e configurações da plataforma.
          Atuei na criação de scripts para atendimento e onboarding de clientes,
          produção de vídeos de treinamento e elaboração de relatórios. 
          Paralelamente, aperfeiçoei minhas soft skills, como comunicação, escrita, análise de processos e pensamento analítico. 
          Também ampliei meu domínio em Microsoft 365, Google Workspace e metodologias ágeis, incluindo Scrum e Kanban.
        </Text>
      </View>
      <View style={styles.sectionContent}>
        <Text style={styles.itemTitle}>TIVIT Tecnologia - Projeto Caixa</Text>
        <Text style={styles.itemSubtitle}>Ouvidor</Text>
        <Text style={styles.itemText}>
          Atendimento inicial para informações gerais sobre a instituição (agências, aplicativos, sites e canais). 
          Suporte técnico especializado para financiamentos habitacionais, incluindo FGTS, pausas e sinistros. 
          Realizado via telefone, chat e WhatsApp.
        </Text>
      </View>
    </View>
    {/* Cursos */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Cursos</Text>
      <View style={styles.sectionContent}>
        <Text style={styles.itemTitle}>Formação Angular</Text>
        <Text style={styles.itemText}>
          Compreensão de fundamentos do Angular, TypeScript, e criação de componentes.
        </Text>
      </View>
      <View style={styles.sectionContent}>
        <Text style={styles.itemTitle}>Formação JavaScript Developer</Text>
        <Text style={styles.itemText}>
          Manipulação do DOM, consumo de APIs e uso avançado de funções JavaScript.
        </Text>
      </View>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  introSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  introText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#555',
  },
  primaryButton: {
    backgroundColor: '#333',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  sectionContent: {
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 14,
    color: '#555',
  },
});
