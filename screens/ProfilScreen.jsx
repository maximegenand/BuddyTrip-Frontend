import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, Dimensions, Image } from "react-native";

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/ProfilStyles";

//Import components
import BuddyBubble from "../components/BuddyBubble";
import SvgArrow from "../components/svg/SvgArrow";
import SvgHome from "../components/svg/SvgHome";

//Import modules
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Import redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/user";


export default function ProfilScreen({ navigation }) {
  // 1. Redux storage
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState, UseRef

  // 3. Functions

  // fonction pour se Deconnecter
  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate("Signin");
  };

  // 4. Return Component
  
  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={GLOBAL_COLOR.PRIMARY}
        barStyle="light-content"
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: GLOBAL_COLOR.PRIMARY }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.btnHome} onPress={() => navigation.navigate("Home")}>
            <SvgHome width={40} height={40} fill="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profil</Text>
          <View style={styles.btnHome}></View>
        </View>
        <View style={styles.content}>
          <TouchableOpacity style={styles.imgContainer} activeOpacity={1}>
            <BuddyBubble size={Dimensions.get("window").width / 2} i={0} buddy={user} />
            <TouchableOpacity style={styles.imgEdit} activeOpacity={0.8}>
              <FontAwesome name="edit" size={30} color={GLOBAL_COLOR.SECONDARY} />
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={globalsStyles.lines} />
          <View style={styles.infos}>
            <View style={styles.textContainer}>
              <View style={styles.textContainerInnerLeft}>
                <Text style={styles.textInfosBold}>Username :</Text>
                <Text style={styles.textInfosBold}>Email :</Text>
                <Text style={styles.textInfosBold}>Password :</Text>
              </View>
              <View style={styles.textContainerInnerRight}>
                <Text style={styles.textInfos}>{user.username}</Text>
                <Text style={styles.textInfos}>{user.email}</Text>
                <Text style={styles.textInfos}>***********</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.imgEdit}>
              <FontAwesome name="edit" size={30} color={GLOBAL_COLOR.SECONDARY} />
            </TouchableOpacity>
          </View>
          <View style={globalsStyles.lines} />
          <TouchableOpacity style={styles.containerFriends}>
            <Text style={styles.textFriends}>Liste d'amis</Text>
            <SvgArrow width={40} height={40} fill={GLOBAL_COLOR.TERTIARY} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerFriends}>
            <Text style={styles.textFriends}>Archives</Text>
            <SvgArrow width={40} height={40} fill={GLOBAL_COLOR.TERTIARY} />
          </TouchableOpacity>
          <View style={styles.gestion}>
            <TouchableOpacity style={styles.containerGestion}>
              <Text style={styles.textGestion}>Supprimer Compte</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLogout()} style={styles.containerGestion}>
              <Text style={styles.textGestion}>Déconnexion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
