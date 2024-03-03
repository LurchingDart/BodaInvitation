
import Image from "next/image";
import Link from "next/link"
import Countdown from "@/components/Countdown";
import churchImage from '../../public/church.svg'
import receptionImage from '../../public/reception.svg'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader, CardList,
    CardTitle
} from "@/components/ui/card";

export default function Home() {
    return (
        <main
            style={{
                backgroundImage: "url('/background.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className="flex flex-col min-h-screen items-center">
            <section
                className="flex h-screen flex-col py-10 px-2 justify-evenly items-center md:my-24">
                <Image
                    src="/foto-banner.png"
                    alt="Lulú y Gil"
                    width={500}
                    height={500}
                />
                <div className="flex flex-col text-center gap-5">
                    <p className="font-im-fell">
                        ANUNCIANDO LA BODA DE ORO DE
                    </p>
                    <p className="font-im-fell text-7xl">
                        Lulú y Gil
                    </p>
                    <p className="font-im-fell">
                        DIECINUEVE DE ABRIL DEL DOS MIL VEINTICUATRO
                    </p>
                </div>
            </section>
            <section className="flex flex-col h-dvh justify-evenly px-5">
                <Image
                    src="/divider3.svg"
                    alt="Divider"
                    width={700}
                    height={700}
                    className="mx-auto"
                />
                <p className="text-center font-im-fell text-2xl">El amor es un secreto que los ojos no saben guardar, y
                    seguimos mirándonos igual 50 años después.</p>
                <p className="text-center font-im-fell text-2xl">Hoy tenemos el placer de invitarles a nuestra
                    celebración por nuestra:</p>
                <p className="text-center font-dancing text-7xl text-luxor-gold-600 mx-auto font-bold">Boda de Oro</p>
            </section>
            <section className="flex flex-col h-fit items-center m-5 gap-16">
                <Card>
                    <CardHeader>
                        <Image
                            src="/calendar-heart.png"
                            alt="Lulú y Gil"
                            width={124}
                            height={124}
                            className="my-5"
                        />
                        <CardTitle>Fecha:</CardTitle>
                    </CardHeader>
                    <Countdown/>
                </Card>
            </section>
            <section className="flex flex-col gap-16 my-10">
                <Image
                    src={churchImage}
                    alt="Lulú y Gil"
                    className="w-full"
                />
                <div className="px-5">
                    <Card>
                        <CardHeader>
                            <Image
                                src="/church.png"
                                alt="Arco de boda"
                                width={124}
                                height={124}
                                className="my-5"
                            />
                            <CardTitle>Ceremonia Religiosa en:</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center font-dancing text-3xl text-luxor-gold-600 ">
                                Templo de la Inmaculada Concepción de San Diego de Alcalá
                            </p>
                            <p className="text-center font-im-fell text-2xl">Rivero y Gutiérrez 101-A, Zona Centro,
                                20000 Aguascalientes; Ags.</p>
                        </CardContent>
                        <CardFooter>
                            <p className="font-im-fell text-2xl">19:00 Hrs.</p>
                            <Button asChild>
                                <Link
                                    href={"https://maps.app.goo.gl/bA2gt28jB5Es6YbX7"}
                                    className="gap-3"
                                >
                                    <Image
                                        src="/map-marker.png"
                                        alt="Pin de localización"
                                        width={25}
                                        height={25}
                                    />
                                    Ver Mapa
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
            <section className="flex flex-col gap-16 my-10">
                <Image
                    src={receptionImage}
                    alt="Recepción"
                    className="w-full"
                />
                <div className="px-5">
                    <Card>
                        <CardHeader>
                            <Image
                                src="/glass-cheers.png"
                                alt="Copas de brindis"
                                width={124}
                                height={124}
                                className="my-5"
                            />
                            <CardTitle>
                                Recepción en:
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center font-dancing text-3xl text-luxor-gold-600 ">
                                Salón de Banquetes "S.U.T.E.R.M."
                            </p>
                            <p className="text-center font-im-fell text-2xl">
                                Av. Aguascalientes Ote. 2865, Ojocaliente, 20196 Aguascalientes, Ags.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <p className="font-im-fell text-2xl">20:30 Hrs.</p>
                            <Button asChild>
                                <Link
                                    href={"https://maps.app.goo.gl/txAtmBz9bRkiEwum6"}
                                    className="gap-3"
                                >
                                    <Image
                                        src="/map-marker.png"
                                        alt="Pin de localización"
                                        width={25}
                                        height={25}
                                    />
                                    Ver Mapa
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
            <section className="flex flex-col h-fit items-center px-5 my-5 gap-16">
                <Image
                    src="/divider3.svg"
                    alt="Divider"
                    width={700}
                    height={700}
                    className="mx-auto transform rotate-180"
                />
                <p className="text-center font-dancing text-7xl text-luxor-gold-600 mx-auto font-bold">
                    Confirmanos tu asistencia
                </p>
                <p className="text-center text-2xl font-im-fell">
                    Para nosotros será muy importante contar con su compañia, para eso pedimos su confirmación de su
                    asistencia en el link siguiente:
                </p>
                <Button asChild>
                    <Link
                        href={"https://api.whatsapp.com/send/?phone=5214491038784&text=Estaremos+encantados+de+asistir+a+las+Boda+de+Oro+de+Lul%C3%BA+y+Gil.&type=phone_number&app_absent=0"}
                        className="gap-3"
                    >
                        <Image
                            src="/whatsapp.png"
                            alt="WhatsApp Logo"
                            width={25}
                            height={25}

                        />
                        Confirmar Asistencia
                    </Link>
                </Button>
                <Card>
                    <CardHeader>
                        <Image
                            src="/star.png"
                            alt="Estrella de brillo"
                            width={124}
                            height={124}
                            className="my-5"
                        />
                        <CardTitle>
                            <p className="text-center font-dancing text-5xl text-luxor-gold-600">
                                Recomendaciones:
                            </p>
                        </CardTitle>
                    </CardHeader>
                    <CardList>
                        <ul className="text-2xl">
                            <li>
                                <div className="flex items-center my-5 gap-5">
                                    <Image
                                        src="/restaurant.png"
                                        alt="Cubiertos de restaurante"
                                        width={24}
                                        height={24}
                                    />
                                    <span>No se sirven alimentos después de las 21:30 HRS</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center my-5 gap-5">
                                    <Image
                                        src="/shirt.png"
                                        alt="Camisa de vestir"
                                        width={24}
                                        height={24}
                                    />
                                    <span>Vestimenta Elegante Formal</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center my-5 gap-5">
                                    <Image
                                        src="/ticket.png"
                                        alt="Ticket de entrada"
                                        width={24}
                                        height={24}
                                    />
                                    <span>Entrada a la recepción con riguroso boleto</span>
                                </div>
                            </li>
                        </ul>
                    </CardList>
                </Card>
                <p className="text-center font-dancing text-5xl text-luxor-gold-600 my-10">
                    Contamos con su presencia!
                </p>
            </section>
        </main>
    );
}
