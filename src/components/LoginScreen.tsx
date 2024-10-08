import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type LoginScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Login">,
};

export function LoginScreen({ navigation }: LoginScreenProps) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = () => {
        // Here you would typically validate the credentials
        // For this example, we'll just navigate to the PendingDeliveries screen
        navigation.navigate("PendingDeliveries");
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-4 font-bold text-center">
                Login
            </label>
            <textField
                style={styles.input}
                hint="Username"
                value={username}
                onTextChange={(args) => setUsername(args.value)}
            />
            <textField
                style={styles.input}
                hint="Password"
                secure={true}
                value={password}
                onTextChange={(args) => setPassword(args.value)}
            />
            <button
                style={styles.button}
                onTap={handleLogin}
            >
                Login
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        fontSize: 18,
        color: "white",
        backgroundColor: "#65adf1",
        padding: 10,
        borderRadius: 5,
        width: "80%",
        textAlignment: "center",
    },
});