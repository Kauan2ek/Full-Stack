export const bootstrap = (): void => {
    interface Resume {
        fullName: string;
        email: string;
        skills: Skill[];
        addSkill: (skill: Skill) => boolean;
    }

    interface Skill {
        name: string;
        level: 'begginer' | 'intermediate' | 'advanced';
    }

    interface Resume { 
        // Resume + Resume: adiciona atributos novos declarados, considerando os anteriormente declarados
        dateOfBirth?: Date;
        sumary?: string;
    }

    class MyResume implements Resume {
        constructor(
            public fullName: string,
            public email: string,
            public skills: Skill[],
        ) {}

        addSkill(skill: Skill): boolean {
            const initialLenght = this.skills.length;
            this.skills.push(skill);

            return this.skills.length > initialLenght;
        }
    }

    const myResume = new MyResume(
        'Kauan Talles',
        'kauan@gmail.com',
        []
    );

    myResume.addSkill({ name: 'Javascript', level: 'advanced' })
    myResume.addSkill({ name: 'Typescript', level: 'intermediate' })
    console.log(myResume);
}