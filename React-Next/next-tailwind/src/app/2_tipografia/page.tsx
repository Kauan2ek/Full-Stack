export default function Tipografia() {
    return (
        <div>
            <h1 className="text-[1rem] md:text-[2rem] lg:text[3rem] xl:text-[4rem]">
                Título Responsivo
            </h1>
            <h1 className="font-sans">Título 01</h1>
            <h1 className="font-serif">Título 02</h1>
            <h1 className="font-mono">Título 03</h1>
            <h1 className="text-2xl">Título 04</h1>
            <h1 className="text-sm/12">Título 05</h1> {/* line-height */}
            <h1 className="text-2xl italic">Título 06</h1>
            <h1 className="font-thin">Título 07</h1>
            <h1 className="font-thin tracking-widest">Título 08</h1>{" "}
            {/* letter-spacing */}
            <h1 className="text-left">Título 09</h1>
            <h1 className="text-center">Título 10</h1>
            <h1 className="text-right">Título 11</h1>
            <p className="text-justify ml-7 mr-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                similique animi ullam optio? Eius tenetur in explicabo aliquid
                nihil delectus consequatur, distinctio aliquam et sint
                voluptates temporibus recusandae ipsum vero!
            </p>
        </div>
    );
}
