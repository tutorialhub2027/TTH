import Island from './Island.jsx'
import allTuts from '../data/tops.json'
import '../styles/Tutorials.css'

export default function Tutorials({ subjects = Object.keys(allTuts) }) {
    return <section id="tutorials" className="tutorials" aria-labelledby="tutorials-title">
        <h2 id="tutorials-title">Tutorials</h2>
        <div className="tutorials-grid">
            {subjects.map((subject) => <Island key={subject} subject={subject} />)}
        </div>
    </section>
}
