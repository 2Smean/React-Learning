import logo from "./logo.svg";
import "./App.css";

function Header(props) {
    console.log("Headerprops", props.title);
    return (
        <header>
            <h1>
                <a href='/'>{props.title}</a>
            </h1>
        </header>
    );
}

function Nav(props) {
    const lis = [];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        console.log("t는", t);
        lis.push(
            <li key={t.id}>
                <a href={"/read/" + t.id}>{t.title}</a>
            </li>
        );
    }
    console.log("Navprops=");
    return (
        <nav>
            <ol>{lis}</ol>
        </nav>
    );
}

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function App() {
    const topics = [
        { id: 1, title: "html", body: "html is ..." },
        { id: 2, title: "css", body: "css is ..." },
        { id: 3, title: "javascript", body: "javascript is ..." },
    ];
    return (
        <div>
            <Header title='WEB' /> {/* 매개변수 ( props )를 받은 곳은 일반 함수로 호출이 안된다 */}
            <Nav topics={topics} />
            <Article title='Welcome' body='Hello, web' />
        </div>
    );
}

export default App;
