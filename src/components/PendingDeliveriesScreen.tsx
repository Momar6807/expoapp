import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type PendingDeliveriesScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "PendingDeliveries">,
};

type Delivery = {
    id: string;
    address: string;
    status: string;
};

const mockDeliveries: Delivery[] = [
    { id: "1", address: "123 Main St", status: "In Transit" },
    { id: "2", address: "456 Elm St", status: "Out for Delivery" },
    { id: "3", address: "789 Oak St", status: "Pending" },
];

export function PendingDeliveriesScreen({ navigation }: PendingDeliveriesScreenProps) {
    return (
        <scrollView style={styles.container}>
            <stackLayout>
                {mockDeliveries.map((delivery) => (
                    <gridLayout key={delivery.id} style={styles.card} rows="auto, auto" columns="*, auto">
                        <label row={0} col={0} style={styles.address}>{delivery.address}</label>
                        <label row={1} col={0} style={styles.status}>{delivery.status}</label>
                        <button row={0} col={1} rowSpan={2} style={styles.detailsButton}>Details</button>
                    </gridLayout>
                ))}
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#f0f0f0",
    },
    card: {
        margin: 10,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    address: {
        fontSize: 16,
        fontWeight: "bold",
    },
    status: {
        fontSize: 14,
        color: "#666",
    },
    detailsButton: {
        backgroundColor: "#65adf1",
        color: "white",
        padding: 5,
        borderRadius: 5,
        textAlignment: "center",
    },
});