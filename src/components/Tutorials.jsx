import Island from './Island.jsx'
import allTuts from '../data/tops.json'
import '../styles/Tutorials.css'

export default function Tutorials({ subjects = Object.keys(allTuts) }) {
    return <section class="tutorials" aria-label="Tutorials">
        {subjects.map((subject) => <Island key={subject} subject={subject} />)}
    </section>
}
