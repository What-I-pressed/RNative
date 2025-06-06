import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {useRouter} from "expo-router";
import { logOut} from "@/store/slices/userSlice";
import {useAppDispatch, useAppSelector} from "@/store";
import {useGetCategoriesQuery} from "@/serices/categoryService";
import {removeFromSecureStore} from "@/utils/secureStore";


const CategoriesScreen = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();




    const user = useAppSelector((state) => state.user.user);
    const token = useAppSelector((state) => state.user.token);

    const {data, error} = useGetCategoriesQuery(token);

    console.log("Data in server", data);
    console.log("Data in server errors", error);

    const handleLogout = async () => {
        await removeFromSecureStore('authToken');
        dispatch(logOut());
        router.replace("/login");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Інформація про користувача:</Text>
            {user ? (
                <>
                    <Text>Email: {user.email}</Text>
                    {/*<Text>Ім’я: {user.name}</Text>*/}
                    {/*<Text>Роль: {user.roles.join(', ')}</Text>*/}

                    <TouchableOpacity
                        onPress={handleLogout}
                        style={styles.logoutButton}
                    >
                        <Text style={styles.logoutText}>Вийти</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text>Завантаження даних...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 20 },
    title: { fontSize: 20, marginBottom: 15, fontWeight: "bold" },
    logoutButton: {
        marginTop: 30,
        padding: 12,
        backgroundColor: "#ff4d4d",
        borderRadius: 8,
        alignItems: "center",
    },
    logoutText: { color: "white", fontWeight: "bold" },
});

export default CategoriesScreen;