const e = React.createElement;

function tRowTemplate(text, source) {
    return (
        e('tr', {className: 'trow'},
            e('th', {className: 'thead'}, text),
            e('td', {className: 'tdata'}, source)
        )
    );
};

class createTables extends React.Component {
    constructor(props) {
        super(props)
        this.data = {
            'computerScience': [{
                source: 'Article',
                title: 'Computer Science and Computing-Related Fields: What are They and What’s the Difference?',
                author: 'n/a',
                datePublished: 'n/a',
                nameOfPublication: 'The University of Maine',
                url: e('a', {href: 'https://umaine.edu/cs/what-is-cs/', target: '_blank'}, 'https://umaine.edu/cs/what-is-cs/'),
                summary: `Computer science is the study of theory, design, implementation, computability and computation, and performance of computers and computer software. Work done by computer scientists falls into three categories: 1.) Computer scientists design and implement software. They take challenging programming jobs and keep up with the latest advancements. 2.) Computer scientists develop effective ways to solve computing problems. Their theoretical and algorithmic backgrounds allow them to find the best methods and develop new approaches that provide better performance. 3.) Lastly, they increase the range from theory through programming.`
            }],
            technicalSkills: [
                {
                    source: 'Article',
                    title: '11 Essential Skills to become Software Developer in 2021',
                    author: 'javinpaul',
                    datePublished: 'May 15, 2020',
                    nameOfPublication: 'Java revisited',
                    url: e('a', {href: 'https://medium.com/javarevisited/11-essential-skills-to-become-software-developer-in-2020-c617e293e90e', target: '_blank'}, 'https://medium.com/javarevisited/11-essential-skills-to-become-software-developer-in-2020-c617e293e90e'),
                    summary: `The following are essential skills for software developers: Data structures and algorithms, object-oriented programming, scripting language, and databases with SQL are for programming literacy. Cloud computing; source control, such as Git and Github; tools and containers, such as Docker and Kubernetes; computer networking concepts; and text editors and IDEs for management, efficiency, and deployment.`
                },
                {
                    source: 'Article',
                    title: '7 In-Demand IT Skills to Boost Your Resume in 2021',
                    author: 'Coursera',
                    datePublished: 'October 13, 2021',
                    nameOfPublication: 'Coursera',
                    url: e('a', {href: 'https://www.coursera.org/articles/key-it-skills-for-your-career', target: '_blank'}, 'https://www.coursera.org/articles/key-it-skills-for-your-career'),
                    summary: `The following are in-demand IT skills: Knowledge with concepts related to security purposes and programming languages. Capabilities to operate computer systems and networks smoothly. Skills in data analysis, cloud computing, and machine learning. Awareness of DevOps—a combination of "development" and "operations"—acts as a bridge between software development and IT teams.`
                },
                {
                    source: 'Article',
                    title: '13 Technical Skills You Should Have As A Developer',
                    author: 'contributed by: anuupadhyay',
                    datePublished: 'June 26, 2019',
                    nameOfPublication: 'Geeks for Geeks',
                    url: e('a', {href: 'https://www.geeksforgeeks.org/13-technical-skills-you-should-have-as-a-developer/', target: '_blank'}, 'https://www.geeksforgeeks.org/13-technical-skills-you-should-have-as-a-developer/'),
                    summary: `Data structures and algorithms are the topmost priority to check problem-solving and coding skills. Developers should also know how to use cross-platform software as this allows them to write code once, and that is shared across different platforms. Web applications or software use sensitive information; thus, a developer needs to implement a secure and encrypted key to prevent all kinds of attacks. Developers should also know the life cycle of software development, from requirements analysis to maintenance. Testing is also an essential step before the software is open to the public; it helps find bugs. Developers should learn about operating systems as they can face many issues related to operating systems.`
                }
            ],
            softSkills: [
                {
                    source: 'Blog',
                    title: 'Why Soft Skills in Tech Are More Important Than You Think',
                    author: 'Ashley Brooks',
                    datePublished: 'June 24, 2019',
                    nameOfPublication: 'Rasmussen University',
                    url: e('a', {href: 'https://www.rasmussen.edu/degrees/technology/blog/soft-skills-in-technology/', target: '_blank'}, 'https://www.rasmussen.edu/degrees/technology/blog/soft-skills-in-technology/'),
                    summary: `Soft skills that are especially valuable in the tech field include the following: technology projects that require a team with individual strengths to accomplish a goal, which means plenty of communication between the members, clients, and users. Your approachability also matters, such as being friendly, open, and helpful. Problem-solving and critical thinking are also valuable in the tech fields. Practice and experience help boost your soft skills.
                    `
                },
                {
                    source: 'Article',
                    title: 'Why You Need Soft Skills as a Software Developer – And How to Improve Them',
                    author: 'Simon Holdorf',
                    datePublished: 'February 18, 2021',
                    nameOfPublication: 'Freecodecamp',
                    url: e('a', {href: 'https://www.freecodecamp.org/news/why-you-need-soft-skills-as-a-software-developer/', target: '_blank'}, 'https://www.freecodecamp.org/news/why-you-need-soft-skills-as-a-software-developer/'),
                    summary: `Soft skills involve our interactions with others, ourselves, and our environment. These are crucial skills for both our personal life and our career. These are important to build networks in organizations and communities. The tech industry is competitive; thus, being approachable and having that network of people who enjoy working with you can open doors for new opportunities. Soft skills that can help you include communication and collaboration skills, conflict resolution skills, emotional intelligence, and time management. Soft skills are like any other skills, practice them regularly, and you'll improve. Some ways you can practice are being an active listener, responding to feedback, being confident when talking with people, and being curious about other people and their ideas. Keep in mind that some soft skills take more time to develop. It's best to focus on one area at a time.`
                },
                {
                    source: 'Article',
                    title: '4 Skills Tech Industry Employees Say Today’s Students Need to Succeed',
                    author: 'Meghan Bogardus Cortez',
                    datePublished: 'August 16, 2017',
                    nameOfPublication: 'EdTech',
                    url: e('a', {href: 'https://edtechmagazine.com/k12/article/2017/08/4-skills-tech-industry-employees-say-todays-students-need-succeed', target: '_blank'}, 'https://edtechmagazine.com/k12/article/2017/08/4-skills-tech-industry-employees-say-todays-students-need-succeed'),
                    summary: `In a podcast with Meghan Bogardus Cortez, employees from Google, Pinterest, and Twitter share the best skills students can have. Any industry needs clear written and spoken communication to express themselves to the public, the clients, and the teams. Problem-solving mimics the tech industry. Attempts and failures in solving problems can mimic the workplace and help students handle later job stresses. Maintaining curiosity around learning is a crucial soft skill in the tech industry because it's a field where learning can happen on the job.  Finally, the last soft skill to develop is letting go of the fear of technical subjects, like STEM. As Ryan Greenberg says, It's important to develop the skill that you are capable of learning anything—even if it's technical.`
                }
            ]
        }
    }

