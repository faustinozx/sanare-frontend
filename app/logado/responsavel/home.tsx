import { useRouter } from 'expo-router';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Colors from '../../../constants/Colors';

export default function HomeResponsavel() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* TOPO */}
            <View style={styles.header}>
                <Image
                    source={require('../../../assets/images/detalhe.png')}
                    style={styles.detalhe}
                    resizeMode="cover"
                />

                <View style={styles.headerContent}>
                    <View>
                        <Text style={styles.bomDia}>Bom dia!</Text>
                        <Text style={styles.nome}>Nicolas Faustino</Text>
                    </View>

                    <TouchableOpacity onPress={() => console.log('Notificações')}>
                        <Image
                            source={require('../../../assets/images/sino.png')}
                            style={styles.sino}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* CORPO */}
            <View style={styles.body}>
                <View style={styles.timeline}>
                    <Text style={styles.servicosTitle}>Nossos serviços</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.servicosContainer}
                    >
                        <TouchableOpacity onPress={() => router.push('./saude')}>
                            <Image
                                source={require('../../../assets/images/Saude.png')}
                                style={styles.servicoCard}
                            />
                            <Text style={styles.cardText}>Saúde</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('./dependentes')}>
                            <Image
                                source={require('../../../assets/images/Dependentes.png')}
                                style={styles.servicoCard}
                            />
                            <Text style={styles.cardTextt}>Dependentes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('./relatorios')}>
                            <Image
                                source={require('../../../assets/images/Relatorios.png')}
                                style={styles.servicoCard}
                            />
                            <Text style={styles.cardTextt}>Relatórios</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('./lembretes')}>
                            <Image
                                source={require('../../../assets/images/Lembretes.png')}
                                style={styles.servicoCard}
                            />
                            <Text style={styles.cardTextt}>Lembretes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('./dicas')}>
                            <Image
                                source={require('../../../assets/images/Dicas.png')}
                                style={styles.servicoCard}
                            />
                            <Text style={styles.cardText}>Dicas</Text>
                        </TouchableOpacity>
                    </ScrollView></View>

                <Text style={styles.hojeTitle}>Para hoje:</Text>

            </View>

            {/* NAV */}
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navItem} onPress={() => router.push('./homeResponsavel')}>
                    <Image
                        source={require('../../../assets/images/inicio.png')}
                        style={[styles.navIcon, styles.navIconActive]}
                        resizeMode="contain"
                    />
                    <Text style={[styles.navText, styles.navTextActive]}>Início</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('./comunidade')}>
                    <Image
                        source={require('../../../assets/images/comunidade.png')}
                        style={styles.navIcon}
                        resizeMode="contain"
                    />
                    <Text style={styles.navText}>Comunidade</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('./profile.tsx')}>
                    <Image
                        source={require('../../../assets/images/perfil.png')}
                        style={styles.navIcon}
                        resizeMode="contain"
                    />
                    <Text style={styles.navText}>Perfil</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.bluePrimary,
    },
    header: {
        position: 'relative',
        height: 118,
        paddingHorizontal: 24,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    detalhe: {
        position: 'absolute',
        width: 417,
        height: 155,
        top: 0,
        left: 0,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 2,
    },
    bomDia: {
        color: Colors.light.white,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    nome: {
        color: Colors.light.white,
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
    },
    sino: {
        width: 40,
        height: 40,
    },
    body: {
        flex: 1,
        backgroundColor: Colors.light.white,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 24,
        paddingHorizontal: 20,
        width: '100%',
        height: '100%'
    },
    servicosTitle: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: '#000',
        marginTop: 20,
        marginBottom: 40,
    },
    servicosContainer: {
        paddingRight: 12,
    },
    servicoCard: {
        width: 89,
        height: 100,
        marginRight: 0,
        resizeMode: 'contain',
    },
    cardText: {
        fontSize: 11,
        fontFamily: 'Poppins-Medium',
        color: '#000',
        position: 'absolute',
        top: 67,
        left: 27,
    },
    cardTextt: {
        fontSize: 11,
        fontFamily: 'Poppins-Medium',
        color: '#000',
        position: 'absolute',
        top: 67,
        left: 16,
        righ: 40
    },
    hojeTitle: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: '#000',
        marginBottom: 310,
    },
    timeline: {
        marginBottom: 70,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 95,
        width: '100%',
        backgroundColor: '#EDEDED',
        paddingBottom: 10,
    },

    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    navIcon: {
        width: 33,
        height: 38,
        tintColor: '#666', //talvez constar na colors
        marginBottom: 4,
    },

    navIconActive: {
        tintColor: Colors.light.bluePrimary,
    },

    navText: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#666',
    },

    navTextActive: {
        fontFamily: 'Poppins-Medium',
        color: '#0057B0',
    }
});