import Image from "next/image";

export default function Aplicacao() {
    return (
        <div className="border p-3">
            <Image
            className="float-start m-2"
            src="/img/cidade.jpg"
            alt="Descrição"
            width={180}
            height={180}
            />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda praesentium in provident dolorum inventore labore sint hic eligendi debitis dicta itaque quia maxime veritatis id accusamus error esse, mollitia tempora.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda praesentium in provident dolorum inventore labore sint hic eligendi debitis dicta itaque quia maxime veritatis id accusamus error esse, mollitia tempora.</p>
        </div>
    );
}
