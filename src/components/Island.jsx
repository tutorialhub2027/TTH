import allTuts from '../data/tops.json'
import '../styles/Island.css'
import { ArrowRight, BookOpen, ChevronRight, Trophy, Dumbbell, Wrench, Shapes } from 'lucide-react'

const subjectIcons = {
    'School Curriculums': BookOpen,
    Olympiads: Trophy,
    Sports: Dumbbell,
    Fixes: Wrench,
    Other: Shapes,
}
function TopLinks({ links, name }) {
    return <>
        {links.length > 0 && (
            <ul className="island-links">
                {links.slice(0, 4).map((link) => (
                    <li key={link}>
                        <a href={`/tutorial?title=${encodeURIComponent(link)}`} className="tt-link"><span>{link}</span><ChevronRight size={16} aria-hidden="true" /></a>
                    </li>
                ))}
            </ul>
        )}

        {links.length > 4 && (
            <a className="all-tt" href={`/tutorial?subject=${encodeURIComponent(name)}`}>All tutorials <ArrowRight size={16} aria-hidden="true" /></a>
        )}
    </>
}

export default function Island({ subject }) {
    const Icon = subjectIcons[subject] ?? Shapes
    const sectionId = subject.toLowerCase().trim().replace(/\s+/g, '-')

    return <article className="Island" id={sectionId}>
        <h3 className="title">
            <span className="island-icon"><Icon size={22} aria-hidden="true" /></span>
            {subject}
        </h3>
        <TopLinks links={allTuts[subject] ?? []} name={subject} />
    </article>
}
