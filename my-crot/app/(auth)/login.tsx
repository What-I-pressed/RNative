import {SafeAreaProvider} from "react-native-safe-area-context";
import {
    Animated,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import ScrollView = Animated.ScrollView;
import React, {useState} from "react";
import FormField from "@/components/FormField";

const LoginScreen = () => {

    const [form, setForm] = useState({email: "", password: ""});

    const handleChange = (field: string, value: string) => {
        setForm({...form, [field]: value});
    }

    const handleSubmit = () => {
        console.log("Login data", form);
    }
    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView className={"flex-1"}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        className={"flex-1"}>
                        <ScrollView
                            contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}
                        >
                            <View className="w-full flex justify-center items-center my-6"
                                style={{minHeight: Dimensions.get("window").height-100}}>

                                <Text className={"text-3xl font-bold mb-6 text-black"}>
                                    Вхід
                                </Text>

                                <FormField
                                    title={"Пошта"}
                                    value={form.email}
                                    handleChangeText={(value: string) => handleChange("email", value)}
                                    placeholder={"Вкажіть пошту"}
                                    keyboardType="email-address"
                                />

                                <FormField
                                    title={"Пароль"}
                                    value={form.password}
                                    handleChangeText={(value: string) => handleChange("password", value)}
                                    placeholder={"Вкажіть пароль"}
                                    secureTextEntry={true}
                                />

                                {/* Кнопка "Вхід" */}
                                <TouchableOpacity
                                    onPress={handleSubmit}
                                    className="w-full bg-blue-500 p-4 rounded-lg mt-4"
                                >
                                    <Text className="text-white text-center text-lg font-bold">
                                        Вхід
                                    </Text>
                                </TouchableOpacity>

                                {/* Кнопка "Реєструватися" */}
                                <TouchableOpacity
                                    // onPress={() => router.replace("/register")}
                                    className="w-full bg-gray-300 p-4 rounded-lg mt-2"
                                >
                                    <Text className="text-black text-center text-lg font-medium">
                                        У Вас немає акаунту? Реєстрація
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>

                </SafeAreaView>

            </SafeAreaProvider>
        </>
    )
}

export default LoginScreen;