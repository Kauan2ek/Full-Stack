// O princípio do uso de interface é semelhante ao Type Alias, sendo porém amplamente implementado em contextos onde a lógica é utilizada em no paradigma de orientação à objetos, quando nos atentamos ao estado e comportamento das coisas.
// type-alias -> ultizado em paradigmas funcionais
export const bootstrap = (): void => {
    interface Resume {
        fullName: string;
        email: string;
        skills: Skill[];
        addSkill?: (skill: Skill) => boolean;
    }

    interface Skill {
        name: string;
        level: 'begginer' | 'intermediate' | 'advanced';
    }

    const myResume: Resume = {
        fullName: 'Kauan Talles',
        email: 'kauan@gmail.com',
        skills: [
            { name: 'Javascript', level: 'advanced' },
            { name: 'Typescript', level: 'intermediate' },
        ],
    };
};
