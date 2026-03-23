export const bootstrap = (): void => {
    type Font = 'reboto' | 'open sans';
    type ColorScheme = 'light' | 'dark';
    type Layout = 'one-column' | 'two-column';

    class MyResume implements Resume {
        constructor(
            public fullName: string,
            public email: string,
            public skills: Skill[],
            public font: Font,
            public colorScheme: ColorScheme,
            public layout: Layout,
            public dateOfBirth: Date,
        ) {}

        addSkill(skill: Skill): boolean {
            const initialLenght = this.skills.length;
            this.skills.push(skill);

            return this.skills.length > initialLenght;
        }
    }
    HTMLElement;
    const myResume = new MyResume('Kauan Talles', 'kauan@gmail.com', [], 'open sans', 'dark', 'one-column', new Date('2000-01-20'));

    myResume.addSkill({ name: 'Javascript', level: 'advanced' });
    myResume.addSkill({ name: 'Typescript', level: 'intermediate' });
    console.log(myResume);
};
