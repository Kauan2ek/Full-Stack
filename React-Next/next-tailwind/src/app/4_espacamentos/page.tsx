export default function Aplicacao() {
    return (
        <div className="text-2xl">
            {/* 
            t: top
            r: right
            b: bottom
            l: left
            px: horizontal
            py: vertical

            s: start
            e: end

            p-[5px]
            */}
            <div className="bg-blue-300 p-8 md:p-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At delectus facere eius totam sint ab dolore accusamus voluptatibus nostrum et alias dignissimos obcaecati non, dolor repudiandae illo repellat officiis ex?
            </div>

            <div className="bg-amber-200 text-black my-5 mx-3 text-justify p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo corporis possimus quidem cupiditate, voluptates provident natus facere fugit eos atque nam sequi dolores enim, hic minus ex soluta nostrum. Eos!
            </div>

            <div className="bg-red-100 text-black">
                teste
            </div>
        </div>
    );
}
