const rootEl = document.getElementById("root")

const HeaderSpan1 = (props) => {
    return <span id="HeaderSpan" class="text-white">
        ROHINI MURUGESAN
    </span>
}
const HeaderSpan2 = (props) => {
    return <span id="HeaderSpan2" class="text-white d-block">
        Automation Test Engineer
    </span>
}

const ProfileImage = ({src}) => {
    console.log(src)
    return <img id="ProfileImage" src={src} class="border-danger img-fluid mx-auto d-block">
    </img>
}

const Header = (props) => {
    const src = "empty-avatar.png"
    return (
            <div class="row">
                <div id={props.id} class={props.class}> 
                    <HeaderSpan1/>  
                    <HeaderSpan2/>  
                    <ProfileImage src={src}></ProfileImage>
                </div>
            </div>)
}


const List = ({value}) => {
    return (
        <li>{value}</li>
    )
}

const ProfessionalList = (props)=>{
    return (
        <ul type={props.type} id={props.id} class="mt-3">
        <List value="Test Strategy Planning"> </List>
        <List value="Automation Framework Development"> </List>
        <List value="Expertise in Creation of Test Scripts"> </List>
        <List value="Detailed Test Report Automation"> </List>
        <List value="Well versed with Agile Methodologies"> </List>
        <List value="Version Control System - GIT"> </List>
        <List value="Test Tracking Tool  - JIRA"> </List>
        <List value="Code Review - GERRIT"> </List>
        </ul>
    )
}

const  PersonalList = (props)=>{
    return (
        <ul type={props.type} id={props.id} class="mt-3">
        <List value="Reliable and Professional"> </List>
        <List value="Communication Skills"> </List>
        <List value="Organized"> </List>
        <List value="Team player"> </List>
        <List value="Fast learner"> </List>
        <List value="Motivated"> </List>
        </ul>
    )
}

const  ContactList = (props)=>{
    return (
        <ul type={props.type} id={props.id} class="mt-3">
        <List value="8610352003"> </List>
        <List value="rohinimurugesan.23@gmail"> </List>
        </ul>
    )
}
const  References = (props)=>{
    return (
        <ul type="none" id={props.id} class="mt-3">
        <span>LINKEDIN</span>
        <List value="https://www.linkedin.com/in/rohin i-murugesan-596579146/"> </List>
        <br/>
        <span>GITHUB</span>
        <List value="https://github.com/RohiniMurugesan"> </List>
        </ul>
    )
}
    
 
const HighlightSide1 = (props)=>{
    return (
        <p class="text-white mt-5 text-left ml-3">
        P R O F E S S I O N A L  &nbsp; S K I L L 
        <ProfessionalList type="square" id="professionalList">
        </ProfessionalList>
    </p>
    )
}

const HighlightSide2 = (props)=>{
    return (
        <p class="text-white mt-5 text-left ml-3">
        P E R S O N A L  &nbsp; S K I L L 
        <PersonalList type="square" id="personalList">
        </PersonalList>
    </p>
    )
}

const HighlightSide3 = (props)=>{
    return (
        <p class="text-white mt-5 text-left ml-3">
        C O N T A C T
        <ContactList type="none" id="contactList">
        </ContactList>
    </p>
    )
}

const HighlightSide4 = (props)=>{
    return (
        <p class="text-white mt-5 text-left ml-3">
        R E F E R E N C E S
        <References id="References">
        </References>
    </p>
    )
}


const HighlightSide = (props) => {
    return (
            <div class={props.class} id={props.id}>
                <HighlightSide1/>
                <HighlightSide2/>
                <HighlightSide3/>
                <HighlightSide4/>

            </div>      
    )
}

const HighlightMain1 = (props) => {
    return (
            <div id="mainhighlight1">
                <span id="careerObj" class="topic"> C A R E E R &nbsp; O B J E C T I V E </span>
                <br/>
                <br/>
                <p>
                Aiming to work in a stimulating environment which inspires to give my best and to have a sustaining career growth with continuous learning process thereby developing along with the organisation.
                </p>
                <Hr/>
            </div>      
    )
}

