import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import { Palete } from "../globals/Palete";
import Profile from "../screens/Profile";
import ImageSelector from "../screens/ImageSelector";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={() => {
        return {
          headerTitle: () => {
            return <Header title={"Mi perfil"} color={Palete.primary} />;
          },
          headerStyle: {
            backgroundColor: Palete.darkWhite,
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        };
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ImageSelector" component={ImageSelector} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
