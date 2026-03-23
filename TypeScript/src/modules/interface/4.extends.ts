export const bootstrap = (): void => {
    interface PersonalInfo {
        fullName: string;
        email: string;
        dateOfBirth?: Date;
        sumary?: string;
    }

    interface Resume extends PersonalInfo, Theme {
        skills: Skill[];
        addSkill: (skill: Skill) => boolean;
    }

    interface Skill {
        name: string;
        level: 'begginer' | 'intermediate' | 'advanced';
    }

    type Font = 'reboto' | 'open sans';
    type ColorScheme = 'light' | 'dark';
    type Layout = 'one-column' | 'two-column';
    interface Theme {
        font: Font;
        colorScheme: ColorScheme;
        layout: Layout;
    }

    class MyResume implements Resume {
        constructor(
            public fullName: string,
            public email: string,
            public skills: Skill[],
            public font: Font,
            public colorScheme: ColorScheme,
            public layout: Layout
        ) {}

        addSkill(skill: Skill): boolean {
            const initialLenght = this.skills.length;
            this.skills.push(skill);

            return this.skills.length > initialLenght;
        }
    }
    HTMLElement
    const myResume = new MyResume(
        'Kauan Talles',
        'kauan@gmail.com',
        [],
        'open sans',
        "dark",
        "one-column"
    );

    myResume.addSkill({ name: 'Javascript', level: 'advanced' });
    myResume.addSkill({ name: 'Typescript', level: 'intermediate' });
    console.log(myResume);
};