    render() {
        const dataKey = this.props.dataKey;
        const index = this.props.index;
        return (
            e('table', {},
                tRowTemplate('Type of Source:', this.data[dataKey][index].source),
                tRowTemplate('Title:', this.data[dataKey][index].title),
                tRowTemplate('Author(s):', this.data[dataKey][index].author),
                tRowTemplate('Data Published:', this.data[dataKey][index].datePublished),
                tRowTemplate('Name of Publication:', this.data[dataKey][index].nameOfPublication),
                tRowTemplate('URL:', this.data[dataKey][index].url),
                tRowTemplate('Summary of Source:', this.data[dataKey][index].summary)
            )
        );
    }
}

const makeTable = document.querySelectorAll('.make-table');

makeTable.forEach(table => {
    const dataKey = table.getAttribute('data-key');
    const index = table.getAttribute('data-index');
    ReactDOM.render(
        e(createTables, {
            dataKey: dataKey, 
            index: index
        }), table);
});

// buttons
const btns = [
    document.querySelector('.arrow'),
    document.getElementById('cs-btn'),
    document.getElementById('ts-btn'),
    document.getElementById('ss-btn')
];
// button destinations
const btnDestinations = [
    document.getElementById('main'),
    document.getElementById('cs'),
    document.getElementById('ts'),
    document.getElementById('ss')
];

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        btnDestinations[i].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    });
}