const Hr = () => <hr class="bg-dark mt-4 hrclass"></hr>

const HighlightMain2 = (props) => {
    return (
            <div id="mainhighlight2">
                <span id="careerObj" class="topic"> T E C H N I C A L  &nbsp;S K I L L S </span>
                
                <TechSkills/>   
            <Hr/>  
            </div>      
    )
}
const TechSkills = (props) => {
    return (
        <ul type="none">
        <br/>
        <span class="topic">OPERATING SYSTEM </span>
        <List value=" &nbsp;UNIX | WINDOWS"> </List>
        <br/>
        <span class="topic">PROGRAMMING LANGUAGES </span>
        <List value=" &nbsp;PYTHON | JAVASCRIPT | HTML | CSS | SELENIUM | "> </List>
        <br/>
        <span class="topic">AUTOMATION FRAMEWORK</span>
        <List value=" &nbsp;QUALI TESTSHELL STUDIO  | TELSAT | CUCUMBER"> </List>
        <br/>
        <span class="topic">TOOLS </span>
        <List value=" &nbsp;JIRA |  WIRESHARK | POSTMAN | GIT  | GERRIT"> </List>
        </ul>
    )
}

const Education = (props) => {
    return (
        <ul type="none">
        <br/>
        <span class="topic">BACHELOR OF ENGINEERING IN COMPUTER SCIENCE</span>
        <List value=" &nbsp;Jeppiaar SRR Engineering College  | 2017 | 83.9%"> </List>
        <br/>
        <span class="topic">HIGHER SECONDARY </span>
        <List value=" &nbsp;D.A.V. Higher Secondary School, Gopalapuram.| 2013 | 92.25%"> </List>
        <br/>
        <span class="topic">HIGH SCHOOL</span>
        <List value=" &nbsp;St.Kevin's High School | 2011 | 93.6%"> </List>
        </ul>
    )
}

const Awards = (props) => {
    return (
        <ul type="none">
        <br/>
        <span class="topic">BRAVO AWARD - 2018</span>
        <List value=" &nbsp;Automation Framework Development | Tata Elxsi | "> </List>
        <br/>
        <span class="topic">CUSTOMER APPRECIATION AWARD - 2019</span>
        <List value=" &nbsp;Optimisation of existing System Test Framework(STF) | Vodafone Ziggo |"> </List>
        <br/>
        </ul>
    )
}

const HighlightMain3 = (props) => {
    return (
            <div id="mainhighlight3">
                <span id="education" class="topic"> E D U C A T I O N </span>
                <Education></Education>
                <Hr/>
            </div>      
    )
}

const HighlightMain4 = (props) => {
    return (
            <div id="mainhighlight4">
                <span id="awards" class="topic"> A W A R D S </span>
                <Awards></Awards>
                <Hr/>
            </div>      
    )
}

const HighlightMain = (props) => {
    return (
            <div class={props.class} id={props.id}>
            <HighlightMain1/>
            <HighlightMain2/>
            <HighlightMain3/>
            <HighlightMain4/>

            </div>      
    )
}

const Highlights = (props) => {
    return (
            <div class="row" id={props.id}>
                <HighlightMain id="highlightMain" class="mt-1 col-md-8 offset-lg-1 col-lg-7 col-sm-12 text-lett">
                </HighlightMain>
                <HighlightSide id="highlightSide" class="mt-1 col-md-4  col-lg-3 col-sm-12 text-center">
                </HighlightSide>

            </div>)
}

const App = () =>  {
    return (
        <div class="container">
            <Header id="header" class="mt-3 col-md-12 offset-lg-1 col-lg-10 col-sm-12 bg-danger text-center"></Header>
            <Highlights id="Highlights"></Highlights>
        </div>
    )
}

ReactDOM.render(<App/>,rootEl)


