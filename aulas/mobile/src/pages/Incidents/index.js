import React  from 'react'

import { View, Image, Text, TouchableOpacity } from 'react-native'

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>. 
                </Text>
            </View>

            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
            <View styles={styles.incidentList}>
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>OngOld:</Text>

                    <Text style={styles.incidentProperty}>Caso:</Text>
                    <Text style={styles.incidentValue}>Cão arrependido:</Text>

                    <Text style={styles.incidentProperty}>Caso:</Text>
                    <Text style={styles.incidentValue}>APAD </Text>

                    <TouchableOpacity 
                    style={styles.detailsButton}
                    onPress={()  => {}}>
                        
                    <Text styles={styles.detailsButtunText}>Ver mais detalhes</Text>
                    
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}