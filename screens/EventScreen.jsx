import { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BACK_URL } from '@env';

// Import styles
import { globalsStyles, GLOBAL_COLOR } from '../styles/globals';
import styles from '../styles/EventStyles';

//Import components
import BuddiesBar from '../components/BuddiesBar';
import SvgCar from '../components/svg/SvgCar';
import SvgPlane from '../components/svg/SvgPlane';
import SvgTrain from '../components/svg/SvgTrain';
import SvgPeople from '../components/svg/SvgPeople';

//Import modules
import { formatDate, compareDate } from '../modules/dates';
import { timeToText } from '../modules/formatTime';

// Import redux
import { useDispatch, useSelector } from 'react-redux';
import {} from '../redux/reducers/user';
import {} from '../redux/reducers/trips';
import { updateEvent } from '../redux/reducers/events';

export default function EventScreen({ route, navigation }) {
  // 1. Redux storage
  const user = useSelector((state) => state.user.value);
  const events = useSelector((state) => state.events.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState, UseRef

  // Affichage du loader lors du fetch pour s'ajouter/s'enlever de l'event
  const [isLoad, setIsLoad] = useState(false);
  // On recupère les infos de l'évènement dans le storage grâce à son tokenEvent
  const tokenEvent = route.params.tokenEvent;
  const event = events.find((e) => e.tokenEvent === tokenEvent);
  const isCreator = event.user.tokenUser === user.tokenUser;
  // vérification si le user est participant à l'event ou pas
  const isParticipant = event.participants.find(
    (e) => e.tokenUser === user.tokenUser,
  );

  // On destructure les données
  const {
    tokenTrip,
    user: userEvent,
    participants,
    date,
    name,
    description,
    category,
    place,
    timeStart,
    timeEnd,
    seats,
    ticket,
    infos,
  } = event;

  // On défini le nombre de participants
  const sumParticipants = participants.length - 1;

  // 3. Functions

  // On sélectionne l'icone en fonction de la catégorie de l'event
  const findCategory = (cat) => {
    const width = 40;
    const height = 40;
    const fill = GLOBAL_COLOR.TERTIARY;
    if (cat === 'travel car')
      return (
        <SvgCar
          style={{ alignSelf: 'center' }}
          width={width}
          height={height}
          fill={fill}
        />
      );
    else if (cat === 'travel plane')
      return (
        <SvgPlane
          style={{ alignSelf: 'center' }}
          width={width}
          height={height}
          fill={fill}
        />
      );
    else if (cat === 'travel train')
      return (
        <SvgTrain
          style={{ alignSelf: 'center' }}
          width={width}
          height={height}
          fill={fill}
        />
      );
    return (
      <SvgPeople
        style={{ alignSelf: 'center' }}
        width={width}
        height={height}
        fill={fill}
      />
    );
  };
  const iconHeader = useRef(findCategory(category));

  // Au clique sur le plus ça envoi les info au back et met à jour l'état du fontawesome
  const handleAddMePress = async () => {
    setIsLoad(true);
    try {
      const response = await fetch(`${BACK_URL}/events/participant`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: user.token,
          tokenEvent: event.tokenEvent,
        }),
      });

      const responseData = await response.json();
      // console.log('Réponse du serveur:', responseData);

      if (responseData.result) {
        const newEvent = responseData.event;
        // sauvegarder dans le reducer le nouvel event
        dispatch(updateEvent(newEvent));
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'event au serveur :", error);
    }
    setIsLoad(false);
  };

  // Au clique sur le moins ça envoi les info au back et met à jour l'état du fontawesome
  const handleDelMePress = async () => {
    setIsLoad(true);
    try {
      const response = await fetch(`${BACK_URL}/events/participant`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: user.token,
          tokenEvent: event.tokenEvent,
        }),
      });

      const responseData = await response.json();
      console.log('Réponse du serveur:', responseData);

      if (responseData.result) {
        const newEvent = responseData.event;
        // sauvegarder dans le reducer le nouvel event
        dispatch(updateEvent(newEvent));
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'event au serveur :", error);
    }
    setIsLoad(false);
  };

  // 4. Return Component
  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={GLOBAL_COLOR.PRIMARY}
        barStyle="light-content"
      />
      <SafeAreaView
        style={{ flex: 0, backgroundColor: GLOBAL_COLOR.PRIMARY }}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerSide}
            activeOpacity={0.8}
            // Si on envoie un paramètre isNew, c'est que l'event viens d'etre enregistré et que le goback doit etre modifié
            onPress={
              route.params?.isNew
                ? () =>
                    navigation.navigate('TabNavigator', {
                      screen: 'Trip',
                      params: { tokenTrip, date },
                    })
                : () => navigation.goBack()
            }
          >
            <FontAwesome
              name="arrow-left"
              size={30}
              color={GLOBAL_COLOR.TERTIARY}
            />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text numberOfLines={1} ellipsizeMode="middle" style={styles.title}>
              {name}
            </Text>
            <Text style={styles.titleBy}>Ajouté par {userEvent.username}</Text>
          </View>
          <View style={styles.headerSide}>{iconHeader.current}</View>
        </View>
        <View style={styles.body}>
          <View style={styles.buddiesContainer}>
            <View style={styles.lineContainer}>
              <View style={styles.Line}></View>
              <Text style={styles.textTitleBuddies}>Buddies</Text>
              <View style={styles.Line}></View>
            </View>
            <View style={styles.buddiesContent}>
              <BuddiesBar
                style={styles.bubbles}
                buddies={participants}
                max={5}
              />
              {
                /* Afficher une icône en fonction de l'état */
                isCreator ? (
                  <View>
                    {/* <FontAwesome name="check" size={30} color={GLOBAL_COLOR.SECONDARY} /> */}
                  </View>
                ) : isLoad ? (
                  <View style={styles.buttonAddBuddy}>
                    <ActivityIndicator
                      size="small"
                      color={GLOBAL_COLOR.SECONDARY}
                    />
                  </View>
                ) : isParticipant ? (
                  <TouchableOpacity
                    style={styles.buttonAddBuddy}
                    activeOpacity={0.8}
                    onPress={handleDelMePress}
                  >
                    <FontAwesome
                      name="minus"
                      size={30}
                      color={GLOBAL_COLOR.SECONDARY}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.buttonAddBuddy}
                    activeOpacity={0.8}
                    onPress={handleAddMePress}
                  >
                    <FontAwesome
                      name="plus"
                      size={30}
                      color={GLOBAL_COLOR.SECONDARY}
                    />
                  </TouchableOpacity>
                )
              }
            </View>
          </View>
          <View style={styles.containerInfos}>
            <View style={styles.infos}>
              {
                /* Afficher le bouton d'edition pour le createur */
                isCreator && (
                  <TouchableOpacity
                    style={styles.edit}
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('NewEvent', {
                        screen: 'NewEvent',
                        tokenEvent,
                      })
                    }
                  >
                    <FontAwesome
                      name="edit"
                      size={30}
                      color={GLOBAL_COLOR.SECONDARY}
                    />
                  </TouchableOpacity>
                )
              }
              <Text style={styles.textInfos}>
                <Text style={styles.textInfosBold}>Date :</Text>
                <Text> {formatDate(new Date(date))}</Text>
              </Text>
              {category === 'activity' ? (
                <Text style={styles.textInfos}>
                  <Text style={styles.textInfosBold}>Heure :</Text>{' '}
                  {timeToText(timeStart)}
                </Text>
              ) : (
                <>
                  <Text style={styles.textInfos}>
                    <Text style={styles.textInfosBold}>départ : </Text>
                    {timeToText(timeStart)}
                  </Text>
                  <Text style={styles.textInfos}>
                    <Text style={styles.textInfosBold}>arrivée : </Text>
                    {timeToText(timeEnd)} {compareDate(timeStart, timeEnd)}
                  </Text>
                </>
              )}
              <Text style={styles.textInfos}>
                <Text style={styles.textInfosBold}>Lieu : </Text>
                {place}
              </Text>
              {seats > 0 && (
                <Text style={styles.textInfos}>
                  <Text style={styles.textInfosBold}>Places : </Text>
                  {seats - sumParticipants} places restantes
                </Text>
              )}
              {ticket && (
                <Text style={styles.textInfos}>
                  <Text style={styles.textInfosBold}>
                    {category === 'travel train'
                      ? 'N° de train : '
                      : category === 'travel plane'
                      ? 'N° de  vol : '
                      : ''}
                  </Text>
                  {ticket}
                </Text>
              )}
            </View>
            <View style={globalsStyles.lines} />
            <View style={styles.description}>
              <Text style={styles.desc}>{description}</Text>
            </View>
            {infos.length > 0 && (
              <>
                <View style={styles.lines} />
                <View style={styles.pointInteret}>
                  <Text style={styles.interetText}>Point d'intérêt :</Text>
                  {infos.map((data) => (
                    <TouchableOpacity
                      key={data.tokenInfo}
                      onPress={() => Linking.openURL(data.uri)}
                    >
                      <Text style={styles.interetTextList}>• {data.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
