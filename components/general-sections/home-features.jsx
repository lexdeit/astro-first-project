import AppleCardApp from "../cards/apple-card-app"
import AppleCardHugeHorizontal from "../cards/apple-card-huge-horizontal"
import FormAppleCard from "../forms/form-apple-card"
import AppleCardSquare from "../cards/apple-card-square"

const HomeFeatures = () => {
    return (
        <section
            className="w-full h-auto flex flex-col gap-12"
        >
            <h3
                className="font-semibold text-gray-900 text-6xl"
            >Nuestra Telecomunicación.{" "}
                <span
                    className="text-gray-400"
                >
                    Velocidad, Conexión, Innovación, Tu Futuro
                </span>
            </h3>

            <div
                className="flex flex-col w-full h-auto gap-4"
            >

                <div
                    className="flex justify-center items-center gap-4"
                >
                    <AppleCardApp
                        opaque
                        media={'https://www.apple.com/v/apps/a/images/overview/apps/tier1/chiclets/safari_chiclet__ervigamv5qye_medium.png'}
                        header={'Comunicaciones'}
                        description={'Nuestro objetivo es inspirar, conectar y hacer que cada mensaje sea memorable para tu audiencia.'}
                        background='https://images.unsplash.com/photo-1570132173681-84685dfabc43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
                        subheader={'Comunicaciones que Marcan la Diferencia'}
                    />

                    <AppleCardApp
                        opaque
                        media={'https://www.apple.com/v/apps/a/images/overview/apps/tier1/chiclets/maps_chiclet__b825c0yhl64i_medium.png'}
                        header={'Telefonía'}
                        description={'Desde llamadas de voz cristalinas hasta servicios de mensajería avanzados, estamos aquí para que cada conversación sea especial.'}
                        background='https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1910&q=80'
                        subheader={'Habla sin Límites, Conéctate al Mundo'}
                    />

                    <AppleCardApp
                        opaque
                        media={'https://www.apple.com/v/apps/a/images/overview/apps/tier1/chiclets/weather_chiclet__85gxx6e7lnmm_medium.png'}
                        header={'Centro de Datos'}
                        description={'Con altos estándares de seguridad y rendimiento, proporcionamos la infraestructura necesaria para que tus datos estén siempre disponibles, protegidos y en constante crecimiento.'}
                        background={'https://images.unsplash.com/photo-1642229407672-32411805153f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80'}
                        subheader={'Donde Tus Datos Encuentran Hogar'}
                    />
                </div>

                <div
                    className="flex"
                >
                    <AppleCardHugeHorizontal
                        color='primary'
                        media='https://ucarecdn.com/2f4bfd97-2885-4701-be12-ece1fd5dfa1a/download.png'
                        header='Creando Comunicación, Conectando el Mundo Entero.'
                        subheader='Tu socio en telecomunicaciones y conectividad de confianza.'
                    />
                </div>

                <div
                    className="flex"
                >
                    <AppleCardHugeHorizontal
                        reverse
                        color='foreground'
                        media='https://ucarecdn.com/caa40015-4da4-41a6-8494-d6266fba56e5/bubbleicon.webp'
                        header='Uniendo Voces, Datos y Sueños: Conexión Infinita.'
                        subheader='Transformando la forma en que el mundo se comunica.'
                    />
                </div>

                <div
                    className="flex"
                >
                    <FormAppleCard />
                </div>

                <div
                    className="flex gap-4"
                >
                    <AppleCardSquare
                        media="https://plus.unsplash.com/premium_photo-1664693751174-5c216023fcae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                        subheader='Inspira, Conecta y Comunica: Tu Éxito, Nuestra Misión'
                        header='Comunicaciones Excepcionales, Conectando a Personas y Negocios'
                    />

                    <AppleCardSquare
                        media="https://images.unsplash.com/photo-1582193607281-dafb7941640f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                        subheader='Comunicaciones de Vanguardia'
                        header='Transformamos Ideas en Comunicaciones que Marcan la Diferencia'
                    />

                </div>
            </div>

        </section>
    )
}

export default HomeFeatures