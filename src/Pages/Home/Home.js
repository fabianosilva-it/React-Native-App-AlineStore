import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import { Input, } from 'galio-framework';


import makeup from '../../../assets/makeup.jpg';
import logo from '../../../assets/logoMarca.png';


// Imagens

import baton1 from '../../../assets/baton1.png'
import baton2 from '../../../assets/baton2.png'
import baton3 from '../../../assets/baton3.png'
import baton4 from '../../../assets/baton4.png'
import baton5 from '../../../assets/baton5.png'
import baton6 from '../../../assets/baton6.png'
import baton7 from '../../../assets/baton7.png'

import paleta1 from '../../../assets/paleta1.png'
import paleta2 from '../../../assets/paleta2.png'
import paleta3 from '../../../assets/paleta3.png'
import paleta4 from '../../../assets/paleta4.png'
import paleta5 from '../../../assets/paleta5.png'
import paleta6 from '../../../assets/paleta6.png'

import pincel1 from '../../../assets/pincel1.png'
import pincel2 from '../../../assets/pincel2.png'
import pincel3 from '../../../assets/pincel3.png'
import pincel4 from '../../../assets/pincel4.png'
import pincel5 from '../../../assets/pincel5.png'
import pincel6 from '../../../assets/pincel6.png'
import pincel7 from '../../../assets/pincel7.png'

