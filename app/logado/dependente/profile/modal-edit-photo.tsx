import { useTheme } from '@/hooks/useTheme';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { forwardRef } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';

const screenHeight = Dimensions.get("window").height;

const ModalEditPhoto = forwardRef<Modalize>((props, ref) => {
    const { isDarkMode, toggleDarkMode, colors } = useTheme();

    const styles = StyleSheet.create({
        overlay: {
            backgroundColor: '#0000004D',
        },
        modal: {
            borderTopLeftRadius: 50,
            backgroundColor: colors.background,
            borderTopRightRadius: 50,
            padding: 30,
        },
        container: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontFamily: 'Poppins-Regular',
            fontSize: 22,
            marginTop: 20,
            color: colors.black
        },
        section: {
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
        },
        card: {
            alignItems: 'center',
            gap: 10,
        },
        icon: {
            alignItems: 'center',
            height: 70,
            width: 70,
            borderRadius: 35,
            borderColor: colors.gray,
            borderWidth: 3,
            justifyContent: 'center',
        },
        textCard: {
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
            color: colors.black
        }
    });

    return (
        <Modalize
            ref={ref}
            overlayStyle={styles.overlay}
            modalStyle={styles.modal}
            keyboardAvoidingBehavior="padding"
            modalHeight={screenHeight * 0.35}
        >
            <View style={styles.container}>
                <Text style={styles.text}>Foto de Perfil</Text>

                <View style={styles.section}>
                    <View style={styles.card}>
                        <View style={styles.icon}><Entypo name="camera" size={30} color={colors.bluePrimary} /></View>
                        <Text style={styles.textCard}>Câmera</Text>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.icon}>
                            <FontAwesome6 name="image" size={30} color={colors.bluePrimary} />
                        </View>
                        <Text style={styles.textCard}>Galeria</Text>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.icon}><FontAwesome5 name="trash" size={30} color={colors.bluePrimary} /></View>
                        <Text style={styles.textCard}>Excluir</Text>
                    </View>

                </View>
            </View>
        </Modalize>
    );
});

export default ModalEditPhoto;

