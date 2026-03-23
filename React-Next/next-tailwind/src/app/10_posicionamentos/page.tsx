export default function Aplicacao() {
    return (
        <div className="p-2 border">
            <p className="bg-orange-400 m-2">
                ITEM DE DESTAQUE sit amet, consectetur adipisicing elit. Quasi, in perspiciatis! Eius velit ipsam necessitatibus aliquam, exercitationem tenetur.
            </p>

            <p className="bg-blue-400 m-2 sticky top-3 z-10">
                ITEM 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, in perspiciatis! Eius velit ipsam necessitatibus aliquam, exercitationem tenetur.
            </p>

            {/* <p className="bg-purple-400 m-2 relative top-4 left-3 bottom-4 right-3"> */}
            {/* <p className="bg-purple-400 m-2 relative hover:left-2"> */}
            <p className="bg-purple-400 m-2 sticky top-3 z-0">
                ITEM 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, in perspiciatis! Eius velit ipsam necessitatibus aliquam, exercitationem tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus numquam, obcaecati hic porro dolorum possimus ipsa quis enim iure, animi magni consequuntur cupiditate saepe deserunt illo corrupti doloribus fugit ea.
            </p>


            <p className="bg-gray-400 m-2 sticky z-30">
                ITEM 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, in perspiciatis! Eius velit ipsam necessitatibus aliquam, exercitationem tenetur.
            </p>

            <p className="bg-red-300 m-2 top-3 sticky z-40">
                ITEM 3  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, in perspiciatis! Eius velit ipsam necessitatibus aliquam, exercitationem tenetur.
            </p>
        </div>
    );
}
