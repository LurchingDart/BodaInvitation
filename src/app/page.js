import Image from "next/image";
import Countdown from "@/components/Countdown";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">
            <section
                style={{
                    backgroundImage: "url('/background.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                className="flex h-screen flex-col py-10 px-2 justify-between">
                <Image
                    src="/foto-banner.png"
                    alt="Lulú y Gil"
                    width={500}
                    height={500}
                />
                <Image
                    src="/text-invitation.png"
                    alt="Lulú y Gil"
                    width={700}
                    height={700}
                />
            </section>
            <section className="flex flex-col h-dvh justify-evenly px-5">
                <Image
                    src="/divider2.png"
                    alt="Lulú y Gil"
                    width={700}
                    height={700}
                    className="transform rotate-180 mx-auto"
                />
                <p className="text-center font-im-fell text-2xl">El amor es un secreto que los ojos no saben guardar, y
                    seguimos mirándonos igual 50 años después.</p>
                <p className="text-center font-im-fell text-2xl">Hoy tenemos el placer de invitarles a nuestra
                    celebración por nuestra:</p>
                <p className="text-center font-dancing text-7xl text-gold mx-auto font-bold">Boda de Oro</p>
            </section>
            <section className="flex flex-col h-fit items-center px-5 my-5 gap-16">
                <Image
                    src="/wedding-date.gif"
                    alt="Lulú"
                    width={124}
                    height={124}
                    unoptimized={true}
                />
                <p className="text-center font-dancing text-7xl text-gold mx-auto">Fecha</p>
                <p className="text-center font-im-fell text-6xl text-alabaster-800 mx-auto">19 | abril | 2024</p>
                <Countdown/>
            </section>
            <section className="flex flex-col h-fit items-center px-5 my-5 gap-16 border-4 border-alabaster-600">
                <Image
                    src="/church.png"
                    alt="Lulú y Gil"
                    width={700}
                    height={700}
                    className="mx-auto"
                />
                <p className="text-center font-im-fell text-2xl">Ceremonia Religiosa en:</p>
                <p className="text-center font-dancing text-3xl text-gold mx-auto">Templo de la Inmaculada Concepción de
                    San Diego de Alcalá</p>
                <p className="text-center font-im-fell text-2xl">Rivero y Gutiérrez 101-A, Zona Centro, 20000
                    Aguascalientes; Ags. 19:00 Hrs.</p>

            </section>
            <section className="flex flex-col h-screen items-center px-5">
                <Image
                    src="/church.png"
                    alt="Lulú y Gil"
                    width={700}
                    height={700}
                    className="mx-auto"
                />
                <Card>
                    <CardHeader>
                        <Image
                            src="/church.png"
                            alt="Lulú y Gil"
                            width={800}
                            height={800}
                            className="mx-auto rounded-t-lg"
                        />
                        <br/>
                        <CardTitle>Ceremonia Religiosa en:</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center font-dancing text-3xl text-gold">Templo de la Inmaculada Concepción de San Diego de Alcalá</p>
                        <p className="text-center font-im-fell text-2xl">Rivero y Gutiérrez 101-A, Zona Centro, 20000 Aguascalientes; Ags.</p>
                    </CardContent>
                    <CardFooter>
                        <p className="font-im-fell text-2xl">19:00 Hrs.</p>
                    </CardFooter>
                </Card>
            </section>
        </main>
    );
}