import pigmento1 from '../../../assets/pigmento1.png'
import pigmento2 from '../../../assets/pigmento2.png'
import pigmento3 from '../../../assets/pigmento3.png'
import pigmento4 from '../../../assets/pigmento4.png'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Home({ navigation }){
 
  
  return (
      <ScrollView style={styles.container}>
          
          <View style={styles.v1}>
            <Image style={styles.makeup} source={makeup}></Image>
            <Image style={styles.logo} source={logo}></Image>
            
          </View>

          <Text style={styles.t3}>Olá Aline, chegaram novos batons com preços incríveis!</Text>
          <View style={styles.v1}>
            <Input style={styles.pesquisa} placeholder="O que você esta procurando?" rounded />
            <FontAwesomeIcon style={styles.btnpesquisa} icon={ faSearch } size={20} color={'#ece2c4'}/>
          </View> 
          

          <Text style={styles.t1}>Batom</Text>
          <ScrollView horizontal={true}>

            <View style={styles.v2}>
              <Image style={styles.lipstick} source={baton1}></Image>
              <Text style={styles.descr}>Bruna Tavares</Text>
              <Text style={styles.descr}>R$ 32,90</Text>
            </View>
           

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={baton2}></Image>
                  <Text style={styles.descr}>Bruna Tavares</Text>
                  <Text style={styles.descr}>R$ 32,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={baton3}></Image>
                  <Text style={styles.descr}>Bruna Tavares</Text>
                  <Text style={styles.descr}>R$ 32,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={baton4}></Image>
                  <Text style={styles.descr}>Bruna Tavares</Text>
                  <Text style={styles.descr}>R$ 32,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={baton5}></Image>
                  <Text style={styles.descr}>Bruna Tavares</Text>
                  <Text style={styles.descr}>R$ 32,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={baton6}></Image>
                  <Text style={styles.descr}>Bruna Tavares</Text>
                  <Text style={styles.descr}>R$ 32,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={baton7}></Image>
                  <Text style={styles.descr}>Bruna Tavares</Text>
                  <Text style={styles.descr}>R$ 32,90</Text>
            </View>

          </ScrollView>

          <Text style={styles.t1}>Paleta de sombras</Text>
          <ScrollView horizontal={true}>

           

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={paleta2}></Image>
                  <Text style={styles.descr}>Belle Angel Makeup</Text>
                  <Text style={styles.descr}>R$ 25,00</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={paleta5}></Image>
                  <Text style={styles.descr}>Belle Angel Makeup</Text>
                  <Text style={styles.descr}>R$ 25,00</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={paleta3}></Image>
                  <Text style={styles.descr}>Belle Angel Makeup</Text>
                  <Text style={styles.descr}>R$ 11,50</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={paleta4}></Image>
                  <Text style={styles.descr}>Belle Angel Makeup</Text>
                  <Text style={styles.descr}>R$ 11,50</Text>
            </View>

           

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={paleta6}></Image>
                  <Text style={styles.descr}>Belle Angel Makeup</Text>
                  <Text style={styles.descr}>R$ 11,50</Text>
            </View>

          </ScrollView>

          <Text style={styles.t1}>Pincel</Text>
          <ScrollView horizontal={true}>
            
            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={pincel1}></Image>
                  <Text style={styles.descr}>Glow me up</Text>
                  <Text style={styles.descr}>R$ 19,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={pincel2}></Image>
                  <Text style={styles.descr}>Glow me up</Text>
                  <Text style={styles.descr}>R$ 19,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={pincel3}></Image>
                  <Text style={styles.descr}>Glow me up</Text>
                  <Text style={styles.descr}>R$ 19,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={pincel4}></Image>
                  <Text style={styles.descr}>Glow me up</Text>
                  <Text style={styles.descr}>R$ 19,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={pincel5}></Image>
                  <Text style={styles.descr}>Glow me up</Text>
                  <Text style={styles.descr}>R$ 19,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={pincel6}></Image>
                  <Text style={styles.descr}>Glow me up</Text>
                  <Text style={styles.descr}>R$ 19,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={pincel7}></Image>
                  <Text style={styles.descr}>Glow me up</Text>
                  <Text style={styles.descr}>R$ 19,90</Text>
            </View>


          </ScrollView>


          <Text style={styles.t1}>Pigmento</Text>
          <ScrollView horizontal={true}>
            
            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={pigmento1}></Image>
                  <Text style={styles.descr}>Glow me up</Text>
                  <Text style={styles.descr}>R$ 16,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={pigmento2}></Image>
                  <Text style={styles.descr}>Glow me up</Text>
                  <Text style={styles.descr}>R$ 16,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={pigmento3}></Image>
                  <Text style={styles.descr}>Glow me up</Text>
                  <Text style={styles.descr}>R$ 16,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={pigmento4}></Image>
                  <Text style={styles.descr}>Glow me up</Text>
                  <Text style={styles.descr}>R$ 16,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={pincel6}></Image>
                  <Text style={styles.descr}>Glow me up</Text>
                  <Text style={styles.descr}>R$ 16,90</Text>
            </View>

            <View style={styles.v2}>
                  <Image style={styles.lipstick} source={pincel7}></Image>
                  <Text style={styles.descr}>Glow me up</Text>
                  <Text style={styles.descr}>R$ 16,90</Text>
            </View>

          

          </ScrollView>
          <Text> </Text>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },

  v1: {
    flex:1,
    // width:200,
    // height:200,
    backgroundColor: '#f5f5f5',
  },

  makeup:{
    width:400,
    height:300,
    borderBottomLeftRadius:50,
  },

  logo:{
    position:'absolute',
    marginTop: 30,
    marginLeft:30,
    width:100,
    height:100,
    borderRadius:50

  },
  lipstick:{
    width:100,
    height:100,
    backgroundColor:'#FFF',
    borderRadius:10,
  },

  v2: {
    width:100,
    height:135,
    backgroundColor: '#ece2c4',
    borderRadius:10,
    marginLeft:10,
    marginTop:10,
  },

  t1:{
    fontSize: 14,
    fontFamily:'sans-serif-condensed',
    marginLeft:10,
    marginTop:10,
  },
  t3:{
    fontSize: 14,
    fontFamily:'sans-serif-condensed',
    marginLeft:10,
    marginTop:15,
  },
  descr:{
    fontSize: 10,
    fontFamily:'sans-serif-condensed',
    marginLeft: 5,
    marginTop: 2,
  },
  pesquisa:{
    width:340,
    marginLeft:10,
    marginTop:10
  },
  btnpesquisa:{
    position:'absolute',
    marginLeft:310,
    marginTop:30
  },
  
  
});

